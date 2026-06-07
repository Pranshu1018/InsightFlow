// Investpanel.tsx
import { useNavigate } from "react-router-dom";
import React, { useMemo, useState } from "react";
import "../Styles/investpanel.css";
import moneyImg from "../assets/money.png";
import { FiBell } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiFilter } from "react-icons/fi";

type RiskLevel = "CRIT" | "HIGH" | "MED";
type CaseStatus = "INVESTIGATING" | "PENDING" | "RESOLVED";

interface CaseData {
  caseId: string;
  txnId: string;
  account: string;
  amount: string;
  risk: RiskLevel;
  status: CaseStatus;
}

const caseData: CaseData[] = [
  {
    caseId: "INV-1024",
    txnId: "TXN-8821",
    account: "ACC-2201",
    amount: "$48,200",
    risk: "CRIT",
    status: "INVESTIGATING",
  },
  {
    caseId: "INV-1025",
    txnId: "TXN-7812",
    account: "ACC-1104",
    amount: "$32,700",
    risk: "HIGH",
    status: "PENDING",
  },
  {
    caseId: "INV-1026",
    txnId: "TXN-9101",
    account: "ACC-5502",
    amount: "$89,000",
    risk: "CRIT",
    status: "INVESTIGATING",
  },
  {
    caseId: "INV-1027",
    txnId: "TXN-1120",
    account: "ACC-9910",
    amount: "$12,000",
    risk: "MED",
    status: "RESOLVED",
  },
  {
    caseId: "INV-1028",
    txnId: "TXN-3330",
    account: "ACC-7401",
    amount: "$67,500",
    risk: "HIGH",
    status: "INVESTIGATING",
  },
];

const Investpanel: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [selectedCase, setSelectedCase] = useState<CaseData | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [riskFilter, setRiskFilter] = useState<string>("ALL");

  const filteredCases = useMemo(() => {
    return caseData.filter((item) => {
      const riskMatch = riskFilter === "ALL" || item.risk === riskFilter;
      const searchMatch =
        search === "" ||
        item.caseId.toLowerCase().includes(search.toLowerCase()) ||
        item.txnId.toLowerCase().includes(search.toLowerCase()) ||
        item.account.toLowerCase().includes(search.toLowerCase());
      return riskMatch && searchMatch;
    });
  }, [riskFilter, search]);

  return (
    <div className="investpanel-root">

      <img
        src={moneyImg}
        alt=""
        className="investpanel-money"
      />

      <div className="investpanel-overlay-base" />
      <div className="investpanel-glow-tr" />
      <div className="investpanel-glow-bl" />
      <div className="investpanel-overlay-warm" />
      <div className="investpanel-diagonal-light" />
      <div className="investpanel-vignette" />

      {/* SIDEBAR */}
      <div className="invest-sidebar">
        <div className="invest-logo">
         <span>Insight</span> 
         <span>Flow</span>
        </div>

        <nav className="investpanel-nav">
          <button onClick={() => navigate("/dashboard")}>
            Dashboard
          </button>

          <button onClick={() => navigate("/alert")}>
            Alerts
          </button>

          <button className="active-nav"
          onClick={() => navigate("/InvestPanel")}>
            Investigation Panel
          </button>
        </nav>
      </div>

      {/* MAIN */}
      <div className="invest-main">

        {/* TOPBAR */}
        <div className="invest-topbar">
          <input
            type="text"
            placeholder="search account, transaction, alerts"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="invest-user">
            <FiBell
              className="top-icon"
              onClick={() => navigate("/alert")}
            />

            <FiUser className="top-icon profile-icon" />

            <button className="user-chip">
              Sana
            </button>
          </div>
        </div>

        {/* HEADER */}
        <div className="invest-header">
          <div>
            <h1>Investigation Panel</h1>
            <p>Track, Analyze & Resolve High-Risk Financial Activity</p>
          </div>

          <button
            className="filter-btn"
            onClick={() => setShowFilters(!showFilters)}
          >
            <FiFilter />
            FILTERS
          </button>

          {showFilters && (
            <div className="filter-dropdown">
              <button onClick={() => { setRiskFilter("ALL"); setShowFilters(false); }}>
                All
              </button>
              <button onClick={() => { setRiskFilter("CRIT"); setShowFilters(false); }}>
                Critical
              </button>
              <button onClick={() => { setRiskFilter("HIGH"); setShowFilters(false); }}>
                High
              </button>
              <button onClick={() => { setRiskFilter("MED"); setShowFilters(false); }}>
                Med
              </button>
            </div>
          )}
        </div>

        {/* TABLE */}
        <div className="invest-table">
          <div className="table-head">
            <div>CASE ID</div>
            <div>TXN ID</div>
            <div>ACCOUNT</div>
            <div>AMOUNT</div>
            <div>RISK</div>
            <div>STATUS</div>
            <div>VIEW</div>
          </div>

          {filteredCases.map((item, index) => (
            <div className="table-row" key={index}>
              <div>{item.caseId}</div>
              <div>{item.txnId}</div>
              <div>{item.account}</div>
              <div>{item.amount}</div>
              <div>{item.risk}</div>
              <div>{item.status}</div>
              <div>
                <button
                  className="open-btn"
                  onClick={() => setSelectedCase(item)}
                >
                  OPEN
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CASE MODAL */}
      {selectedCase && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedCase(null)}
        >
          <div
            className="case-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Case Details</h2>

            <div className="case-details">
              <p>
                <span>Case ID:</span> {selectedCase.caseId}
              </p>
              <p>
                <span>Transaction ID:</span> {selectedCase.txnId}
              </p>
              <p>
                <span>Account:</span> {selectedCase.account}
              </p>
              <p>
                <span>Amount:</span> {selectedCase.amount}
              </p>
              <p>
                <span>Risk Level:</span> {selectedCase.risk}
              </p>
              <p>
                <span>Status:</span> {selectedCase.status}
              </p>
            </div>

            <button
              className="close-btn"
              onClick={() => setSelectedCase(null)}
            >
              CLOSE
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Investpanel;
