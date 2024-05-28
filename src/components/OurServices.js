import React, { useEffect, useState } from 'react';
import ServicesStyles from '../Styles/Services.module.css';
import ServiceImg1 from '../assets/images/service1.jpg';
import ServiceImg2 from '../assets/images/service2.jpg';
import ServiceImg3 from '../assets/images/service3.jpg';
import ServiceImg4 from '../assets/images/service4.jpg';
import ServiceImg5 from '../assets/images/service1.jpg';
import ServiceImg6 from '../assets/images/service3.jpg';
import ServiceImg7 from '../assets/images/service4.jpg';
import ServiceImg8 from '../assets/images/service2.jpg';
import ServiceImg9 from '../assets/images/service1.jpg';
import ServiceImg10 from '../assets/images/service3.jpg';

const cards = [
  {
    img: ServiceImg1,
    title: "Air Freight Services",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    img: ServiceImg2,
    title: "Ocean Freight Services",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    img: ServiceImg3,
    title: "Road Freight Services",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    img: ServiceImg4,
    title: "Rail Freight Services",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece",
  },
  {
    img: ServiceImg5,
    title: "Warehouse Services",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page.",
  },
  {
    img: ServiceImg6,
    title: "Cargo Services",
    description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered",
  },
  {
    img: ServiceImg7,
    title: "Delivery Services",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.",
  },
  {
    img: ServiceImg8,
    title: "Packaging Services",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    img: ServiceImg9,
    title: "Supply Chain Services",
    description: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    img: ServiceImg10,
    title: "Freight Forwarding Services",
    description: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % cards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const [currentNo, setCurrentNo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNo((prevNo) => (prevNo + 1) % 5);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentCards = [
    cards[currentIndex],
    cards[(currentIndex + 1) % cards.length],
  ];

  const [isParagraphVisible, setIsParagraphVisible] = useState(false);

  const toggleParagraphVisibility = () => {
    setIsParagraphVisible(!isParagraphVisible);
  };

  return (
    <div id="services" className={ServicesStyles.main}>
      <div className={ServicesStyles.header}>
        <p>Real Solution, Real Fast!</p>
        <h1>Best Global Logistics Solution</h1>
      </div>
      <div className={ServicesStyles.cardContainer}>
        {currentCards.map((card, index) => (
          <div className={ServicesStyles.cardItems} key={index}>
            <div className={ServicesStyles.cardImg}>
              <img src={card.img} alt={card.title} />
            </div>
            <div className={ServicesStyles.description}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
             
              {isParagraphVisible && (
               <p >Lorem ipsum dolor sit amet, consectetur</p>
           )}
              <div className={ServicesStyles.readMore}>
                <i onClick={toggleParagraphVisibility} className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                <p>{isParagraphVisible ? 'Hide' : 'Read More'}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={ServicesStyles.footer}>
        <div className={ServicesStyles.para}>
          <p>Logistics & Transport Solutions Saves Your Time.<span className={ServicesStyles.highlighted}>Finds Your Solutions</span></p>
          <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
        </div>
        <div className={ServicesStyles.slideShow}>
      {[...Array(5)].map((_, No) => (
        <i
          key={No}
          className={`fa fa-circle${currentNo === No ? '' : '-o'}`}
          aria-hidden="true"
          style={{ color: currentNo === No ? '#247035' : 'black' }}
        ></i>
      ))}
    </div>
      </div>
    </div>
  );
}

export default Services;
