import React from 'react';
// import './style.css';
import Add from "./add.png.svg";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import {auth}  from "../firebase";


const Register = () => {

  // const handleSubmit = (e) =>{
  //   e.preventDefault()
  //   const displayName = e.target[0].value;
  //   const email = e.target[1].value;
  //   const password = e.target[2].value;
  //   const file = e.target[3].files[0];

    

// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;

//     console,log(user)
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
//   }
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chatroom</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="display name"/>
          <input type="email" placeholder="email"/>
          <input type="password" placeholder="password"/>
          <input style={{display:"none"}} type="file" id="file"/>
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an image</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
