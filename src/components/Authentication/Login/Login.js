import React from "react";

import "./Login.css";

// redux
import { useDispatch } from "react-redux";
import { toggleLogin } from "../../../features/app/appSlice";

function Login() {
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleLogin());
  };
  return (
    <div className="login">
      <div className="login__overlay" onClick={toggle} />
      <div className="login__box"></div>
    </div>
  );
}

export default Login;
