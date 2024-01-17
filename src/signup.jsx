import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase-config.js";
import {NavLink} from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confMessage,setConfMessage] = useState("");
  const [errorMessage,setErrorMessage] =useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setConfMessage("Your Account Has Been Created Successfully!");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("Your Account already exist");
      });
  };

  return (
    <div className="loginform">
      <form className="login-form" onSubmit={signUp}>
        <h2>Create Account</h2>
        <div className="form-control">
        <input className="input"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        </div>
        <div className="form-control">
        <input className="input"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        </div>
        <button className="signup-btn" type="submit">Signup</button>
        <div>
            <NavLink to="/login"><p style={{color:"black"}}>Already have an account <span style={{color:"#D75742"}} >Login</span></p></NavLink>
        </div>
        <p style={{color:"#44B678"}}>{confMessage}</p><p style={{color:"red"}}>{errorMessage}</p>
      </form>
    </div>
  );
};

export default SignUp;