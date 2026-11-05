
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  FolderOpen,
  Search,
  Network,
  MessageSquare,
  Puzzle,
  FileText,
  Fingerprint,
  Moon,
  ChevronLeft
} from "lucide-react";

const links = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Case Files", path: "/cases", icon: FolderOpen },
  { name: "Investigation", path: "/investigation", icon: Search },
  { name: "Evidence Board", path: "/evidence", icon: Network },
  { name: "Interrogation", path: "/interrogation", icon: MessageSquare },
  { name: "Puzzle Room", path: "/puzzle", icon: Puzzle },
  { name: "Case Report", path: "/report", icon: FileText }
];

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <aside className="sidebar">
      <button className="sidebar-brand" onClick={() => navigate("/")}>
        <span className="brand-icon"><Fingerprint /></span>
        <span>
          <strong>MYSTERY</strong>
          <small>ROOM / DETECTIVE UNIT</small>
        </span>
      </button>

      <div className="sidebar-label">WORKSPACE</div>

      <nav className="sidebar-nav">
        {links.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <Icon size={18} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="sidebar-bottom">
        <div className="agent-card">
          <Moon size={18} />
          <div>
            <strong>AGENT ONLINE</strong>
            <small>Investigation system active</small>
          </div>
        </div>

        <button
          className="back-home"
          onClick={() => navigate("/")}
        >
          <ChevronLeft size={17} />
          Back to Home
        </button>
      </div>
    </aside>
  );
}
