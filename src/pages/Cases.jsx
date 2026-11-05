
import { useNavigate } from "react-router-dom";
import { ArrowRight, MapPin, FolderOpen } from "lucide-react";
import { cases } from "../data/cases";

export default function Cases() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="page-heading">
        <div>
          <span className="section-label">ARCHIVE / CASE LIBRARY</span>
          <h1>Case Files</h1>
          <p>Explore available investigations and their details.</p>
        </div>
        <FolderOpen size={30} className="heading-icon" />
      </div>

      <div className="case-grid">
        {cases.map((item) => (
          <article className="case-card" key={item.id}>
            <div
              className="case-card-image"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <span className="case-status">{item.status}</span>
              <span className="case-number">MR-00{item.id}</span>
            </div>

            <div className="case-card-body">
              <span className="section-label">{item.category}</span>
              <h2>{item.title}</h2>
              <p>{item.description}</p>

              <div className="case-meta">
                <span><MapPin size={14} /> {item.location}</span>
                <span>{item.difficulty}</span>
              </div>

              <button
                className="text-button"
                onClick={() => navigate("/investigation")}
              >
                VIEW CASE <ArrowRight size={16} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
