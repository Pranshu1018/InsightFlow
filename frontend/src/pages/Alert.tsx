import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../Styles/alert.css";

import moneyImg from "../assets/money.png";

import { FiUser } from "react-icons/fi";
import { FiFilter } from "react-icons/fi";

const Alert = () => {

  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);

  const [search, setSearch] = useState("");

  const [showFilters, setShowFilters] = useState(false);

  const [riskFilter, setRiskFilter] = useState("ALL");

  const alerts = [
    {
      title: "CRITICAL — TXN-8821 blocked",
      risk: "CRITICAL",
      desc: "12:42 UTC · You blocked this transaction · $48,200 SWIFT",
      score: "92",
      dot: "critical"
    },
    {
      title: "HIGH — TXN-8819 needs review",
      risk: "HIGH",
      desc: "12:41 UTC · Assigned to Priya M.",
      score: "67",
      dot: "high"
    }
  ];

  const filteredAlerts = alerts.filter((alert) => {

    const matchesSearch =
      alert.title.toLowerCase().includes(search.toLowerCase());

    const matchesRisk =
      riskFilter === "ALL" ||
      alert.risk === riskFilter;

    return matchesSearch && matchesRisk;

  });

  return (

    <div className="alert-root">

      <img
        src={moneyImg}
        alt=""
        className="alert-money"
      />

      <div className="alert-overlay-base" />
      <div className="alert-glow-tr" />
      <div className="alert-glow-bl" />
      <div className="alert-overlay-warm" />
      <div className="alert-diagonal-light" />
      <div className="alert-vignette" />

      {/* SIDEBAR */}
      <aside className="alert-sidebar">

        <div className="alert-logo">
          <span>Insight</span>
          <span>Flow</span>
        </div>

        <nav className="alert-nav">

          <button onClick={() => navigate("/dashboard")}>
            Dashboard
          </button>

          <button
            className="active-nav"
            onClick={() => navigate("/alert")}
          >
            Alerts
          </button>

          <button onClick={() => navigate("/investpanel")}>
            Investigation Panel
          </button>

        </nav>

      </aside>

      {/* MAIN */}
      <main className="alert-main">

        {/* TOPBAR */}
        <header className="alert-topbar">

          <input
            type="text"
            placeholder="search account, transaction, alerts"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="alert-top-actions">

            <FiUser className="top-icon profile-icon" />

            <button className="user-chip">
              Sana
            </button>

          </div>

        </header>

        {/* HEADER */}
        <section className="alert-header">

          <div>

            <h1>
              Risk Alert <span>Centre</span>
            </h1>

            <p>
              Multi-channel alert delivery
            </p>

          </div>

          <button
            className="alert-filter-btn"
            onClick={() => setShowFilters(!showFilters)}
          >

            <FiFilter />

            FILTERS

          </button>

          {showFilters && (

            <div className="filter-dropdown">

              <button onClick={() => setRiskFilter("ALL")}>
                All
              </button>

              <button onClick={() => setRiskFilter("HIGH")}>
                High
              </button>

              <button onClick={() => setRiskFilter("CRITICAL")}>
                Critical
              </button>

            </div>

          )}

        </section>

        {/* ALERTS */}
        <section className="alert-list">

          {filteredAlerts.map((alert) => (

            <div className="alert-card" key={alert.title}>

              <div className="alert-left">

                <span className={`alert-dot ${alert.dot}`}></span>

                <div>

                  <h2>{alert.title}</h2>

                  <p>{alert.desc}</p>

                </div>

              </div>

              <div className="alert-right">

                <button className="alert-score-btn">
                  {alert.score}
                </button>

                <button
                  className="review-btn"
                  onClick={() => setOpenModal(true)}
                >
                  Review
                </button>

              </div>

            </div>

          ))}

        </section>

        {/* MODAL */}
        {openModal && (

          <div className="review-modal-overlay">

            <div className="review-modal">

              <h2>
                Transaction Review
              </h2>

              <p>
                TXN-8821 triggered a critical AML alert
                due to unusual SWIFT transfer activity.
              </p>

              <div className="modal-details">

                <p>
                  <strong>Amount:</strong> $48,200
                </p>

                <p>
                  <strong>Country:</strong> UAE
                </p>

                <p>
                  <strong>Risk:</strong> Critical
                </p>

                <p>
                  <strong>Status:</strong> Blocked
                </p>

              </div>

              <div className="modal-actions">

                <button
                  className="close-btn"
                  onClick={() => setOpenModal(false)}
                >
                  Close
                </button>

                <button
                  className="approve-btn"
                  onClick={() => navigate("/investpanel")}
                >
                  Escalate
                </button>

              </div>

            </div>

          </div>

        )}

      </main>

    </div>
  );
};

export default Alert;