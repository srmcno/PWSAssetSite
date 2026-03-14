import React from "react";

export default function AppFooter({
  copyrightYear,
  copyrightHolder,
  appName,
  appVersion,
  appSubtitle = "Water Asset Manager"
}) {
  return (
    <footer className="app-footer py-6 mt-8 no-print">
      <div className="footer-diamond"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <div style={{ maxWidth: 900, margin: "0 auto", fontSize: "0.72rem", lineHeight: 1.5, color: "#6b7280" }}>
          <div style={{ fontWeight: 700, color: "#1E3D3B" }}>&copy; {copyrightYear} {copyrightHolder}. All rights reserved.</div>
          <div style={{ marginTop: 4 }}><span style={{ fontWeight: 700, color: "#1E3D3B" }}>{copyrightHolder}</span> <span style={{ color: "#76B900", fontWeight: 600 }}>Environmental Protection Service</span></div>
          <div style={{ color: "#1E3D3B", fontWeight: 500 }}>Office of Water Resource Management</div>
          <div style={{ marginTop: 8 }}>This software is intended solely to assist authorized personnel with water system asset management, capital planning, maintenance tracking, and related internal governmental or utility purposes.</div>
          <div style={{ marginTop: 4 }}>No license or transfer of rights is granted by possession, download, or use of this file. The Choctaw Nation name, seal, logos, slogans, emblems, trademarks, service marks, and other identifying indicia remain property of the Choctaw Nation of Oklahoma and may not be copied, redistributed, republished, sold, relicensed, or used for commercial or public branding purposes without prior written authorization.</div>
          <div style={{ marginTop: 4 }}>Nothing in this software or any generated output shall be interpreted to waive, diminish, or surrender tribal sovereignty, sovereign immunity, governmental authority, jurisdiction, cultural property rights, or any other rights, protections, privileges, or remedies of the Choctaw Nation of Oklahoma.</div>
          <div style={{ marginTop: 8 }}><span style={{ color: "#1E3D3B", fontWeight: 700 }}>{appName} v{appVersion}</span> <span style={{ color: "#76B900" }}>&#9670;</span> {appSubtitle}</div>
          <div style={{ fontSize: "0.68rem", color: "#999", letterSpacing: "0.05em", marginTop: 6 }}>FAITH &#10022; FAMILY &#10022; CULTURE</div>
        </div>
      </div>
    </footer>
  );
}
