/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "ChainlinkRequestInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ChainlinkRequestInterface__factory>;
    getContractFactory(
      name: "LinkTokenInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LinkTokenInterface__factory>;
    getContractFactory(
      name: "OracleInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OracleInterface__factory>;
    getContractFactory(
      name: "WithdrawalInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WithdrawalInterface__factory>;
    getContractFactory(
      name: "LinkTokenReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LinkTokenReceiver__factory>;
    getContractFactory(
      name: "Oracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Oracle__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ChainlinkClient",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ChainlinkClient__factory>;
    getContractFactory(
      name: "ChainlinkRequestInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ChainlinkRequestInterface__factory>;
    getContractFactory(
      name: "ENSInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ENSInterface__factory>;
    getContractFactory(
      name: "LinkTokenInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LinkTokenInterface__factory>;
    getContractFactory(
      name: "OperatorInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OperatorInterface__factory>;
    getContractFactory(
      name: "OracleInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OracleInterface__factory>;
    getContractFactory(
      name: "PointerInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PointerInterface__factory>;
    getContractFactory(
      name: "ENSResolver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ENSResolver__factory>;
    getContractFactory(
      name: "AccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControl__factory>;
    getContractFactory(
      name: "IAccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControl__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "AUSD",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AUSD__factory>;
    getContractFactory(
      name: "ISecurityToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISecurityToken__factory>;
    getContractFactory(
      name: "KYC",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KYC__factory>;
    getContractFactory(
      name: "LiminalExchange",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LiminalExchange__factory>;
    getContractFactory(
      name: "SecurityFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SecurityFactory__factory>;
    getContractFactory(
      name: "SecurityToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SecurityToken__factory>;

    getContractAt(
      name: "ChainlinkRequestInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ChainlinkRequestInterface>;
    getContractAt(
      name: "LinkTokenInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LinkTokenInterface>;
    getContractAt(
      name: "OracleInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OracleInterface>;
    getContractAt(
      name: "WithdrawalInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.WithdrawalInterface>;
    getContractAt(
      name: "LinkTokenReceiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LinkTokenReceiver>;
    getContractAt(
      name: "Oracle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Oracle>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "ChainlinkClient",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ChainlinkClient>;
    getContractAt(
      name: "ChainlinkRequestInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ChainlinkRequestInterface>;
    getContractAt(
      name: "ENSInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ENSInterface>;
    getContractAt(
      name: "LinkTokenInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LinkTokenInterface>;
    getContractAt(
      name: "OperatorInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OperatorInterface>;
    getContractAt(
      name: "OracleInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OracleInterface>;
    getContractAt(
      name: "PointerInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PointerInterface>;
    getContractAt(
      name: "ENSResolver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ENSResolver>;
    getContractAt(
      name: "AccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControl>;
    getContractAt(
      name: "IAccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControl>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "AUSD",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AUSD>;
    getContractAt(
      name: "ISecurityToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISecurityToken>;
    getContractAt(
      name: "KYC",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KYC>;
    getContractAt(
      name: "LiminalExchange",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LiminalExchange>;
    getContractAt(
      name: "SecurityFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SecurityFactory>;
    getContractAt(
      name: "SecurityToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SecurityToken>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
