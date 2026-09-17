"use client";

import { useState } from "react";
import styles from "./find-a-specialist.module.css";

// Client-side helper that opens a Google search for an electrophysiologist
// near the location the visitor types in. No data is submitted anywhere —
// this mirrors the original mockup's plain `window.open()` behavior.
export default function SpecialistSearch() {
  const [location, setLocation] = useState("");

  function openSearch() {
    const loc = location.trim();
    const query = encodeURIComponent(`electrophysiologist near ${loc || "me"}`);
    window.open(`https://www.google.com/search?q=${query}`, "_blank");
  }

  return (
    <div className={styles.searchTool}>
      <h3 style={{ marginTop: 0 }}>Quick search</h3>
      <p style={{ marginBottom: 0 }}>
        Search &quot;electrophysiologist near me,&quot; then call and screen
        using the questions above.
      </p>
      <div className={styles.searchRow}>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter your city or ZIP code"
          aria-label="Enter your city or ZIP code"
        />
        <button type="button" className="btn btn-amber" onClick={openSearch}>
          Search on Google
        </button>
      </div>
      <p className={styles.searchHint}>Opens a Google search for electrophysiologists in that area, in a new tab.</p>
    </div>
  );
}
