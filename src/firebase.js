import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAiVdE0iAOArumaT2BmT-Ng2HJVOrXhJhI",
    authDomain: "phimvip-9390d.firebaseapp.com",
    projectId: "phimvip-9390d",
    storageBucket: "phimvip-9390d.appspot.com",
    messagingSenderId: "611702301883",
    appId: "1:611702301883:web:b5b058fc711061c09bf59e",
    measurementId: "G-1EGLV9FLWP"
}


// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)


export {
    auth,
}


