import animal1 from "./pic/animal1.jpg";
import animal2 from "./pic/animal2.jpg";
import animal3 from "./pic/animal3.jpg";
import adopt from "./pic/adopt.jpg";
import volunteer from "./pic/volunteer.jpg";
import donate from "./pic/donate.jpg";
import ImageSlider from "./ImageSlider";
import Card from "./Card";
import Modal from "./Modal";
import { useState } from "react";
import "./CSS/Card.css";
import "./CSS/Home.css";

const Images = [animal1, animal2, animal3];

export default function Home({ navTo }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="home-container">
      <ImageSlider imgUrls={Images} />
      <div className="card-container">
        <Card
          title="Adopt Now!"
          photo={adopt}
          content="There are so many animals who need a lovinghome, See which animals we have available.You might just find your next fur baby here!"
        >
          <button
            className="button-link"
            href="#adopt"
            onClick={(e) => {
              e.preventDefault();
              navTo(e);
            }}
          >
            See more fur baby
          </button>
        </Card>
        <Card
          title="Join us!"
          photo={volunteer}
          content="We love to have new volunteers join our team. Find out how you can help more animals find their furever home here!"
        />
        <Card
          title="Donate Now!"
          photo={donate}
          content="You can help animals in need. Make a life-saving gift today."
        >
          <div>
            <button className="modal-btn" onClick={() => setIsOpen(true)}>
              Sponsor your baby
            </button>
            <Modal
              open={isOpen}
              onClose={() => {
                setIsOpen(false);
              }}
            ></Modal>
          </div>
        </Card>
      </div>
    </div>
  );
}
