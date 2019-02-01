let {
    web3,
    DHTContract,
    accounts
} = require('./ethereumSetup.js');

class DHT {

  constructor(DHTContract) {
    this.instance = DHTContract;
  }

  startOnboard(sender, bond, inputBytes, inputSig) {
    return this.instance.methods.startOnboard(inputBytes, inputSig).send({from: sender, value: bond, gas: 5000000});
  }

  finalizeOnboard(sender) {
    return this.instance.methods.finalizeOnboard().send({from: sender, gas: 5000000});
  }

  safeOffboard(sender) {
    return this.instance.methods.safeOffboard().send({from: sender, gas: 5000000});
  }

  beginOffboardVote(sender, nodeAddress) {
    return this.instance.methods.beginOffboardVote(nodeAddress).send({from: sender, gas: 5000000});
  }

  offboardVote(sender, nodeAddress, remove) {
    return this.instance.methods.offboardVote(nodeAddress, remove).send({from: sender, gas: 5000000});
  }

  finalizeOffboardVote(sender, nodeAddress) {
    return this.instance.methods.finalizeOffboardVote(nodeAddress).send({from: sender, gas: 5000000});
  }

  getNodeState(sender, nodeAddress) {
    return this.instance.methods.getNodeState(nodeAddress).call({from: sender});
  }

  getNumNodes(sender) {
    return this.instance.methods.getNumNodes().call({from: sender});
  }
}
