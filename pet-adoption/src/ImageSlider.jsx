import { useState } from "react";
import left from "./pic/arrow-left.png";
import right from "./pic/arrow-right.png";
import "./CSS/Slider.css";

export default function ImageSlider({ imgUrls }) {
  const [imgIndex, setImgIndex] = useState(0);

  const len = imgUrls.length;

  function showPrevImg() {
    setImgIndex((index) => {
      if (index === 0) return len - 1;
      return index - 1;
    });
  }
  function showNextImg() {
    setImgIndex((index) => {
      if (index === len - 1) return 0;
      return index + 1;
    });
  }

  return (
    <section aria-label="Image Slider" className="img-slider-container">
      {/* <div className="img-container"> */}
      <div className={`img-container img-container-index-${imgIndex}`}>
        {/* create all img */}
        {imgUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            className="img-slider-img"
            alt={`Slide ${index}`}
          />
        ))}
        {/* only create current img ,can't make transition */}
        {/* {imgUrls.map((url, index) => {
        return (
          <div key={index} className="img-container">
            {imgIndex === index && (
              <img
                src={url}
                className={`img-slider-img ${
                  imgIndex === index ? "active" : "inactive"
                }`}
                alt={`Slide ${index}`}
              />
            )}
          </div>
        );
      })} */}
      </div>

      <button onClick={showPrevImg} className="arrow-button arrow-button-left">
        <img src={left} alt="left" />
      </button>
      <button onClick={showNextImg} className="arrow-button arrow-button-right">
        <img src={right} alt="right" />
      </button>
    </section>
  );
}
