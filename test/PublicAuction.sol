pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

contract PublicAuction {

    struct NFT {
        uint id;
        string name;
        bool on_sale;
        address owner;
        address[] ownership_info;
    }

    struct Auction {
        uint id;
        NFT nft;
        uint start_price;
        uint end_time;
        address seller;
        uint highest_bid;
        address highest_bidder;
        bool ended;
        // mapping(address => uint) pending_returns;
    }

    NFT[] NFTs;
    Auction[] auctions;
    mapping(address => uint) pending_returns;

    //临时变量
    address[] temp_addr;
    NFT[] public temp_NFT;
    Auction[] temp_auction;
    uint x;

    //构造函数
    constructor() public {}

    //铸造代币
    function CreateNFT(string memory name) public payable {
        // delete temp_addr;
        uint id = NFTs.length;
        temp_addr.push(msg.sender);
        NFTs.push(NFT(id, name, false, msg.sender, temp_addr));
    }

    //查看自己铸造的代币
    function CreatedNFT() public payable returns(NFT[] memory) {
        delete temp_NFT;
        for (uint i = 0;i < NFTs.length;i++) {
            if (NFTs[i].ownership_info[0] == msg.sender) {
                temp_NFT.push(NFTs[i]);
            }
        }
        return temp_NFT;
    }

    //查看自己拥有的代币
    function GetMyNFT() public returns(NFT[] memory) {
        delete temp_NFT;
        for (uint i = 0;i < NFTs.length;i++) {
            if (NFTs[i].owner == msg.sender) {
                temp_NFT.push(NFTs[i]);
            }
        }
        return temp_NFT;
    }

    //查看代币所属权流转信息
    function GetOwnershipInfo(uint nft_id) public returns (address[] memory) {
        for (uint i = 0;i < NFTs.length;i++) {
            if (NFTs[i].id == nft_id) {
                return NFTs[i].ownership_info;
            }
        }
    }

    //拍卖代币
    function NewAution(uint nft_id, uint start_price, uint end_time) public payable {
        uint id = auctions.length;
        uint i;
        for (i = 0;i < NFTs.length;i++) {
            if (NFTs[i].id == nft_id) {
                break;
            }
        }
        require(
            msg.sender == NFTs[i].owner,
            "You are not the owner of the NFT."
        );
        auctions.push(Auction(id, NFTs[i], start_price, end_time, msg.sender, 0, msg.sender, false));
        NFTs[i].on_sale = true;
    }

    //浏览拍卖信息
    function GetAllAuctions() public returns (Auction[] memory) {
        delete temp_auction;
        for (uint i = 0;i < auctions.length;i++) {
            if(auctions[i].ended == false){
                temp_auction.push(auctions[i]);
            }
        }
        return temp_auction;
    }

    //出价
    function Bid(uint auction_id) public payable {
        uint i;
        for(i = 0;i < auctions.length;i++){
            if(auction_id == auctions[i].id){
                break;
            }
        }
        require(
            auctions[i].ended == false,
            "Auction already ended."
        );
        require(
            msg.value > auctions[i].highest_bid,
            "There already is a higher bid."
        );
        if (auctions[i].highest_bid != 0) {
            pending_returns[auctions[i].highest_bidder] += auctions[i].highest_bid;
        }
        auctions[i].highest_bidder = msg.sender;
        auctions[i].highest_bid = msg.value;
    }

    //取钱
    function Withdraw() public payable returns (bool) {
        for(uint i = 0;i < auctions.length;i++){
            uint amount = pending_returns[msg.sender];
            if (amount > 0) {
                pending_returns[msg.sender] -= amount;
                if (!address(uint160(msg.sender)).send(amount)) {
                    pending_returns[msg.sender] += amount;
                    return false;
                }
            }
        }
        return true;
    }

    //刷新并结束一些拍卖
    function Refresh() public payable {
        for(uint i = 0;i < auctions.length;i++){
            if(block.timestamp > auctions[i].end_time){
                auctions[i].ended == true;
            }
        }
    }

    //认领
    function Claim() public payable {
        for (uint i = 0;i < auctions.length;i++) {
            if (auctions[i].highest_bidder == msg.sender && auctions[i].ended == true) {
                auctions[i].nft.owner == msg.sender;
                auctions[i].nft.ownership_info.push(msg.sender);
            }
        }
    }
    
}