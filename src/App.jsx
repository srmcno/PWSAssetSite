import React, { useMemo, useState } from "react";
import AppNav from "./components/AppNav";
import Icon from "./components/Icon";

const SECTION_CONTENT = {
  dashboard: "A polished overview for your day-to-day utility operations and planning.",
  assets: "Track asset details, condition, and replacement priorities in one place.",
  work: "Manage work orders and maintenance tasks with clearer status context.",
  service: "Review service-level information and operational targets quickly.",
  calendar: "Plan upcoming maintenance windows and recurring inspections.",
  history: "Audit operational changes and activity in a concise timeline.",
  reports: "Generate easier-to-read summaries for management and field teams.",
  forecast: "Explore long-term capital and maintenance projections.",
  data: "Import backups and preserve records with confidence.",
  settings: "Tune default behavior and preferences for your organization."
};

export default function App() {
  const [view, setView] = useState("dashboard");
  const message = useMemo(() => SECTION_CONTENT[view], [view]);

  return (
    <div className="app-shell">
      <header className="hero">
        <p className="eyebrow">PWS Asset Site</p>
        <h1>Organized project + polished front-end shell</h1>
        <p className="lede">
          This repository now includes a clean Vite + React structure and a focused landing surface for the bundled
          single-file app export.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="./OkaVlhpisa-V5.2.1.html" target="_blank" rel="noreferrer">
            <Icon name="download" size={16} /> Open bundled app file
          </a>
          <a className="btn" href="https://vite.dev" target="_blank" rel="noreferrer">
            <Icon name="bookOpen" size={16} /> Vite docs
          </a>
        </div>
      </header>

      <AppNav view={view} onChangeView={setView} />

      <main className="content-card">
        <h2>{view[0].toUpperCase() + view.slice(1)}</h2>
        <p>{message}</p>
      </main>
    </div>
  );
}
