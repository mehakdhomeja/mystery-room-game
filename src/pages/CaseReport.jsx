
import { useNavigate } from "react-router-dom";
import { cases } from "../data/cases";
import {
  Trophy,
  CheckCircle2,
  RotateCcw,
  Award
} from "lucide-react";

export default function CaseReport({ progress, setProgress }) {
  const navigate = useNavigate();

  const total = 4;

  const tasks = [
    progress.discovered.length >= 4,
    progress.interrogated.length >= 3,
    progress.connected,
    progress.puzzleSolved
  ];

  const score = Math.round(
    (tasks.filter(Boolean).length / total) * 100
  );

  const completed = score === 100;

  function solveCase() {
    if (!completed) return;

    setProgress((old) => ({
      ...old,
      completed: true
    }));
  }

  function resetCase() {
    setProgress({
      discovered: [],
      interrogated: [],
      connected: false,
      puzzleSolved: false,
      conclusion: "",
      completed: false
    });

    navigate("/dashboard");
  }

  return (
    <div className="page">
      <div className="page-heading">
        <div>
          <span className="section-label">CASE MR-001 / FINAL REVIEW</span>
          <h1>Investigation Report</h1>
          <p>Review your progress and evaluate your findings.</p>
        </div>
        <Award size={30} className="heading-icon" />
      </div>

      <div className="report-card">
        <div className="report-icon">
          <Trophy size={42} />
        </div>

        <span className="section-label">DETECTIVE PERFORMANCE</span>

        <h2>{completed ? "Case Objectives Completed" : "Investigation In Progress"}</h2>

        <div className="score-number">{score}<span>%</span></div>

        <div className="progress-track report-track">
          <div style={{ width: `${score}%` }}></div>
        </div>

        <p>
          {completed
            ? "You have completed all investigation objectives. Excellent detective work."
            : "Complete the remaining objectives to achieve a perfect investigation score."}
        </p>
      </div>

      <section className="panel report-objectives">
        <span className="section-label">INVESTIGATION CHECKLIST</span>

        {[
          `Collect all ${cases[0].clues.length} pieces of evidence`,
          "Interrogate all three suspects",
          "Create an evidence connection",
          "Solve the clock puzzle"
        ].map((task, index) => (
          <div className="report-task" key={task}>
            <span>{task}</span>
            {tasks[index] ? (
              <CheckCircle2 className="success-icon" size={20} />
            ) : (
              <span className="pending-label">PENDING</span>
            )}
          </div>
        ))}
      </section>

      <div className="report-actions">
        {!progress.completed && (
          <button
            className="gold-button"
            disabled={!completed}
            onClick={solveCase}
          >
            <Trophy size={17} /> COMPLETE CASE
          </button>
        )}

        {progress.completed && (
          <div className="success-message">
            <CheckCircle2 size={18} /> CASE COMPLETED
          </div>
        )}

        <button className="outline-button" onClick={resetCase}>
          <RotateCcw size={16} /> RESET INVESTIGATION
        </button>
      </div>
    </div>
  );
}
