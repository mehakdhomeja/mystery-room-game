
import { useState } from "react";
import { cases } from "../data/cases";
import {
  Puzzle,
  Lightbulb,
  CheckCircle2,
  RotateCcw
} from "lucide-react";

export default function PuzzleRoom({ progress, setProgress }) {
  const puzzle = cases[0].puzzle;

  const [answer, setAnswer] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [feedback, setFeedback] = useState("");

  function checkAnswer() {
    if (answer.trim() === "") {
      setFeedback("Please enter your answer.");
      return;
    }

    if (answer.trim() === puzzle.answer) {
      setFeedback("Correct! Puzzle solved successfully.");

      setProgress((old) => ({
        ...old,
        puzzleSolved: true
      }));
    } else {
      setFeedback("Incorrect answer. Examine the clues again.");
    }
  }

  function resetPuzzle() {
    setAnswer("");
    setFeedback("");
    setShowHint(false);
  }

  return (
    <div className="page">
      <div className="page-heading">
        <div>
          <span className="section-label">CASE MR-001 / CHALLENGE</span>
          <h1>Puzzle Laboratory</h1>
          <p>Use logic and observation to solve the mystery.</p>
        </div>
        <Puzzle size={30} className="heading-icon" />
      </div>

      <div className="puzzle-wrapper">
        <div className="puzzle-top">
          <Puzzle size={35} />
          <span className="section-label">TIME & SEQUENCE CHALLENGE</span>
          <h2>The Stopped Clock</h2>
          <p>
            Every minute matters. Examine the timeline and
            calculate the missing interval.
          </p>
        </div>

        <div className="timeline">
          <div className="timeline-point">
            <span>09:15 PM</span>
            <div></div>
            <p>Visitor log recorded</p>
          </div>

          <div className="timeline-line"></div>

          <div className="timeline-point">
            <span>09:20 PM</span>
            <div></div>
            <p>Study clock stopped</p>
          </div>
        </div>

        <div className="puzzle-question">
          <span className="section-label">YOUR CHALLENGE</span>
          <h3>{puzzle.question}</h3>

          <input
            type="number"
            value={answer}
            onChange={(event) => setAnswer(event.target.value)}
            placeholder="Enter your answer in minutes..."
            disabled={progress.puzzleSolved}
          />

          <div className="puzzle-buttons">
            <button
              className="gold-button"
              onClick={checkAnswer}
              disabled={progress.puzzleSolved}
            >
              CHECK ANSWER
            </button>

            <button
              className="outline-button"
              onClick={() => setShowHint(!showHint)}
            >
              <Lightbulb size={16} /> {showHint ? "HIDE HINT" : "SHOW HINT"}
            </button>

            <button className="outline-button" onClick={resetPuzzle}>
              <RotateCcw size={15} />
            </button>
          </div>

          {showHint && (
            <div className="hint-box">
              <Lightbulb size={17} /> {puzzle.hint}
            </div>
          )}

          {feedback && (
            <div className={
              progress.puzzleSolved ? "success-message" : "feedback-message"
            }>
              {progress.puzzleSolved && <CheckCircle2 size={17} />}
              {feedback}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
