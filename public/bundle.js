var contractABI = [];
var contractAddress = '0xc4edea59893C659C25c6cC20c4454Ebb95c1e4B2';
var web3 = new Web3('http://localhost:7545');
var simpleSmartContract = new web3.eth.Contract(contractABI, contractAddress);

console.log(simpleSmartContract);

web3.eth.getAccounts()
    .then(console.log);