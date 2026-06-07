import { useNavigate } from "react-router-dom"
import "../Styles/home.css"

import moneyImg from "../assets/money.png"
import handshakeImg from "../assets/handshake.png"

const HomePage = () => {
  const navigate = useNavigate()

  return (
    <div className="hero-root">

      {/* Handshake */}
      <img
        src={handshakeImg}
        alt=""
        className="hero-img-handshake"
      />

      {/* Money */}
      <img
        src={moneyImg}
        alt=""
        className="hero-img-money"
      />

      {/* Overlays */}
      <div className="hero-overlay-base" />

      <div className="hero-glow-tr" />
      <div className="hero-glow-bl" />

      <div className="hero-overlay-warm" />

      <div className="hero-diagonal-light" />

      <div className="hero-vignette" />

      {/* Content */}
      <div className="hero-content">

        <h1 className="hero-title">

          <span className="hero-title-insight">
            Insight
          </span>

          <span className="hero-title-flow">
            Flow
          </span>

        </h1>

        <p className="hero-subtitle">
          AI watches money in real time. Humans get the story.
        </p>

        <button
          className="hero-btn"
          onClick={() => navigate("/login")}
        >
          Get Started
        </button>

      </div>

    </div>
  )
}

export default HomePage