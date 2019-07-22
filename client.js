(function () {
    let element = function (id) {
        return document.getElementById(id);
    }
    // Get Elements
    const status = element('status');
    const messages = element('messages');
    const textarea = element('textarea');
    let username = element('username');

    const clearBtn = element('clear');
    // Set default status
    const statusDefault = status.textContent;
    let setStatus = function (s) {
        // Set status
        status.textContent = s;
        if (s !== statusDefault) {
            let delay = setTimeout(function () {
                setStatus(statusDefault);
            }, 4000);
        }
    }
    // Connect to socket.io
    const socket = io();
    // Check for connection
    if (socket !== undefined) {
        console.log('Connected to socket...');
        // Handle Output
        socket.on('output', function (data) {
            //console.log(data);
            if (data.length) {
                for (let x = 0; x < data.length; x++) {
                    // Build out message div
                    let text = document.createElement('div');
                    let datuser = document.createElement('div');
                    let message = document.createElement('div');

                    text.setAttribute('class', 'chat-message');
                    datuser.setAttribute('class', 'chat-message');
                    message.setAttribute('class', 'chatcontainer');
                    text.innerHTML = data[x].name + " : " + data[x].message;
                    datuser.innerHTML = data[x].date;

                    message.appendChild(datuser);
                    message.appendChild(text);
                    messages.appendChild(message);

                    messages.insertBefore(message, messages.lastChild);
                    messages.scrollTo(0, messages.scrollHeight);
                }
            }
        });
        // Get Status From Server
        socket.on('status', function (data) {
            // get message status
            setStatus((typeof data === 'object') ? data.message : data);
            // If status is clear, clear text
            if (data.clear) {
                textarea.value = '';
            }
        });
        // Handle Input
        textarea.addEventListener('keydown', function (event) {
            if (event.which === 13 && event.shiftKey == false) {
                // Emit to server input
                socket.emit('input', {
                    name: username.value,
                    message: textarea.value,
                    date: new Date().getHours() + " : " + new Date().getMinutes()
                });
                event.preventDefault();
            }
        })
        // Handle Chat Clear
        clearBtn.addEventListener('click', function () {
            socket.emit('clear');
        });
        // Clear Message
        socket.on('cleared', function () {
            messages.textContent = '';
        });
    }
})();

var firebaseConfig = {
    apiKey: "AIzaSyAYwh1xpl-z3PwqufvBJt_sqwcf30O3MJk",
    authDomain: "mongochat-f3306.firebaseapp.com",
    databaseURL: "https://mongochat-f3306.firebaseio.com",
    projectId: "mongochat-f3306",
    storageBucket: "",
    messagingSenderId: "673903107835",
    appId: "1:673903107835:web:952b573ac4ee9604"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function login() {
    let provider = new firebase.auth.GithubAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function (result) {
        let token = result.credential.accessToken;
        let user = result.user;
        username.value = result.additionalUserInfo.username

        console.log(result.additionalUserInfo.username);
    }).catch(function (error) {
        let errorMessage = error.message;
        console.log(errorMessage);

    });
}
$('#log').on('click', login);