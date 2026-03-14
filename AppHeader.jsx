import React from "react";
import Icon from "./Icon";
import Logo from "./Logo";
import AppNav from "./AppNav";

export default function AppHeader({
  settings,
  sealOk,
  sealSrc,
  appName,
  appSubtitle,
  isScenarioMode,
  onToggleScenarioMode,
  onOpenImport,
  onOpenWork,
  onExport,
  onPrint,
  onOpenSettings,
  onStartTutorial,
  onOpenHelp,
  view,
  onChangeView
}) {
  return (
    <header className={`header-custom sticky top-0 z-40 no-print ${isScenarioMode ? "scenario-hdr" : ""}`}>
      <div className="hdr-diamonds" aria-hidden="true">
        <div className="hdr-diamond outline-lime" style={{ width: 100, height: 100, right: 180, top: -18, opacity: 0.5 }} />
        <div className="hdr-diamond solid-gold" style={{ width: 80, height: 80, right: 120, top: -4, opacity: 0.7 }} />
        <div className="hdr-diamond solid-lime-deep" style={{ width: 64, height: 64, right: 72, top: 28, opacity: 0.65 }} />
        <div className="hdr-diamond solid-gold-deep" style={{ width: 14, height: 14, right: 56, top: 14, opacity: 0.6 }} />
      </div>

      <div className="w-full max-w-[100rem] mx-auto px-4 sm:px-6 app-header-inner">
        <div className="header-top-row">
          <Logo
            pwsId={settings.pwsId}
            sealOk={sealOk}
            sealSrc={sealSrc}
            appName={appName}
            appSubtitle={appSubtitle}
          />

          <div className="header-actions">
            <button
              onClick={onToggleScenarioMode}
              className="hdr-btn"
              style={isScenarioMode ? { background: "#d97706", borderColor: "#f59e0b", color: "white" } : {}}
              title={isScenarioMode ? "Leave safe scenario mode" : "Open safe sample scenarios and what-if planning"}
            >
              <Icon name="flask" size={14} /> {isScenarioMode ? "Leave Scenario" : "Scenarios"}
            </button>
            <button onClick={onOpenImport} className="hdr-btn" title="Import / Restore / Backup"><Icon name="database" size={14} /> Import / Backup</button>
            <button onClick={onOpenWork} className="hdr-btn" title="Open work orders"><Icon name="wrench" size={14} /> Work</button>
            <button onClick={onExport} className="hdr-btn" title="Export to Excel"><Icon name="download" size={14} /> Export</button>
            <button onClick={onPrint} className="hdr-btn" title="Print current view"><Icon name="printer" size={14} /> Print</button>
            <button onClick={onOpenSettings} className="hdr-btn" title="Settings"><Icon name="gear" size={14} /> Settings</button>
            <button onClick={onStartTutorial} className="hdr-btn hdr-btn-start" title="Guided tour"><Icon name="bookOpen" size={14} /> Start Tour</button>
            <button onClick={onOpenHelp} className="hdr-btn gold" title="Help & changelog"><Icon name="help" size={14} /> Help</button>
          </div>
        </div>
      </div>

      {isScenarioMode ? <div className="scenario-diamond-strip" /> : <div className="diamond-strip" />}
      <AppNav view={view} onChangeView={onChangeView} />
    </header>
  );
}
