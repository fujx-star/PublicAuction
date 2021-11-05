const abi = [
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "temp_NFT",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "on_sale",
        "type": "bool"
      },
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      }
    ],
    "name": "CreateNFT",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "CreatedNFT",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "bool",
            "name": "on_sale",
            "type": "bool"
          },
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address[]",
            "name": "ownership_info",
            "type": "address[]"
          }
        ],
        "internalType": "struct PublicAuction.NFT[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "GetMyNFT",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "bool",
            "name": "on_sale",
            "type": "bool"
          },
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address[]",
            "name": "ownership_info",
            "type": "address[]"
          }
        ],
        "internalType": "struct PublicAuction.NFT[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "nft_id",
        "type": "uint256"
      }
    ],
    "name": "GetOwnershipInfo",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "nft_id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "start_price",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "end_time",
        "type": "uint256"
      }
    ],
    "name": "NewAution",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "GetAllAuctions",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "bool",
                "name": "on_sale",
                "type": "bool"
              },
              {
                "internalType": "address",
                "name": "owner",
                "type": "address"
              },
              {
                "internalType": "address[]",
                "name": "ownership_info",
                "type": "address[]"
              }
            ],
            "internalType": "struct PublicAuction.NFT",
            "name": "nft",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "start_price",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "end_time",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "seller",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "highest_bid",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "highest_bidder",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "ended",
            "type": "bool"
          }
        ],
        "internalType": "struct PublicAuction.Auction[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "auction_id",
        "type": "uint256"
      }
    ],
    "name": "Bid",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "Withdraw",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "Refresh",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "Claim",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  }
];
// 合约地址
const address = "0xBe364d00a1230B4DA6cAb0a527FfA89a02FeE45B";
var option  = {
    from: '0x244dFe15Fed6592131eE870c65E485d5f3d94A05', // default from address
    gasPrice: '20000000000'
}
module.exports = {
    abi,
    address,
    option,
}