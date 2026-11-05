
import { useNavigate } from "react-router-dom";
import {
  FolderOpen,
  Search,
  CheckCircle2,
  Trophy,
  ArrowRight,
  Clock,
  Activity
} from "lucide-react";

import StatCard from "../components/StatCard";

export default function Dashboard({ progress }) {
  const navigate = useNavigate();

  const discovered = progress.discovered.length;
  const interrogated = progress.interrogated.length;

  const tasks = [
    {
      name: "Discover all evidence",
      done: discovered >= 4,
      path: "/investigation"
    },
    {
      name: "Question the suspects",
      done: interrogated >= 3,
      path: "/interrogation"
    },
    {
      name: "Connect the evidence",
      done: progress.connected,
      path: "/evidence"
    },
    {
      name: "Solve the mystery puzzle",
      done: progress.puzzleSolved,
      path: "/puzzle"
    }
  ];

  const completedTasks = tasks.filter((task) => task.done).length;
  const percentage = Math.round((completedTasks / 4) * 100);

  return (
    <div className="page">
      <div className="page-heading">
        <div>
          <span className="section-label">OVERVIEW / 001</span>
          <h1>Detective Dashboard</h1>
          <p>Welcome back, investigator. Your next mystery awaits.</p>
        </div>

        <button
          className="gold-button small"
          onClick={() => navigate("/investigation")}
        >
          Continue Case <ArrowRight size={16} />
        </button>
      </div>

      <div className="stats-grid">
        <StatCard
          title="ACTIVE CASES"
          value="01"
          detail="One investigation available"
          icon={FolderOpen}
        />

        <StatCard
          title="DISCOVERED CLUES"
          value={String(discovered).padStart(2, "0")}
          detail="Evidence collected"
          icon={Search}
        />

        <StatCard
          title="INTERROGATIONS"
          value={String(interrogated).padStart(2, "0")}
          detail="Suspects questioned"
          icon={Activity}
        />

        <StatCard
          title="CASE STATUS"
          value={progress.completed ? "SOLVED" : "OPEN"}
          detail="Current investigation"
          icon={Trophy}
        />
      </div>

      <div className="dashboard-grid">
        <section className="panel featured-case">
          <div className="panel-heading">
            <span className="section-label">PRIORITY INVESTIGATION</span>
            <span className="case-status">ACTIVE</span>
          </div>

          <div className="featured-image"></div>

          <div className="featured-details">
            <span className="section-label">CASE MR-001 / MYSTERY</span>
            <h2>The Midnight Mansion</h2>
            <p>
              A valuable family journal has disappeared from
              Blackwood Estate. Investigate the clues and
              uncover the truth.
            </p>

            <button
              className="text-button"
              onClick={() => navigate("/investigation")}
            >
              OPEN INVESTIGATION <ArrowRight size={16} />
            </button>
          </div>
        </section>

        <section className="panel progress-panel">
          <div className="panel-heading">
            <span className="section-label">INVESTIGATION PROGRESS</span>
            <CheckCircle2 size={20} />
          </div>

          <div className="progress-number">
            {percentage}<span>%</span>
          </div>

          <div className="progress-track">
            <div style={{ width: `${percentage}%` }}></div>
          </div>

          <p className="muted">
            {completedTasks} of 4 investigation objectives completed.
          </p>

          <div className="task-list">
            {tasks.map((task) => (
              <button
                key={task.name}
                className="task-item"
                onClick={() => navigate(task.path)}
              >
                <span className={task.done ? "task-check done" : "task-check"}>
                  {task.done ? "✓" : "○"}
                </span>

                <span>{task.name}</span>
                <ArrowRight size={15} />
              </button>
            ))}
          </div>
        </section>
      </div>

      <section className="panel activity-panel">
        <div className="panel-heading">
          <span className="section-label">LATEST ACTIVITY</span>
          <Clock size={18} />
        </div>

        <p className="muted">
          {discovered > 0
            ? `${discovered} clues discovered during this investigation.`
            : "No investigation activity yet. Start exploring the crime scene."}
        </p>
      </section>
    </div>
  );
}
