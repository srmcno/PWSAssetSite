import React from "react";

export default function Logo({ pwsId, sealOk = true, sealSrc, appName, appSubtitle }) {
  return (
    <div className="brand-lockup">
      <div className="brand-seal-shell">
        {sealOk ? (
          <img
            src={sealSrc}
            alt="Great Seal of the Choctaw Nation"
            width="78"
            height="78"
            className="brand-seal"
            loading="eager"
            decoding="sync"
          />
        ) : (
          <div className="brand-seal-fallback">CNO<br/>EPS</div>
        )}
      </div>

      <div className="brand-vertical-mark" aria-hidden="true">
        <div className="brand-vertical-line" />
        <div className="brand-diamond" />
        <div className="brand-vertical-line" />
      </div>

      <div className="brand-copy">
        <div className="brand-org-name" title="Choctaw Nation of Oklahoma">Choctaw Nation of Oklahoma</div>
        <div className="brand-dept-name">Environmental Protection Service</div>
        <div className="brand-divider-line" />
        <div className="brand-office-name">Office of Water Resource Management</div>
        <div className="brand-app-line">
          <span className="brand-app-name">{appName}</span>
          <span className="brand-app-diamond" aria-hidden="true" />
          <span className="brand-app-subtitle">{appSubtitle}</span>
          {pwsId ? <span className="brand-id-pill">PWS ID {pwsId}</span> : null}
        </div>
      </div>
    </div>
  );
}
