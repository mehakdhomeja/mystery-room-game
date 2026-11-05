
import { useState } from "react";
import { cases } from "../data/cases";
import {
  MessageSquare,
  UserRound,
  Send,
  LockKeyhole
} from "lucide-react";

export default function Interrogation({ progress, setProgress }) {
  const suspects = cases[0].suspects;

  const [active, setActive] = useState(suspects[0]);
  const [messages, setMessages] = useState({});
  const [revealed, setRevealed] = useState({});

  function questionSuspect() {
    if (revealed[active.id]) return;

    setMessages((old) => ({
      ...old,
      [active.id]: [
        {
          type: "user",
          text: active.question
        },
        {
          type: "suspect",
          text: active.response
        }
      ]
    }));

    setRevealed((old) => ({
      ...old,
      [active.id]: true
    }));

    setProgress((old) => ({
      ...old,
      interrogated: old.interrogated.includes(active.id)
        ? old.interrogated
        : [...old.interrogated, active.id]
    }));
  }

  return (
    <div className="page">
      <div className="page-heading">
        <div>
          <span className="section-label">CASE MR-001 / INTERVIEWS</span>
          <h1>Suspect Interrogation</h1>
          <p>Examine statements and uncover inconsistencies.</p>
        </div>
        <MessageSquare size={30} className="heading-icon" />
      </div>

      <div className="interrogation-layout">
        <section className="panel suspect-list">
          <span className="section-label">PERSONS OF INTEREST</span>

          {suspects.map((suspect) => (
            <button
              key={suspect.id}
              className={`suspect-item ${
                active.id === suspect.id ? "active" : ""
              }`}
              onClick={() => setActive(suspect)}
            >
              <div className="suspect-avatar">
                <UserRound size={22} />
              </div>

              <div>
                <strong>{suspect.name}</strong>
                <small>{suspect.role}</small>
              </div>

              {revealed[suspect.id] && (
                <span className="suspect-done">✓</span>
              )}
            </button>
          ))}
        </section>

        <section className="panel interrogation-panel">
          <div className="interrogation-header">
            <div className="suspect-avatar large">
              <UserRound size={27} />
            </div>
            <div>
              <h2>{active.name}</h2>
              <p>{active.role}</p>
            </div>
            <span className="case-status">INTERVIEW ROOM</span>
          </div>

          <div className="statement-box">
            <span className="section-label">INITIAL STATEMENT</span>
            <p>"{active.statement}"</p>
          </div>

          <div className="conversation">
            {(messages[active.id] || []).map((message, index) => (
              <div
                key={index}
                className={`chat-message ${message.type}`}
              >
                <span>
                  {message.type === "user" ? "INVESTIGATOR" : active.name}
                </span>
                <p>{message.text}</p>
              </div>
            ))}
          </div>

          <button
            className="gold-button interrogation-button"
            disabled={revealed[active.id]}
            onClick={questionSuspect}
          >
            {revealed[active.id] ? (
              <>INTERVIEW COMPLETED</>
            ) : (
              <>
                <Send size={17} /> ASK QUESTION
              </>
            )}
          </button>

          {revealed[active.id] && (
            <div className="unlocked-clue">
              <LockKeyhole size={18} />
              <div>
                <strong>NEW INFORMATION DISCOVERED</strong>
                <p>{active.clue}</p>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
