import AdoptCard from "./AdoptCard";
import animalData from "./animalData";

function Adopt({ navTo }) {
  // const handleAdoptClick = console.console.log("cliked adopt button");

  return (
    <>
      <h3>Help them to find their home!</h3>
      <div className="adopt-container">
        {animalData.map((animal, index) => (
          <AdoptCard
            navTo={navTo}
            key={index}
            name={animal.name}
            breed={animal.breed}
            content={animal.content}
            photo={animal.photo}
            // onButtonClick={handleAdoptClick}
          />
        ))}
      </div>
    </>
  );
}

export default Adopt;
