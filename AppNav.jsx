import React from "react";

const NAV_ITEMS = [
  ["dashboard", "Dashboard"],
  ["assets", "Assets"],
  ["work", "Work"],
  ["service", "Service"],
  ["calendar", "Calendar"],
  ["history", "History"],
  ["reports", "Reports"],
  ["forecast", "Forecast"],
  ["data", "Import / Backup"],
  ["settings", "Settings"]
];

export default function AppNav({ view, onChangeView }) {
  return (
    <div className="nav-bar-strip no-print">
      {NAV_ITEMS.map(([key, label]) => (
        <div
          key={key}
          className={`nav-step ${view === key ? "active" : ""}`}
          onClick={() => onChangeView(key)}
        >
          {label}
        </div>
      ))}
    </div>
  );
}
