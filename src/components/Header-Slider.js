import React from 'react';
import HeaderStyles from '../Styles/Header.module.css';
import backgroundImg1 from '../assets/images/background1.jpg';
import backgroundImg2 from '../assets/images/background2.jpg';
import backgroundImg3 from '../assets/images/background3.jpg';
import { useState } from 'react';

const images = [
  backgroundImg1, backgroundImg2, backgroundImg3
];

const Header = () => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imgNo, setImgNo] = useState(1);

  const nextImage = () => {
    if (imgNo < 3) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setImgNo(imgNo + 1);
    }
  };

  const prevImage = () => {
    if (imgNo > 1) {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setImgNo(imgNo - 1);
    }
  };

  const [isParagraphVisible, setIsParagraphVisible] = useState(false);

  const toggleParagraphVisibility = () => {
    setIsParagraphVisible(!isParagraphVisible);
  };

  return (
    <div id="header" className={HeaderStyles.mainDiv}>
      <div className={HeaderStyles.main}>
        <div className={HeaderStyles.intro}>
          <div className={HeaderStyles.headerName}>
            <div className={HeaderStyles.divider}></div>
            <p>LOGISTIC</p>
          </div>
          <p className={HeaderStyles.name}>Best Shipping <span className={HeaderStyles.highlighted}>Partner</span></p>
          <p className={HeaderStyles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          {isParagraphVisible && (
          <p>tempor incididunt ut labore et dolore.sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
           )}
          <div className={HeaderStyles.btn}><button onClick={toggleParagraphVisibility}>{isParagraphVisible ? 'HIDE' : 'DISCOVER MORE'}</button></div>
          <div className={HeaderStyles.switchPages}>
            <p>{imgNo} / 3</p>
            <i onClick={prevImage} className={`fa fa-arrow-left ${imgNo === 1 && HeaderStyles.disabled}`} aria-hidden="true"></i>
            <i onClick={nextImage} className={`fa fa-arrow-right ${imgNo === 3 && HeaderStyles.disabled}`} aria-hidden="true"></i>
          </div>
        </div>
        <div className={HeaderStyles.img}>
          <img src={images[currentImageIndex]} alt='BackgroundImg' />
        </div>
      </div>
    </div>
  )
}

export default Header;
