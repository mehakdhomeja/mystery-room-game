
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Fingerprint,
  ArrowRight,
  Shield,
  Eye,
  Search
} from "lucide-react";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="landing">
      <div className="landing-background"></div>
      <div className="landing-shade"></div>

      <nav className="landing-nav">
        <div className="landing-logo">
          <Fingerprint size={27} />
          MYSTERY ROOM
        </div>

        <span className="confidential">
          <Shield size={14} /> CONFIDENTIAL INVESTIGATION SYSTEM
        </span>

        <button
          className="landing-login"
          onClick={() => navigate("/dashboard")}
        >
          ENTER SYSTEM
        </button>
      </nav>

      <div className="landing-content">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="landing-tag">
            <span className="status-dot"></span>
            THE DETECTIVE NETWORK IS ACTIVE
          </div>

          <h1>
            EVERY SECRET
            <br />
            LEAVES A <span>TRACE.</span>
          </h1>

          <p>
            Behind every mystery lies a truth waiting to be discovered.
            Examine evidence, question suspects, and connect the
            pieces to uncover what really happened.
          </p>

          <button
            className="gold-button"
            onClick={() => navigate("/dashboard")}
          >
            START INVESTIGATION
            <ArrowRight size={18} />
          </button>

          <div className="landing-features">
            <div><Search size={17} /> INVESTIGATE</div>
            <div><Eye size={17} /> DISCOVER</div>
            <div><Shield size={17} /> SOLVE</div>
          </div>
        </motion.div>
      </div>

      <div className="landing-bottom">
        <span>CASE SYSTEM: MR-001</span>
        <span>ESTABLISHED 2026</span>
        <span>ALL INVESTIGATIONS ARE FICTIONAL</span>
      </div>
    </section>
  );
}
