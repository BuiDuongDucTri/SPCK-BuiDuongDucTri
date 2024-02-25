import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyDC4hfjw-CB6nL2hmI9jcIitDw_uX6DvnI",
    authDomain: "nps-jsi16-hb-627f8.firebaseapp.com",
    projectId: "nps-jsi16-hb-627f8",
    storageBucket: "nps-jsi16-hb-627f8.appspot.com",
    messagingSenderId: "587203575788",
    appId: "1:587203575788:web:0acd5d411b2e51b088cac9",
    measurementId: "G-F3G9CJFFNZ"
    };

    export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);

const inputUsernameRegister = document.querySelector(".input-signup-username");
const inputPasswordRegister = document.querySelector(".input-signup-password");
const btnRegister = document.querySelector(".signup__signInButton");