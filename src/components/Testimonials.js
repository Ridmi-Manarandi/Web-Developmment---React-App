import React, { useState } from 'react';
import TestimonialStyles from '../Styles/Testimonials.module.css';

const Testimonials = () => {
  const paragraphs = [
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet.",
    "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable."
  ];

  const [currentParagraph, setCurrentParagraph] = useState(0);

  const handleRightIconClick = () => {
    setCurrentParagraph(prevIndex => (prevIndex + 1) % paragraphs.length);
  };

  const handleLeftIconClick = () => {
    setCurrentParagraph(prevIndex => (prevIndex - 1 + paragraphs.length) % paragraphs.length);
  };

  const isLeftButtonDisabled = currentParagraph === 0;
  const isRightButtonDisabled = currentParagraph === paragraphs.length - 1;

  return (
    <div id="testimonials" className={TestimonialStyles.main}>
      <div className={TestimonialStyles.card}>
        <div className={TestimonialStyles.cardItems}>
          <h2>TRUSTED CLIENTS</h2>
          <h3>FRINGILLA SOLLICITUDIN FAMES VEL</h3>
          <div className={TestimonialStyles.para}> 
            <p>{paragraphs[currentParagraph]}</p>
          </div>
          <div className={TestimonialStyles.footer}>
            <div className={TestimonialStyles.showIcons}>
              <i
                className={`fa fa-angle-left ${isLeftButtonDisabled ? TestimonialStyles.disabled : ''}`}
                aria-hidden="true"
                onClick={handleLeftIconClick}
              ></i>
              <i
                className={`fa fa-angle-right ${isRightButtonDisabled ? TestimonialStyles.disabled : ''}`}
                aria-hidden="true"
                onClick={handleRightIconClick}
              ></i>
            </div>
            <div className={TestimonialStyles.author}>
              <h2>JOHN DEO</h2>
              <p>Managing Director</p>
            </div>
          </div>
        </div>
        <div className={TestimonialStyles.cardItems}>
          <h2>WHY CHOOSE US</h2>
          <h3>FRINGILLA SOLLICITUDIN FAMES VEL</h3>
          <div className={TestimonialStyles.cardItem}>
            <p>Tempor elit at quam nulla eleifend ultrices per tellus</p>
            <i className="fa fa-plus-square" aria-hidden="true"></i>
          </div>
          <div className={TestimonialStyles.cardItem}>
            <p>Tempor elit at quam nulla eleifend ultrices per tellus</p>
            <i className="fa fa-plus-square" aria-hidden="true"></i>
          </div>
          <div className={TestimonialStyles.cardItem}>
            <p>Tempor elit at quam nulla eleifend ultrices per tellus</p>
            <i className="fa fa-plus-square" aria-hidden="true"></i>
          </div>
          <div className={TestimonialStyles.cardItem}>
            <p>Tempor elit at quam nulla eleifend ultrices per tellus</p>
            <i className="fa fa-plus-square" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
