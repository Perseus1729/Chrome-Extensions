// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

window.addEventListener('mouseup', wordSelected);
//const Web3=require('web3');

function wordSelected() {
  let selectedText = window
    .getSelection()
    .toString()
    .trim();
  console.log(selectedText);
  
  if (selectedText.length > 0) {
    let message = {
      text: selectedText
    };
    if(typeof chrome.app.isInstalled!=='undefined'){
    chrome.runtime.sendMessage(message);
    } 
  }
}