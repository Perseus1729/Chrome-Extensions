console.log('background running');
chrome.runtime.onMessage.addListener(receiver);
window.word = 'Hashing Text';
console.log(word);
function receiver(request, sender, sendResponse) {
  console.log(request.text);
  word = request.text;
  
}