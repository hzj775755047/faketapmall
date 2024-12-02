<template>

  <div>


    <h1>Web3 with Vue.js</h1>


    <p>Account: {{ account }}</p>


    <p>Balance: {{ balance }} ETH</p>


  </div>


</template>


<script>


export default {
  name:'web3',

  data() {


    return {


      account: '',


      balance: ''


    };


  },


  async created() {

    console.log(123)
    await this.loadAccountData();


  },


  methods: {


    async loadAccountData() {


      const accounts = await window.web3.eth.getAccounts();


      this.account = accounts[0];


      const balance = await window.web3.eth.getBalance(this.account);


      this.balance = window.web3.utils.fromWei(balance, 'ether');


    }


  }


};


</script>


<style scoped>


h1 {


  color: #42b983;


}


</style>



