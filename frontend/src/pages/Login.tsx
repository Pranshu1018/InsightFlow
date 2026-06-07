import React, { useState } from "react";
import "../Styles/login.css";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";

import moneyImg from "../assets/money.png";
import handshakeImg from "../assets/handshake.png";
import { FiEye } from "react-icons/fi";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    console.log("Login:", email, password);

    // DEMO ROLE LOGIN ROUTES
    if (
      email === "admin@insightflow.com" &&
      password === "admin123"
    ) {
      navigate("/admin");
    } 
    else if (
      email === "analyst@insightflow.com" &&
      password === "analyst123"
    ) {
      navigate("/analyst");
    } 
    else if (
      email === "investigator@insightflow.com" &&
      password === "invest123"
    ) {
      navigate("/investigator");
    } 
    else if (
      email === "compliance@insightflow.com" &&
      password === "compliance123"
    ) {
      navigate("/compliance");
    } 
    else {
      alert("Invalid demo credentials");
    }
  };

  return (
    <div className="login-root">

      {/* BACKGROUND IMAGES */}
      <img src={handshakeImg} alt="" className="login-img-handshake" />
      <img src={moneyImg} alt="" className="login-img-money" />

      {/* OVERLAYS */}
      <div className="login-overlay-base" />
      <div className="login-glow-tr" />
      <div className="login-glow-bl" />
      <div className="login-overlay-warm" />
      <div className="login-diagonal-light" />
      <div className="login-vignette" />

      {/* MAIN LAYOUT */}
      <div className="login-layout">

        {/* LEFT SIDE */}
       <div className="login-left">

  <div className="login-left-inner">

    <div className="login-logo">

      <span className="login-logo-insight">
        Insight
      </span>

      <span className="login-logo-flow">
        Flow
      </span>

    </div>

    <div className="login-left-card">

      <span className="login-tagline">
        you can easily get
      </span>

      <h2 className="login-main-heading">
        Instant risk scores, plain-English explanations,
        and an interactive graph—all in one dashboard.
      </h2>

    </div>

  </div>

</div>

        {/* RIGHT SIDE */}
        <div className="login-right">
          <div className="login-form-wrapper">

            <h1 className="login-main-heading2">Login</h1>

            <form className="login-form">

              {/* EMAIL */}
              <div className="login-input-group">
                <label>Email</label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* PASSWORD */}
              {/* PASSWORD */}
<div className="login-input-group">

  <label>Password</label>

  <div className="login-password-wrapper">

    <input
      type={showPassword ? "text" : "password"}
      placeholder="Enter your password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="login-password-input"
    />

    <button
      type="button"
      className="login-eye"
      onClick={() => setShowPassword(!showPassword)}
    >
      <FiEye />
    </button>

  </div>

</div>
              

              {/* BUTTON */}
              <button
                  className="login-submit-btn"
                  onClick={(e) => {
                        handleLogin(e);
                        navigate("/dashboard");
        }}
          >
              Login
              </button>

              {/* DIVIDER */}
              <div className="login-divider">
                <div className="login-divider-line" />

                <span className="login-divider-text">
                  or continue with
                </span>

                <div className="login-divider-line" />
              </div>

              {/* SOCIAL BUTTONS */}
              <div className="login-socials">

                <button type="button">
                  <FcGoogle size={18} />
                  Google
                </button>

                <button type="button">
                  <FaFacebook size={18} />
                  Facebook
                </button>

                <button type="button">
                  <FaGithub size={18} />
                  Github
                </button>

              </div>              

              {/* SIGNUP LINK */}
              <p className="login-bottom-text">
                Don’t have an account?

                <span onClick={() => navigate("/signup")}>
                  {" "}Sign up
                </span>
              </p>

            </form>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;