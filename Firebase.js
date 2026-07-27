import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";


const firebaseConfig = {
  apiKey: "AIzaSyD4LPNv50zWVq9qwcqMkQqn_srxY5FEh5E",
  authDomain: "roblox-creator-hub.firebaseapp.com",
  projectId: "roblox-creator-hub",
  storageBucket: "roblox-creator-hub.firebasestorage.app",
  messagingSenderId: "644590740742",
  appId: "1:644590740742:web:917be30cc460b035b42a87"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage(app);


export {
    auth,
    db,
    storage
};
