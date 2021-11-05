const Auction = artifacts.require("PublicAuction");

module.exports = function (deployer) {
  deployer.deploy(Auction);
};
