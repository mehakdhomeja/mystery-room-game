
import { Search, Bell, ShieldCheck } from "lucide-react";

export default function Topbar() {
  return (
    <header className="topbar">
      <div>
        <span className="topbar-subtitle">DETECTIVE NETWORK / SECURE ACCESS</span>
        <h3>Investigation Center</h3>
      </div>

      <div className="topbar-actions">
        <div className="system-status">
          <span className="status-dot"></span>
          SYSTEM ONLINE
        </div>

        <button className="icon-button" aria-label="Search">
          <Search size={19} />
        </button>

        <button className="icon-button" aria-label="Notifications">
          <Bell size={19} />
        </button>

        <div className="profile-avatar">
          <ShieldCheck size={20} />
        </div>
      </div>
    </header>
  );
}
