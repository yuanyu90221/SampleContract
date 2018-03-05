module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "10.0.0.123",
      port: 8540,
      network_id: "*", // Match any network id
      from: "0x00Bd138aBD70e2F00903268F3Db08f2D25677C9e"
    }
  }
};
