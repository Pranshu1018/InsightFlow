import "../Styles/signup.css"
import { FiEye } from "react-icons/fi"
import { useNavigate} from "react-router-dom";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc"

import { FaFacebookF, FaGithub } from "react-icons/fa"
import moneyImg from "../assets/money.png"
import handshakeImg from "../assets/handshake.png"

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  return (

    <div className="signup-root">

      {/* Handshake */}
      <img
        src={handshakeImg}
        alt=""
        className="signup-img-handshake"
      />

      {/* Money */}
      <img
        src={moneyImg}
        alt=""
        className="signup-img-money"
      />

      {/* Overlays */}
      <div className="signup-overlay-base" />

      <div className="signup-glow-tr" />
      <div className="signup-glow-bl" />

      <div className="signup-overlay-warm" />

      <div className="signup-diagonal-light" />

      <div className="signup-vignette" />

      {/* Main Layout */}
      <div className="signup-layout">

        {/* LEFT SIDE */}
        <div className="signup-left">

          <div className="signup-left-inner">

            {/* Logo OUTSIDE card */}
            <div className="signup-logo">

              <span className="signup-logo-insight">
                Insight
              </span>

              <span className="signup-logo-flow">
                Flow
              </span>

            </div>

            {/* Card */}
            <div className="signup-left-card">

              <div className="signup-left-top">

              </div>

              <div className="signup-left-bottom">

                <p className="signup-small-text">
                  you can easily get
                </p>

                <h2 className="signup-left-heading">
                  Instant risk scores,
                  plain-English explanations,
                  and an interactive graph—all
                  in one dashboard.
                </h2>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
<div className="signup-right">

  <div className="signup-form-wrapper">

    {/* TITLE */}
    <h1 className="signup-main-heading">
       Create new account
    </h1>

    {/* FORM */}
    <form className="signup-form">

      {/* NAME */}
      <div className="signup-input-group">

        <label htmlFor="name">
          Your name
        </label>

        <input
          id="name"
          type="text"
          placeholder="Enter your name"

        />

      </div>

      {/* SURNAME */}
      <div className="signup-input-group">

        <label htmlFor="surname">
          Your surname
        </label>

        <input
          id="surname"
          type="text"
          placeholder="Enter your surname"
        />

      </div>

      {/* EMAIL */}
      <div className="signup-input-group">

        <label htmlFor="email">
          Your email
        </label>

        <input
          id="email"
          type="email"
          placeholder="Enter your email"
        />

      </div>

      {/* PASSWORD */}
      <div className="signup-input-group">

        <label htmlFor="password">
          Your password
        </label>

        <div className="signup-password-wrapper">

          <input
            id="password"
            type={showPassword ? "text": "password"}
            placeholder="Enter your password"
          />

          <button
            type="button"
            className="signup-eye"
            onClick={() => setShowPassword(!showPassword)}
          >
            <FiEye />
          </button>

        </div>

      </div>

      {/* CONFIRM PASSWORD */}
      <div className="signup-input-group">

        <label htmlFor="confirmPassword">
          Confirm password
        </label>

        <div className="signup-password-wrapper">

          <input
            id="confirmPassword"
            type={showConfirmPassword ? "text": "password"}
            placeholder="Confirm your password"
          />

          <button
            type="button"
            className="signup-eye"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <FiEye />
          </button>

        </div>

      </div>

      {/* DIVIDER */}
      <div className="signup-divider">

        <div className="signup-line" />

        <p>
          or continue with
        </p>

        <div className="signup-line" />

      </div>

      {/* SOCIALS */}
      <div className="signup-socials">

        <button
  type="button"
  className="signup-social-btn"
>
  <FcGoogle />
  <span>Google</span>
</button>

        <button
  type="button"
  className="signup-social-btn"
>
  <FaFacebookF />
  <span>Facebook</span>
</button>

        <button
  type="button"
  className="signup-social-btn"
>
  <FaGithub />
  <span>Github</span>
</button>

      </div>

      {/* SIGNUP BUTTON */}
      <button
        type="submit"
        className="signup-submit-btn"
      >
        sign up
      </button>

      {/* LOGIN */}
      <p className="signup-bottom-login">

        Already have an account?

        <button   className="signup-login-btn"
                  type="button"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>

      </p>

    </form>

  </div>

</div>  

      </div>

    </div>

  )
}

export default Signup