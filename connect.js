var Web3 = require("web3");
// 获取对应的合约的abi与address与私钥与创建合约实例的option
const {abi,address,option} =  require("./abi.js");
// 创建web3对象
var web3 = new Web3();
// 连接到以太坊节点
web3.setProvider(new Web3.providers.HttpProvider("http://localhost:8545"));
var metacoin =new web3.eth.Contract(abi,address,option);
// 输出合约实例
// console.log(metacoin);

async function getAccount()
{
    let MyAccount = await web3.eth.getAccounts();
    console.log(MyAccount);
    return MyAccount;
}
async function getCharacter(){
    let mineCharacter = await metacoin.methods.CreatedNFT().call();
    console.log(mineCharacter);
    return mineCharacter;
}
getCharacter().then(value=>{
    console.log(value)
}).catch(error=>{
    console.log(error)
})

// async function getAllCharacter()
// {
//     let AllCharacter = await metacoin.methods.getAllCharacter().call();
//     return AllCharacter;
// }
// async function createNewCharacter (str1, str2,privateKey)
// {
//     var functionEncode = await metacoin.methods.createNewCharacter(str1,str2).encodeABI();
//     var sign = await web3.eth.accounts.signTransaction({
//         gas: 500000,
//         to: address,
//         data: functionEncode,
//         value :"100000000000000000",
//     }, privateKey);
//     let result = await web3.eth.sendSignedTransaction(sign.rawTransaction);
//     return result;
// }
// async function createNewAuction(_id,_sec,_startprice,privateKey)
// {
//     var functionEncode = await metacoin.methods.createNewAuction(_id,_sec,_startprice).encodeABI();
//     var sign = await web3.eth.accounts.signTransaction({
//         gas: 500000,
//         to: address,
//         data: functionEncode,
//         value :"100000000000000000",
//     }, privateKey);
//     let result = await web3.eth.sendSignedTransaction(sign.rawTransaction).then(console.log);
//     return result;
// }
// async function getAuction()
// {
//     let result = await metacoin.methods.getAuction().call();
//     return result;
// }
// async function getMyAuction(address)
// {
//     let result = await metacoin.methods.getMyAuction(address).call();
//     return result;
// }
// async function bid(_id,value,privateKey)
// {
//     var functionEncode = await metacoin.methods.bid(_id).encodeABI();
//     var sign = await web3.eth.accounts.signTransaction({
//         gas: 500000,
//         to: address,
//         data: functionEncode,
//         value :value,
//     }, privateKey);
//     var result = await web3.eth.sendSignedTransaction(sign.rawTransaction);
//     return result;
// }
// async function change_Owner(_id,privateKey)
// {
//     var functionEncode = await metacoin.methods.change_Owner(_id).encodeABI();
//     var sign = await web3.eth.accounts.signTransaction({
//         gas: 300000,
//         to: address,
//         data: functionEncode,
//     },privateKey);
//     let result = await web3.eth.sendSignedTransaction(sign.rawTransaction);
//     return result;
// }
// async function getOwner(_id)
// {
//     let result = await metacoin.methods.getOwner_history(_id).call();
//     return result;
// }
// module.exports ={
//     getAccount,
//     getCharacter,
//     getAllCharacter,
//     createNewCharacter,
//     createNewAuction,
//     getAuction,
//     bid,
//     change_Owner,
//     getOwner,
//     getMyAuction,
// }