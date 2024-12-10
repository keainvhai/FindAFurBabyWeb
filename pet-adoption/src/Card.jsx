function Card({ photo, title, content, children }) {
  return (
    <div className="card">
      <img src={photo} alt={title} className="card-photo" />
      <div className="card-info">
        <h2>{title}</h2>
        <p>{content}</p>
        {children}
      </div>
    </div>
  );
}

export default Card;
