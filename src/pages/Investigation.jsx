
import { cases } from "../data/cases";
import { motion } from "framer-motion";
import {
  Search,
  FileText,
  KeyRound,
  Monitor,
  ClipboardList,
  CheckCircle2,
  MapPin
} from "lucide-react";

const iconMap = {
  FileText,
  KeyRound,
  Monitor,
  ClipboardList
};

export default function Investigation({ progress, setProgress }) {
  const currentCase = cases[0];

  function collectClue(id) {
    setProgress((old) => ({
      ...old,
      discovered: old.discovered.includes(id)
        ? old.discovered
        : [...old.discovered, id]
    }));
  }

  return (
    <div className="page">
      <div className="page-heading">
        <div>
          <span className="section-label">CASE MR-001 / FIELD WORK</span>
          <h1>Crime Scene Investigation</h1>
          <p>Search the available evidence and build your case.</p>
        </div>
        <Search size={30} className="heading-icon" />
      </div>

      <div className="scene-banner">
        <img src={currentCase.image} alt="Blackwood Estate" />
        <div className="scene-overlay">
          <span className="section-label">CURRENT LOCATION</span>
          <h2>{currentCase.location}</h2>
          <p><MapPin size={15} /> Blackwood Estate / Private Property</p>
        </div>
      </div>

      <div className="evidence-heading">
        <div>
          <span className="section-label">AVAILABLE MATERIAL</span>
          <h2>Discovered Evidence</h2>
        </div>

        <span className="counter">
          {progress.discovered.length} / {currentCase.clues.length} COLLECTED
        </span>
      </div>

      <div className="clue-grid">
        {currentCase.clues.map((clue, index) => {
          const Icon = iconMap[clue.icon] || Search;
          const collected = progress.discovered.includes(clue.id);

          return (
            <motion.article
              key={clue.id}
              className={`clue-card ${collected ? "collected" : ""}`}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="clue-top">
                <span className="clue-index">EVIDENCE 0{index + 1}</span>
                {collected && <CheckCircle2 size={19} />}
              </div>

              <div className="clue-icon"><Icon size={25} /></div>

              <span className="section-label">{clue.type}</span>
              <h3>{clue.title}</h3>
              <p>{clue.description}</p>

              <button
                className={collected ? "collected-button" : "outline-button"}
                onClick={() => collectClue(clue.id)}
                disabled={collected}
              >
                {collected ? "EVIDENCE COLLECTED" : "COLLECT EVIDENCE"}
              </button>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}
