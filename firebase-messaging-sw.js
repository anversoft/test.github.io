importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-messaging.js");

firebase.initializeApp({
    apiKey: 'AIzaSyDj98AYpkfOPw4abGLEDyW4J0vb-usRUcM',
    appId: '1:315628210918:web:1bf1f0222ab6c1ab274927',
    messagingSenderId: '315628210918',
    projectId: 'homie-f53fd',
    authDomain: 'homie-f53fd.firebaseapp.com',
    storageBucket: 'homie-f53fd.appspot.com',
    measurementId: 'G-FYW1WE95BH',
});
// Necessary to receive background messages:
const messaging = firebase.messaging();