/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AUSD, AUSDInterface } from "../AUSD";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "BalanceSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SET_BALANCE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "grantRoleForBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_liminalMarketContract",
        type: "address",
      },
    ],
    name: "setAddresses",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "setBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604080518082018252600d81526c2aa9a21030ba10213937b5b2b960991b602080830191825283518085019094526004845263185554d160e21b9084015281519192916200006391600391620001df565b50805162000079906004906020840190620001df565b5050506200009662000090620000d560201b60201c565b620000d9565b620000a36000336200012b565b620000cf7fe2cf92468dcfb4f826eeba6f029d4279f4503e956b3f5b12dc84784c04d96d50336200012b565b620002c2565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6200013782826200013b565b5050565b60008281526006602090815260408083206001600160a01b038516845290915290205460ff16620001375760008281526006602090815260408083206001600160a01b03851684529091529020805460ff191660011790556200019b3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b828054620001ed9062000285565b90600052602060002090601f0160209004810192826200021157600085556200025c565b82601f106200022c57805160ff19168380011785556200025c565b828001600101855582156200025c579182015b828111156200025c5782518255916020019190600101906200023f565b506200026a9291506200026e565b5090565b5b808211156200026a57600081556001016200026f565b600181811c908216806200029a57607f821691505b60208210811415620002bc57634e487b7160e01b600052602260045260246000fd5b50919050565b6118cf80620002d26000396000f3fe608060405234801561001057600080fd5b50600436106101a35760003560e01c8063715018a6116100ee578063a457c2d711610097578063dd62ed3e11610071578063dd62ed3e1461037e578063deeb552b14610391578063e30443bc146103b8578063f2fde38b146103cb57600080fd5b8063a457c2d714610345578063a9059cbb14610358578063d547741f1461036b57600080fd5b806391d14854116100c857806391d14854146102fc57806395d89b4114610335578063a217fddf1461033d57600080fd5b8063715018a6146102c657806381d3c435146102ce5780638da5cb5b146102e157600080fd5b8063253a87211161015057806336568abe1161012a57806336568abe14610277578063395093511461028a57806370a082311461029d57600080fd5b8063253a8721146102405780632f2ff15d14610255578063313ce5671461026857600080fd5b806318160ddd1161018157806318160ddd146101f857806323b872dd1461020a578063248a9ca31461021d57600080fd5b806301ffc9a7146101a857806306fdde03146101d0578063095ea7b3146101e5575b600080fd5b6101bb6101b636600461164e565b6103de565b60405190151581526020015b60405180910390f35b6101d8610477565b6040516101c7919061173d565b6101bb6101f33660046115c2565b610509565b6002545b6040519081526020016101c7565b6101bb610218366004611581565b610559565b6101fc61022b366004611610565b60009081526006602052604090206001015490565b61025361024e36600461152b565b6105a4565b005b610253610263366004611629565b61062b565b604051601281526020016101c7565b610253610285366004611629565b610656565b6101bb6102983660046115c2565b6106e2565b6101fc6102ab36600461152b565b6001600160a01b031660009081526020819052604090205490565b610253610727565b6102536102dc36600461152b565b61078d565b6005546040516001600160a01b0390911681526020016101c7565b6101bb61030a366004611629565b60009182526006602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6101d8610816565b6101fc600081565b6101bb6103533660046115c2565b610825565b6101bb6103663660046115c2565b6108d6565b610253610379366004611629565b610983565b6101fc61038c366004611548565b6109a9565b6101fc7fe2cf92468dcfb4f826eeba6f029d4279f4503e956b3f5b12dc84784c04d96d5081565b6101fc6103c63660046115c2565b6109f4565b6102536103d936600461152b565b610c17565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b00000000000000000000000000000000000000000000000000000000148061047157507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b60606003805461048690611807565b80601f01602080910402602001604051908101604052809291908181526020018280546104b290611807565b80156104ff5780601f106104d4576101008083540402835291602001916104ff565b820191906000526020600020905b8154815290600101906020018083116104e257829003601f168201915b5050505050905090565b60405162461bcd60e51b815260206004820152601360248201527f4e6f206e65656420666f7220617070726f76650000000000000000000000000060448201526000906064015b60405180910390fd5b60405162461bcd60e51b815260206004820152601f60248201527f5468697320746f6b656e2063616e6e6f74206265207472616e736665726564006044820152600090606401610550565b6005546001600160a01b031633146105fe5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610550565b6106287fe2cf92468dcfb4f826eeba6f029d4279f4503e956b3f5b12dc84784c04d96d508261062b565b50565b6000828152600660205260409020600101546106478133610cf6565b6106518383610d76565b505050565b6001600160a01b03811633146106d45760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c6600000000000000000000000000000000006064820152608401610550565b6106de8282610e18565b5050565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161071e918590610719908690611772565b610e9b565b50600192915050565b6005546001600160a01b031633146107815760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610550565b61078b6000610ff3565b565b6005546001600160a01b031633146107e75760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610550565b6007805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b60606004805461048690611807565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156108bf5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610550565b6108cc3385858403610e9b565b5060019392505050565b6007546040517f6cfde4910000000000000000000000000000000000000000000000000000000081523360048201526001600160a01b038481166024830152604482018490526000921690636cfde49190606401602060405180830381600087803b15801561094457600080fd5b505af1158015610958573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061097c91906115ee565b9392505050565b60008281526006602052604090206001015461099f8133610cf6565b6106518383610e18565b60405162461bcd60e51b815260206004820152601560248201527f4e6f206e65656420666f7220616c6c6f77616e636500000000000000000000006044820152600090606401610550565b3360009081527f16b5194d5cb93eafb343b5c523fac04fcf464e70614a210fb818fa04be9e7441602052604081205460ff16610a985760405162461bcd60e51b815260206004820152602760248201527f596f7520646f6e742068617665207065726d697373696f6e20746f207365742060448201527f62616c616e6365000000000000000000000000000000000000000000000000006064820152608401610550565b6001600160a01b03831660009081526020819052604090205482811415610ac25782915050610471565b80831115610ae257610add84610ad883866117a9565b611052565b610af5565b610af584610af085846117a9565b611131565b610b346040518060400160405280600e81526020017f61557364202d20616d6f756e743a000000000000000000000000000000000000815250846112b6565b610b736040518060400160405280601581526020017f61557364202d2062616c616e63654265666f72653a0000000000000000000000815250826112b6565b6001600160a01b0384166000908152602081905260408120549050610bcd6040518060400160405280601481526020017f61557364202d2062616c616e636541667465723a000000000000000000000000815250826112b6565b604080516001600160a01b0387168152602081018690527faca675004c66aff66f6e84aac634806e6c3550b1a6ba29fc8e1c1471ad1babf1910160405180910390a1949350505050565b6005546001600160a01b03163314610c715760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610550565b6001600160a01b038116610ced5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610550565b61062881610ff3565b60008281526006602090815260408083206001600160a01b038516845290915290205460ff166106de57610d34816001600160a01b03166014611329565b610d3f836020611329565b604051602001610d509291906116bc565b60408051601f198184030181529082905262461bcd60e51b82526105509160040161173d565b60008281526006602090815260408083206001600160a01b038516845290915290205460ff166106de5760008281526006602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610dd43390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60008281526006602090815260408083206001600160a01b038516845290915290205460ff16156106de5760008281526006602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6001600160a01b038316610f165760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610550565b6001600160a01b038216610f925760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610550565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b600580546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b0382166110a85760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610550565b80600260008282546110ba9190611772565b90915550506001600160a01b038216600090815260208190526040812080548392906110e7908490611772565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b0382166111ad5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f73000000000000000000000000000000000000000000000000000000000000006064820152608401610550565b6001600160a01b0382166000908152602081905260409020548181101561123c5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f63650000000000000000000000000000000000000000000000000000000000006064820152608401610550565b6001600160a01b038316600090815260208190526040812083830390556002805484929061126b9084906117a9565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b6106de82826040516024016112cc929190611750565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f9710a9d00000000000000000000000000000000000000000000000000000000017905261150a565b6060600061133883600261178a565b611343906002611772565b67ffffffffffffffff81111561135b5761135b61186e565b6040519080825280601f01601f191660200182016040528015611385576020820181803683370190505b5090507f3000000000000000000000000000000000000000000000000000000000000000816000815181106113bc576113bc611858565b60200101906001600160f81b031916908160001a9053507f78000000000000000000000000000000000000000000000000000000000000008160018151811061140757611407611858565b60200101906001600160f81b031916908160001a905350600061142b84600261178a565b611436906001611772565b90505b60018111156114bb577f303132333435363738396162636465660000000000000000000000000000000085600f166010811061147757611477611858565b1a60f81b82828151811061148d5761148d611858565b60200101906001600160f81b031916908160001a90535060049490941c936114b4816117f0565b9050611439565b50831561097c5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610550565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b60006020828403121561153d57600080fd5b813561097c81611884565b6000806040838503121561155b57600080fd5b823561156681611884565b9150602083013561157681611884565b809150509250929050565b60008060006060848603121561159657600080fd5b83356115a181611884565b925060208401356115b181611884565b929592945050506040919091013590565b600080604083850312156115d557600080fd5b82356115e081611884565b946020939093013593505050565b60006020828403121561160057600080fd5b8151801515811461097c57600080fd5b60006020828403121561162257600080fd5b5035919050565b6000806040838503121561163c57600080fd5b82359150602083013561157681611884565b60006020828403121561166057600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461097c57600080fd5b600081518084526116a88160208601602086016117c0565b601f01601f19169290920160200192915050565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516116f48160178501602088016117c0565b7f206973206d697373696e6720726f6c652000000000000000000000000000000060179184019182015283516117318160288401602088016117c0565b01602801949350505050565b60208152600061097c6020830184611690565b6040815260006117636040830185611690565b90508260208301529392505050565b6000821982111561178557611785611842565b500190565b60008160001904831182151516156117a4576117a4611842565b500290565b6000828210156117bb576117bb611842565b500390565b60005b838110156117db5781810151838201526020016117c3565b838111156117ea576000848401525b50505050565b6000816117ff576117ff611842565b506000190190565b600181811c9082168061181b57607f821691505b6020821081141561183c57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461062857600080fdfea2646970667358221220a3ba9af33e6c86bc4bd81c1990d9d7e8049e93c995aaf66ac3fc13758c25ee9c64736f6c63430008070033";

type AUSDConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AUSDConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AUSD__factory extends ContractFactory {
  constructor(...args: AUSDConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AUSD> {
    return super.deploy(overrides || {}) as Promise<AUSD>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AUSD {
    return super.attach(address) as AUSD;
  }
  connect(signer: Signer): AUSD__factory {
    return super.connect(signer) as AUSD__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AUSDInterface {
    return new utils.Interface(_abi) as AUSDInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): AUSD {
    return new Contract(address, _abi, signerOrProvider) as AUSD;
  }
}
