// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDjm-4ZFgA7cmJlTmwOqD-6fZccXWkocKg",
  authDomain: "learn-firebase-f5308.firebaseapp.com",
  databaseURL: "https://learn-firebase-f5308-default-rtdb.firebaseio.com",
  projectId: "learn-firebase-f5308",
  storageBucket: "learn-firebase-f5308.appspot.com",
  messagingSenderId: "683752238018",
  appId: "1:683752238018:web:6056a3fafc27e21c40845b",
  measurementId: "G-P7XTHKGHVM"
};
firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();
// Select elements
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const qrCodeContainer = document.getElementById('qr-code');

// Login form submission
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Implement Firebase login logic here
    // ...

    generateQRCode(email);
});

// Signup form submission
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Implement Firebase signup logic here
    // ...

    generateQRCode(email);
});

// Generate QR Code
function generateQRCode(email) {
    const emailParts = email.split('@');
    const username = emailParts[0];

    const qrCodeText = `Username: ${username}`;
    const qr = new QRCode(qrCodeContainer, {
        text: qrCodeText,
        width: 200,
        height: 200
    });

    // Update count function when QR code is scanned
    qrCodeContainer.addEventListener('click', () => {
        // Implement count update logic here
        // ...
    });
}
