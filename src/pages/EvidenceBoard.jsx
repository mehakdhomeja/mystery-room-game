
import { useState } from "react";
import { cases } from "../data/cases";
import { Network, Link2, RotateCcw, CheckCircle2 } from "lucide-react";

export default function EvidenceBoard({ progress, setProgress }) {
  const [selected, setSelected] = useState([]);
  const [connections, setConnections] = useState([]);

  const clues = cases[0].clues.filter((clue) =>
    progress.discovered.includes(clue.id)
  );

  function toggleClue(id) {
    setSelected((old) =>
      old.includes(id)
        ? old.filter((item) => item !== id)
        : old.length < 2
          ? [...old, id]
          : [old[1], id]
    );
  }

  function connectClues() {
    if (selected.length !== 2 || selected[0] === selected[1]) return;

    const key = [...selected].sort().join("-");

    if (!connections.includes(key)) {
      setConnections((old) => [...old, key]);
    }

    setProgress((old) => ({
      ...old,
      connected: true
    }));

    setSelected([]);
  }

  function resetBoard() {
    setSelected([]);
    setConnections([]);
    setProgress((old) => ({
      ...old,
      connected: false
    }));
  }

  return (
    <div className="page">
      <div className="page-heading">
        <div>
          <span className="section-label">CASE MR-001 / ANALYSIS</span>
          <h1>Evidence Board</h1>
          <p>Select two clues to connect their relationship.</p>
        </div>
        <Network size={30} className="heading-icon" />
      </div>

      <div className="board-instructions">
        <Link2 size={18} />
        Select two evidence cards, then press CONNECT EVIDENCE.
      </div>

      <div className="evidence-board">
        {clues.length === 0 ? (
          <div className="board-empty">
            <Network size={40} />
            <h3>No evidence available</h3>
            <p>Collect evidence in the investigation room first.</p>
          </div>
        ) : (
          clues.map((clue) => (
            <button
              key={clue.id}
              onClick={() => toggleClue(clue.id)}
              className={`board-card ${
                selected.includes(clue.id) ? "selected" : ""
              }`}
            >
              <span>CLUE 0{clue.id}</span>
              <h3>{clue.title}</h3>
              <p>{clue.description}</p>
              {selected.includes(clue.id) && (
                <CheckCircle2 size={17} />
              )}
            </button>
          ))
        )}
      </div>

      <div className="board-actions">
        <span>{connections.length} CONNECTIONS CREATED</span>

        <button
          className="gold-button small"
          disabled={selected.length !== 2}
          onClick={connectClues}
        >
          <Link2 size={16} /> CONNECT EVIDENCE
        </button>

        <button className="outline-button" onClick={resetBoard}>
          <RotateCcw size={15} /> RESET
        </button>
      </div>

      <section className="panel connections-panel">
        <span className="section-label">YOUR CONNECTIONS</span>

        {connections.length === 0 ? (
          <p className="muted">No connections have been created yet.</p>
        ) : (
          connections.map((connection) => {
            const ids = connection.split("-").map(Number);
            const first = cases[0].clues.find((item) => item.id === ids[0]);
            const second = cases[0].clues.find((item) => item.id === ids[1]);

            return (
              <div className="connection-item" key={connection}>
                <strong>{first.title}</strong>
                <Link2 size={16} />
                <strong>{second.title}</strong>
              </div>
            );
          })
        )}
      </section>
    </div>
  );
}
