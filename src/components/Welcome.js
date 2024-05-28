import React, { useEffect, useState } from 'react';
import WelcomeStyles from '../Styles/Welcome.module.css';
import welcomeImg1 from '../assets/images/welcome1.jpg';
import welcomeImg2 from '../assets/images/welcome2.jpg';
import welcomeImg3 from '../assets/images/welcome3.jpg';
import welcomeImg4 from '../assets/images/welcome4.jpg';

const images1 = [welcomeImg1, welcomeImg2];
const images2 = [welcomeImg3, welcomeImg4];

const Welcome = () => {
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex1((prevIndex) => (prevIndex + 1) % images1.length);
      setCurrentIndex2((prevIndex) => (prevIndex + 1) % images2.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const [isParagraphVisible, setIsParagraphVisible] = useState(false);

  const toggleParagraphVisibility = () => {
    setIsParagraphVisible(!isParagraphVisible);
  };
  return (
    <div id="welcome" className={WelcomeStyles.main}>
      <div className={WelcomeStyles.img}>
        <img src={images1[currentIndex1]} alt='img1' className={WelcomeStyles.img1} />
        <img src={images2[currentIndex2]} alt='img2' className={WelcomeStyles.img2} />
      </div>
      <div className={WelcomeStyles.intro}>
        <div className={WelcomeStyles.para1}>
          <p>TransMax Logistics <br />Around <span className={WelcomeStyles.highlighted}>the World</span></p>
        </div>
        <div className={WelcomeStyles.para2}>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.</p>
        </div>
        <div className={WelcomeStyles.para3}>
        {isParagraphVisible && (
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
           )}
        </div>
        <div className={WelcomeStyles.btn}><button onClick={toggleParagraphVisibility}>{isParagraphVisible ? 'HIDE' : 'MORE ABOUT US'}</button></div>
      </div>
    </div>
  );
}

export default Welcome;
