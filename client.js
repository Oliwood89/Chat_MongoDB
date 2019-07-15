<<<<<<< HEAD
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
    var provider = new firebase.auth.GithubAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;

    console.log(user);
    }).catch(function(error) {
    var errorMessage = error.message;
    console.log(errorMessage);

    });

}   
=======
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
    var provider = new firebase.auth.GithubAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;

    console.log(user);
    }).catch(function(error) {
    var errorMessage = error.message;
    console.log(errorMessage);

    });

}   
>>>>>>> 6ec475387f3feb4effd1ac366e47c0ca7a73e10d
$('#log').on ('click', login);