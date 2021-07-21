const button = document.querySelector('button');
button.addEventListener('click', () => {
    chrome.runtime.sendMessage({ message: 'logout' },
        function (response) {
            if (response === 'success')
               window.location.replace('./popup-sign-in.html');
        }
    );
}); 