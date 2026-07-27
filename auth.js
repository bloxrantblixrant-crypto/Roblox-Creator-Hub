import { auth, db } from "./firebase.js";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
    doc,
    setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// REGISTER SYSTEM

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

            const account =
            await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );


            await setDoc(
                doc(db,"users",account.user.uid),
                {

                    username: username,

                    email: email,

                    bio:"New Roblox Creator",

                    avatar:"assets/images/default.png",

                    created:Date.now()

                }
            );


            alert("Account created!");

            window.location.href="profile.html";


        }
        catch(error){

            document.getElementById("error").innerHTML =
            error.message;

        }

    };

}



// LOGIN SYSTEM

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


            window.location.href="profile.html";


        }
        catch(error){

            document.getElementById("error").innerHTML =
            "Wrong email or password";

        }


    };

}




// CHECK LOGIN

onAuthStateChanged(auth,(user)=>{


    if(user){

        console.log(
            "Logged in:",
            user.email
        );

    }


});