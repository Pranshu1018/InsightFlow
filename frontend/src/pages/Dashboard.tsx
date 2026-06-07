import "../Styles/dashboard.css";
import moneyImg from "../assets/money.png";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { FiBell } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiAlertCircle } from "react-icons/fi";
import { FiShuffle } from "react-icons/fi";

import { IoPaperPlaneSharp } from "react-icons/io5";

const Dashboard = () => {

  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const transactions = [
    {
      id: "TXN-8821",
      flow: "UAE → UK",
      amount: "$48,200",
      channel: "SWIFT",
      risk: "HIGH"
    },
    {
      id: "TXN-8819",
      flow: "IND → SG",
      amount: "$12,800",
      channel: "WIRE",
      risk: "MEDIUM"
    },
    {
      id: "TXN-8812",
      flow: "USA → UAE",
      amount: "$89,000",
      channel: "SEPA",
      risk: "HIGH"
    }
  ];

  const filteredTransactions = transactions.filter((txn) =>
    txn.id.toLowerCase().includes(search.toLowerCase()) ||
    txn.flow.toLowerCase().includes(search.toLowerCase()) ||
    txn.channel.toLowerCase().includes(search.toLowerCase())
  );

  return (

<div className="dashboard-root">

 <img
  src={moneyImg}
  alt=""
  className="dashboard-money"
/>

<div className="dashboard-overlay-base" />

<div className="dashboard-glow-tr" />

<div className="dashboard-glow-bl" />

<div className="dashboard-overlay-warm" />

<div className="dashboard-diagonal-light" />

<div className="dashboard-vignette" />

  {/* Sidebar */}
  <aside className="dashboard-sidebar">

    <div className="dashboard-logo">
      <span>Insight</span>
      <span>Flow</span>
    </div>

    <nav className="dashboard-nav">

      <button className="active-nav">
        Dashboard
      </button>

      <button onClick={() => navigate("/alert")}>
        Alerts
      </button>

      <button onClick={() => navigate("/Investpanel")}>
        Investigation Panel
      </button>

    </nav>

  </aside>

  {/* Main */}
  <main className="dashboard-main">

    {/* Top Bar */}
    <header className="dashboard-topbar">

      <input
        type="text"
        placeholder="search account, transaction, alerts"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="dashboard-top-actions">

        <FiBell
          className="top-icon"
          onClick={() => navigate("/alert")}
        />

        <FiUser className="top-icon profile-icon" />

        <button className="user-chip">
          Sana
        </button>

      </div>

    </header>

    {/* Header */}
    <section className="dashboard-header">

      <h1>
        Analyst Dashboard
      </h1>

      <p>
        Real-time AML monitoring & alert review
      </p>

      <button onClick={() => navigate("/")}>
        Live monitoring active
      </button>

    </section>

    {/* KPI Cards */}
    <section className="dashboard-stats">

      <div className="stat-card">

        <div className="card-icon">
          <FiBell />
        </div>

        <h3>Total alerts today</h3>

        <h2>1475</h2>

        <p className="card-change">
          +12.4% vs yesterday
        </p>

      </div>

      <div className="stat-card">

        <div className="card-icon">
          <FiAlertCircle />
        </div>

        <h3>High risk alerts</h3>

        <h2>247</h2>

        <p className="card-change">
          +8.1% vs yesterday
        </p>

      </div>

      <div className="stat-card">

        <div className="card-icon">
          <FiShuffle />
        </div>

        <h3>Transactions monitored</h3>

        <h2>2.4M</h2>

        <p className="card-change">
          +3.1% vs yesterday
        </p>

      </div>

      <div className="stat-card">

        <div className="card-icon">
          <IoPaperPlaneSharp />
        </div>

        <h3>Escalated cases</h3>

        <h2>58</h2>

        <p className="card-change">
          +5.6% vs yesterday
        </p>

      </div>

    </section>

    {/* Bottom */}
    <section className="dashboard-bottom">

      {/* TABLE */}
      <div className="table-wrapper">

        <div className="table-header">

          <h3 className="table-title">
            Live transaction feed
          </h3>

          <div className="table-status">

            <span className="live-dot"></span>

            <span>
              Updating live
            </span>

          </div>

        </div>

        <div className="dashboard-table">

          <div className="feed-header-row">

            <span>TXN ID</span>
            <span>FLOW</span>
            <span>AMOUNT</span>
            <span>CHANNEL</span>
            <span>RISK</span>

          </div>

          <div className="feed-body">

            {filteredTransactions.map((txn) => (

              <div className="feed-row" key={txn.id}>

                <span>{txn.id}</span>
                <span>{txn.flow}</span>
                <span>{txn.amount}</span>
                <span>{txn.channel}</span>

                <span
                  className={
                    txn.risk === "HIGH"
                    ? "risk-red"
                    : "risk-orange"
                  }
                >
                  {txn.risk}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* CHART */}
      <div className="chart-wrapper">

        <h3 className="risk-title">
          Risk distribution
        </h3>

        <div className="dashboard-chart">

          <div className="risk-container">

            <div className="risk-pie">

              <div className="risk-center"></div>

            </div>

            <div className="risk-details">

              <p>
                <span className="risk-low"></span>
                Low risk — 58%
              </p>

              <p>
                <span className="risk-medium"></span>
                Medium risk — 27%
              </p>

              <p>
                <span className="risk-high"></span>
                High risk — 15%
              </p>

              <div className="risk-note">
                AI insight: Structuring pattern
                detected in EU corridor — 3× baseline
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  </main>

</div>

  );
};

export default Dashboard;