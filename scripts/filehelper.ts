import * as fs from 'fs';


export const writeContractAddressesToJs = async function (href: any, kycAddress: string,
	aUsdAddress: string, liminaMarketAddress: string, usdcContractAddress: string) {

	let networkName = (href.network.name == 'hardhat') ? 'localhost' : href.network.name;
	let constantFile = 'export const ' + networkName + 'ContractAddresses = function() {\n\n';

	constantFile += '\tthis.KYC_ADDRESS = "' + kycAddress + '";\n';
	constantFile += '\tthis.AUSD_ADDRESS = "' + aUsdAddress + '";\n';
	constantFile += '\tthis.LIMINAL_MARKET_ADDRESS = "' + liminaMarketAddress + '";\n';
	constantFile += '\tthis.USDC_ADDRESS = "' + usdcContractAddress + '";\n';
	constantFile += '}';

	await fs.writeFileSync('../liminal.market.web/app/js/contracts/' + networkName + '-contract-addresses.js', constantFile, 'utf-8');

	copyAbiFile('LiminalMarket');
	copyAbiFile('aUSD');
	copyAbiFile('SecurityToken');
	copyAbiFile('KYC');

	await copyAbiFileForWeb('LiminalMarket', liminaMarketAddress);

	let content = await fs.readFileSync('../liminal.web.bridge/appsettings.networks.json');
	let json = JSON.parse(content.toString());

	json[networkName].liminaMarketAddress = liminaMarketAddress;
	fs.writeFileSync('../liminal.web.bridge/appsettings.networks.json', JSON.stringify(json));


	//console.log('constantFile', constantFile);
}


async function copyAbiFileForWeb(name: string, address: string) {
	let abiFrom = './artifacts/contracts/' + name + '.sol/' + name + '.json';
	let abiTo = '../liminal.web.bridge/' + name + '.json';
	fs.copyFile(abiFrom, abiTo, (err: any) => {
		if (err) throw err;
		console.log(abiFrom + ' was copied to ' + abiTo);
	});

	await fs.writeFileSync('../liminal.web.bridge/securityToken.txt', address, 'utf-8');

}
function copyAbiFile(name: string) {
	let abiFrom = './artifacts/contracts/' + name + '.sol/' + name + '.json';
	let abiTo = '../liminal.market.web/app/js/abi/' + name + '.json';
	fs.copyFile(abiFrom, abiTo, (err: any) => {
		if (err) throw err;
		console.log(abiFrom + ' was copied to ' + abiTo);
	});

	let jsonFrom = './artifacts/contracts/' + name + '.sol/' + name + '.json';
	let jsonTo = '../liminal.market.web/src/cloud-functions/abi/' + name + '.json';
	fs.copyFile(jsonFrom, jsonTo, (err: any) => {
		if (err) throw err;
		console.log(jsonFrom + ' was copied to ' + jsonTo);
	});
}