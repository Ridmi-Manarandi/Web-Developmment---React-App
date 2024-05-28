import React from 'react'
import FooterStyles from '../Styles/Footer.module.css';
import FooterImg1 from '../assets/images/newsImg1.jpg';
import FooterImg2 from '../assets/images/newsImg2.jpg';
import FooterImg3 from '../assets/images/newsImg3.jpg';
import FooterImg4 from '../assets/images/newsImg4.jpg';
import FooterImg5 from '../assets/images/service1.jpg';
import FooterImg6 from '../assets/images/service2.jpg';
import { useState } from 'react';
const Footer = () => {

  const scrollToNavbar = () => {
    const navbarSection = document.getElementById("navbar");
    navbarSection.scrollIntoView({ behavior: "smooth" });
};

const [email, setEmail] = useState('');
const [isButtonDisabled, setIsButtonDisabled] = useState(true);

const handleInputChange = (e) => {
  const inputValue = e.target.value;
  setEmail(inputValue);
  setIsButtonDisabled(inputValue.trim() === '');
};

const handleButtonClick = () => {
  if (email.trim() !== '') {
    alert('Your response has been sent');
    setEmail('');
    setIsButtonDisabled(true);
  }
};

  return (
    <div id="footer" className={FooterStyles.main}>
      <div className={FooterStyles.header}>
        <div className={FooterStyles.intro}>
          <h1>Weekly Newsletter</h1>
          <p>Non fringilla nascetur vitae orci vehicula rutrum letius natoque.</p>
        </div>
        <div className={FooterStyles.post}>
      <input
        placeholder='Enter Your Mail'
        value={email}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick} disabled={isButtonDisabled}>
        SUBSCRIBE
      </button>
    </div>
      </div>
      <div className={FooterStyles.card}>
        <div className={FooterStyles.aboutUs}>
          <h1>About Us</h1>
          <hr className={FooterStyles.dottedLine}/>
          <p>Non fringilla nascetur vitae orci vehicula rutrum letius natoque.</p>
          <div className={Footer.contacts}>
            <div className={FooterStyles.phone}>
              <i class="fa fa-phone" aria-hidden="true"></i>
              <div className={FooterStyles.divider1}></div>
              <p>(+94) 11 342 9832</p>
            </div>
            <div className={FooterStyles.location}>
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              <div className={FooterStyles.divider2}></div>
              <p>42 Lily ave,Colombo 00600</p>
            </div>
          </div>
        </div>
     
        <div className={FooterStyles.latestNews}>
          <h1>Latest News</h1>
          <hr className={FooterStyles.dottedLine}/>
          <div className={FooterStyles.newsPara}>
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
            <p>Non fringilla nascetur vitae orci vehicula rutrum letius natoque</p>
            <br/>
          </div>
          <p style={{ marginLeft: '44px' }}>5 minutes ago</p>
          <div className={FooterStyles.newsPara}>
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
            <p>Non fringilla nascetur vitae orci vehicula rutrum letius natoque.</p>
            <br/>
          </div>
          <p style={{ marginLeft: '44px' }}>5 minutes ago</p>
        </div>
        <div className={FooterStyles.cutomerService1}>
          <h1>Customer Service</h1>
          <hr className={FooterStyles.dottedLine}/>
          <div className={FooterStyles.list}>
              <div className={FooterStyles.listItem}><i class="fa fa-hand-o-right" aria-hidden="true"></i><li>Support Forums</li></div>
              <div className={FooterStyles.listItem}><i class="fa fa-hand-o-right" aria-hidden="true"></i><li>Cmmunication</li></div>
              <div className={FooterStyles.listItem}> <i class="fa fa-hand-o-right" aria-hidden="true"></i><li>FAQS</li></div>
              <div className={FooterStyles.listItem}><i class="fa fa-hand-o-right" aria-hidden="true"></i><li>Privacy Policy</li></div>
              <div className={FooterStyles.listItem}><i class="fa fa-hand-o-right" aria-hidden="true"></i><li>Rules & Conditions</li></div>
              <div className={FooterStyles.listItem}> <i class="fa fa-hand-o-right" aria-hidden="true"></i><li>Contact Us</li></div>   
          </div>  
        </div>
        <div className={FooterStyles.customerService2}>
          <h1>Customer Service</h1>
          <hr className={FooterStyles.dottedLine}/>
          <div className={FooterStyles.servicesImgs}>
          <img src={FooterImg1}></img>
          <img src={FooterImg2}></img>
          <img src={FooterImg3}></img>
          <img src={FooterImg4}></img>
          <img src={FooterImg5}></img>
          <img src={FooterImg6}></img>
        </div>
      </div>
    </div>
    <div className={FooterStyles.footer}>
        <div className={FooterStyles.para}>
        <p>Copyright @ 2021 All Rights Reserved.Site by Xiteb</p>
        </div>
        <div className={FooterStyles.icons}>
        <i class="fa fa-facebook" aria-hidden="true"></i>
        <i class="fa fa-vimeo" aria-hidden="true"></i>
        <i class="fa fa-twitter" aria-hidden="true"></i>
        <i class="fa fa-behance" aria-hidden="true"></i>
        <i class="fa fa-empire" aria-hidden="true"></i>
        </div>
      </div>
      <div className={FooterStyles.arrow}>
      <i onClick={scrollToNavbar} className="fa fa-arrow-up" aria-hidden="true"></i>
        </div>
    </div>
  )
}

export default Footer;