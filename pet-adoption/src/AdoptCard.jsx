import "./CSS/Card.css";
import "./CSS/AdoptPage.css";

function AdoptCard({ photo, name, breed, content, navTo }) {
  return (
    <div className="adopt-card">
      <img src={photo} alt={`${name}`} className="pet-photo" />
      <div className="pet-info">
        <p>Name:{name}</p>
        <p>Breed:{breed}</p>
        <p>{content}</p>
        <button
          href="#application"
          onClick={(e) => {
            e.preventDefault();
            navTo(e);
          }}
        >
          Adopt me
        </button>
      </div>
    </div>
  );
}

export default AdoptCard;
