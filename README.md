# SampleContract

1 network 設定

```code
networks: {
    development: {
      host: "10.0.0.123",
      port: 8540,
      network_id: "*", // Match any network id
      from: "0x00Bd138aBD70e2F00903268F3Db08f2D25677C9e"
    }
  }
```

2 deploy script: migrations/1_initial_migration.js

```code
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

```

3 deploy 指令：

```code
ACCOUNT_PASSWORD=node truffle --network development migrate --reset
```

4 Special Note:

    4.1 目前web3.personal.unlockAccount這個功能在Parity無法使用(安全性)

    4.2 目前web3.js在1.0.0-beta版本無web3.personal.unlockAccount這個功能
    只有0.20.0版本才有