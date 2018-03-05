const Migrations = artifacts.require("./Migrations.sol");
const SampleContract = artifacts.require("./SampleContract.sol");
const Web3 = require('web3');
const url = `10.0.0.123`;
const PORT = 8540;
module.exports = function(deployer) {
  if(process.env.ACCOUNT_PASSWORD) {
    console.log(`test`);
    const web3 = new Web3(new Web3.providers.HttpProvider(`http://${url}:${PORT}`));
    console.log(web3.eth.accounts)
    console.log(process.env.ACCOUNT_PASSWORD)
    web3.personal.unlockAccount(web3.eth.accounts[1], process.env.ACCOUNT_PASSWORD);
  }
  // deployer.deploy(Migrations);
  deployer.deploy(SampleContract);
};
