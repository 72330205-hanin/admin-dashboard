import "../styles/Dashboard.css";

function StatsCard({ title, value, icon, change, color }) {
  return (
    <div className="col-12 col-md-6 col-xl-4">
      <div
        className="card stats-card border-0 shadow-sm"
        style={{ "--cardColor": color }}
      >
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <p className="stats-title">{title}</p>
            <h3 className="stats-value">{value}</h3>
            <span className="stats-change">{change}</span>
          </div>

          <div
            className="stats-icon"
            style={{ backgroundColor: color }}
          >
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsCard;