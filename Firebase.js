// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { 
    getAuth 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { 
    getFirestore 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { 
    getStorage 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";


// Firebase configuration

const firebaseConfig = {

apiKey: "AIzaSyD4LPNv50zWVq9qwcqMkQqn_srxY5FEh5E",

authDomain: "roblox-creator-hub.firebaseapp.com",

projectId: "roblox-creator-hub",

storageBucket: "roblox-creator-hub.firebasestorage.app",

messagingSenderId: "644590740742",

appId: "1:644590740742:web:528b21c65e38bed7b42a87"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);


// Firebase services

const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage(app);


// Export for other files

export {
    auth,
    db,
    storage
};