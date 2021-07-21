
const button = document.querySelector('button');

button.addEventListener('click', () => {
    chrome.runtime.sendMessage({ message: 'logout' },
        function (response) {
            if (response === 'success')
               window.location.replace('./popup-sign-in.html');
    });
}); 
let bgpage = chrome.extension.getBackgroundPage();
let word = bgpage.word.trim();
console.log(word);
var web3 = window.web3;
define(function (require){
  const Web3=require('web3');
})
if (typeof web3 !== 'undefined') {
            web3 = new Web3(web3.currentProvider);
        } else {
            // set the provider you want from Web3.providers
            web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
  }
console.log(web3);
//const web3 = new Web3(Web3.givenProvider || "ws://localhost:8546");
//console.log(web3.currentProvider.isMetaMask)
//var account_detail=web3.eth.accounts.create();
var Privatekey_detail='e69959e5f307ee0c8bbc865240a53e9d4f090c3294cdf82075785ea18c6b15cd';
console.log(Privatekey_detail);
var data='Hi How are you';
data=word;
var signature_detail=web3.eth.accounts.sign(data,Privatekey_detail);
var signature_text=signature_detail.signature;
var account_address='0x0AF1A627A10c79352e2C9E1d96089e19D0d494F5';
//window.alert(signature_text);
document.getElementById("demo").innerHTML = signature_text;
console.log("Hello");
console.log(signature_text);
console.log('word');
console.log(signature_detail);
var recovered_adress=web3.eth.accounts.recover(data,signature_detail.signature);
console.log("Recovered Address",recovered_adress," Original Adress",account_address);


