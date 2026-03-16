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
    <nav className="nav-bar-strip" aria-label="Primary sections">
      {NAV_ITEMS.map(([key, label]) => (
        <button
          key={key}
          type="button"
          className={`nav-step ${view === key ? "active" : ""}`}
          aria-current={view === key ? "page" : undefined}
          onClick={() => onChangeView(key)}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}
