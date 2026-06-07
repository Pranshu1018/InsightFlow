import "../Styles/sarbuilder.css"

import moneyImg from "../assets/money.png"

const SarBuilder = () => {
  return (
    <div className="sar-root">

            

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

      {/* Header */}

      <header className="sar-header">

        <div className="sar-logo">
          InsightFlow
        </div>

       <div className="sar-header-center">

  <h1 className="sar-title">
    SAR Builder
  </h1>

  <p className="sar-subtitle">
    Suspicious Activity Report — auto-populated from TXN-8821
  </p>

</div>

      </header>

      <section className="sar-top-grid">

  {/* Subject Information */}

  <div className="subject-card">

    <h2>
      Subject Information
    </h2>

    <div className="subject-row">

      <span>Account Number</span>

      <div className="subject-value">
        ****472
      </div>

    </div>

    <div className="subject-row">

      <span>Jurisdiction</span>

      <div className="subject-value">
        New York, United States
      </div>

    </div>

    <div className="subject-row">

      <span>Activity Type</span>

      <div className="subject-value">
        Structuring / Smurfing
      </div>

    </div>

  </div>

  {/* AI Narrative */}

  <div className="narrative-card">

    <h2>
      AI Narrative (Editable)
    </h2>

   <textarea
  aria-label="AI Narrative"
  placeholder="Enter SAR narrative..."
  defaultValue="The subject account ****4421 exhibited structured transfer behavior over a 72-hour window..."
/>

  </div>

</section>

    <section className="pdf-card">

  <h2 className="pdf-title">
    PDF Preview
  </h2>

  <div className="pdf-preview-box">

    <div className="pdf-left">

      <h3>
        FinCEN SAR Form 111
      </h3>

      <p>
        Part I — Reporting Financial Institution
      </p>

      <p>
        Part II — Suspect Information
      </p>

      <p>
        Part III — Suspicious Activity Info
      </p>

    </div>

    <div className="pdf-summary">

      <p>
        Amount: $48,200.00
      </p>

      <p>
        Date Range: 2024-01-12 to 2024-01-15
      </p>

      <p>
        Activity: Structuring
      </p>

    </div>

  </div>

</section>

<div className="sar-actions">

  <button className="pdf-btn">

    <span className="btn-tag">
      PDF
    </span>

    Download PDF

  </button>

  <button className="json-btn">

    <span className="btn-tag">
      JSON
    </span>

    Export JSON

  </button>

</div>
</div>

    
  )
}

export default SarBuilder;