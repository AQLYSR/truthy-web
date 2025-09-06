export default function ThoughtCard({ item, className}) {
  if (!item) return null;

  return (
    <div className={`thought-card ${className}`}>
      <div className="card-header">
        <img src={item.pfp} alt={item.name} className="card-pfp" />
        <span className="card-name">{item.name}</span>
      </div>
      <div className="card-body">
        <p>{item.thought}</p>
      </div>
      <div className="card-footer">
        <div className="card-actions">
          <span>❤️ {item.likes}</span>
          <span>💬 {item.comments}</span>
        </div>
        <div className="card-meta">
          <span>{item.time}</span>
          <span>{item.location}</span>
        </div>
      </div>
    </div> 
  );
}
