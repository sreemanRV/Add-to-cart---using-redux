import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { loginUser } from '../slices/authenticationslice';
import { NavLink } from 'react-router-dom';

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error,setError] = useState("")
    const dispatch= useDispatch();
    const navigate= useNavigate();

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            console.log(userCredential);
            dispatch(loginUser());
            navigate("/home");
          })
          .catch(() => {
            setError("Email/password is incorrect");
          });
      };
      

  return (
    <div>
        <div className="loginform">
        <form className="login-form" onSubmit={signIn}>
            <h3 className="form-title">
            LOG IN
            </h3>
            <div className="form-control">
                <input className="input" type="email"  name="username" placeholder='Mail-id' onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="form-control">
                <input className="input" type="password" placeholder='Password' name="password" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button className="signup-btn" type="submit">
                Login
            </button>
            <NavLink to="/" style={{color:"black"}}><p>Create an account <span style={{color:"#D75742",textDecoration:'none'}}>Signup</span></p></NavLink>
            <div style={{color:"red"}}>
            {error}
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login;