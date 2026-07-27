import { auth, db } from "./firebase.js";


import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
GoogleAuthProvider,
signInWithPopup
} 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


import {
doc,
setDoc
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";




// REGISTER

const registerBtn = document.getElementById("registerBtn");


if(registerBtn){

registerBtn.onclick = async()=>{


let username =
document.getElementById("username").value;


let email =
document.getElementById("email").value;


let password =
document.getElementById("password").value;



try{


const userCredential =
await createUserWithEmailAndPassword(
auth,
email,
password
);



await setDoc(

doc(
db,
"users",
userCredential.user.uid
),

{

username: username,

email: email,

bio: "New Roblox Creator",

avatar: "assets/images/default.png"

}

);



alert("Account created!");

window.location.href="profile.html";


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


let email =
document.getElementById("email").value;


let password =
document.getElementById("password").value;



try{


await signInWithEmailAndPassword(

auth,

email,

password

);



window.location.href="profile.html";


}


catch(error){

alert(error.message);

}


};


}





// GOOGLE LOGIN


const googleBtn =
document.getElementById("googleBtn");


if(googleBtn){


googleBtn.onclick = async()=>{


const provider =
new GoogleAuthProvider();



try{


const result =
await signInWithPopup(
auth,
provider
);



await setDoc(

doc(
db,
"users",
result.user.uid
),

{

username:
result.user.displayName || "Roblox Creator",

email:
result.user.email,

avatar:
result.user.photoURL || "assets/images/default.png",

bio:
"New Roblox Creator"

},

{
merge:true
}

);



window.location.href="profile.html";


}


catch(error){

alert(error.message);

}


};


}
