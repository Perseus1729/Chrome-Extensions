const Web3=require('web3')
const provider= new Web3.providers.HttpProvider('http://localhost:7545');
const web3= new Web3(provider);
//const address='0x0AF1A627A10c79352e2C9E1d96089e19D0d494F5';
//const balance = web3.eth.getBalance(address);
//console.log(balance);
var Accounts = require('web3-eth-accounts');

// Passing in the eth or web3 package is necessary to allow retrieving chainId, gasPrice and nonce automatically
// for accounts.signTransaction().
var accounts = new Accounts(provider);
var account_detail=web3.eth.accounts.create();
var Privatekey_detail=account_detail.privateKey;
console.log(Privatekey_detail);
var data='Hi How are you';
var signature_detail=web3.eth.accounts.sign(data,Privatekey_detail);
console.log(signature_detail);
var recovered_adress=web3.eth.accounts.recover(data,signature_detail.signature);
console.log("Recovered Address"recovered_adress," Original Adress",account_detail.address);
data=selectedText.text;
  signature_detail=web3.eth.accounts.sign(data,Privatekey_detail);
  console.log(signature_detail);
  recovered_adress=web3.eth.accounts.recover(data,signature_detail.signature);
  console.log("Recovered Address",recovered_adress," Original Adress",account_detail.address);
let bgpage = chrome.extension.getBackgroundPage();
let word = bgpage.word.trim();
console.log(word);
var web3 = window.web3;
const provider= new Web3.providers.HttpProvider('http://localhost:7545');
define(function (require){
  const Web3=require('web3');
//  var Accounts= require('web3-eth-accounts');
//  var accounts = new Accounts(provider);
})
if (typeof web3 !== 'undefined') {
            web3 = new Web3(web3.currentProvider);
        } else {
            // set the provider you want from Web3.providers
            web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
  }
//web3= new Web3(provider);
//const web=new Web3(window.ethereum.currentProvider || "http://localhost:8545")

//console.log(web3);
//web3.eth.getAccounts(console.log);
//
//var Accounts = require('web3-eth-accounts');
//define(function (require) {
    
    // Passing in the eth or web3 package is necessary to allow retrieving chainId, gasPrice and nonce automatically
// for accounts.signTransaction().
//});
console.log(web3);
var account_detail=web3.eth.accounts.create();
var Privatekey_detail=account_detail.privateKey;
console.log(Privatekey_detail);
var data='Hi How are you';
var signature_detail=web3.eth.accounts.sign(data,Privatekey_detail);
console.log(signature_detail);
var recovered_adress=web3.eth.accounts.recover(data,signature_detail.signature);
console.log("Recovered Address",recovered_adress," Original Adress",account_detail.address);


//requirejs(['web3-eth-accounts'],function(Accounts){})

  //createP(word);
