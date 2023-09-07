import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import {
  VisibilityOff as VisibilityOffIcon,
  Visibility as VisibilityIcon,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
const Login = () => {
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");
  const [showpassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const client = [
    {
      username: "muthu",
      password: "muthu",
    },
  ];
  const navigate = useNavigate();
  const namehandler = (e) => {
    setUname(e.target.value);
  };
  const passhandler = (e) => {
    setPass(e.target.value);
  };
  const submit = () => {
    const isExist = client.find((cred) => cred.username === uname);
    if (!isExist) {
      toast("Username doesnt exist");
    }
    const isPwdCorrect = isExist.password === pass;
    if (isPwdCorrect) {
      localStorage.setItem("userlogin", true);
      dispatch({
        type: "login",
        payload: { isAuthenticaticon: true },
      });
      toast("Successfully loggedIn!!");
      navigate("/");
    } else {
      toast("Password  incorrect !!");
    }
  };
  return (
    <div className="Loginpage">
      <div className="Login">
        <h5>Login</h5>
        <div className="logincontent">
          <label className="name">userName</label>
          <br />
          <input
            className="log-input"
            type="text"
            name="username"
            placeholder="enter username"
            onChange={namehandler}
          ></input>
        </div>
        <div>
          <label className="name">password</label>
          <br />
          <input
            className="log-input"
            type={showpassword ? "text" : "password"}
            name="password"
            placeholder="enter password"
            onChange={passhandler}
          ></input>
          {showpassword ? (
            <VisibilityIcon onClick={() => setShowPassword(false)} />
          ) : (
            <VisibilityOffIcon onClick={() => setShowPassword(true)} />
          )}
        </div>
        <div className="login-button">
          <button onClick={submit}>login</button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
