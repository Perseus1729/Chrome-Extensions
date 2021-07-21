console.log('background running');

window.word = 'Hashing Text';
console.log(word);
chrome.runtime.onMessage.addListener(receiver);
function receiver(request, sender, sendResponse) {
  console.log(request.text);
  word = request.text;
  
}
