import React, { useContext, useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useAuthUser } from "../Hooks/useAuthUser";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

const Login = () => {
  let { user, dispatch } = useContext(LoginContext);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [name, setName] = useState("");
  let { userLogin } = useAuthUser();
  let navigate = useNavigate();

  let handleSubmit = function (e) {
    e.preventDefault();
    let loginState = true;

    if (email === "") {
      console.log("please provide email or password");

      loginState = false;
    } else {
      userLogin(email);
      console.log("j1");
    }
    if (loginState) {
    }
    navigate("/home");
  };

  return (
    <React.Fragment>
      <div className="main-div">
        <div className="input-div">
          <form className="form" onSubmit={handleSubmit}>
            <h1 id="login">Login</h1>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
            <input
              id="name"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            <input
              id="name"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>

            <input id="submit" type="submit" value="Login"></input>

            <p id="or">OR</p>
            <Link to="/forgot-password" id="forgot">
              Forgot password?
            </Link>
            <div className="remember-div">
              <input id="Remember" type="checkbox"></input>
              <label htmlFor="Remember"> Remember me</label>
            </div>
          </form>
        </div>
        <Link to="/home">homer</Link>
      </div>
    </React.Fragment>
  );
};

export default Login;
