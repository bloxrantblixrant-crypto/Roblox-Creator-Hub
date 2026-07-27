import { auth, db } from "./firebase.js";


import {

createUserWithEmailAndPassword,

signInWithEmailAndPassword

} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


import {

doc,

setDoc

} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



console.log("AUTH LOADED");




// REGISTER

const registerBtn = document.getElementById("registerBtn");


if(registerBtn){

registerBtn.onclick = async()=>{


const username =
document.getElementById("username").value;


const email =
document.getElementById("email").value;


const password =
document.getElementById("password").value;



try{


const user = await createUserWithEmailAndPassword(

auth,

email,

password

);



await setDoc(

doc(db,"users",user.user.uid),

{

username: username,

email: email,

bio:"New Roblox Creator",

avatar:"assets/images/default.png"

}

);



alert("Account created!");

location.href="profile.html";


}

catch(error){

alert(error.message);

}


};


}






// LOGIN


const loginBtn =
document.getElementById("loginBtn");


if(loginBtn){


loginBtn.onclick = async()=>{


const email =
document.getElementById("email").value;


const password =
document.getElementById("password").value;



try{


await signInWithEmailAndPassword(

auth,

email,

password

);



alert("Logged in!");

location.href="profile.html";


}


catch(error){

alert(error.message);

}


};


}
