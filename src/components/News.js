import React from 'react';
import NewsStyles from '../Styles/News.module.css';
import NewsImg1 from '../assets/images/newsImg1.jpg';
import NewsImg2 from '../assets/images/newsImg2.jpg';
import NewsImg3 from '../assets/images/newsImg3.jpg';
import NewsImg4 from '../assets/images/newsImg4.jpg';

const News = () => {
  return (
    <div id="news" className={NewsStyles.main}>
      <div className={NewsStyles.card}>
         <div className={NewsStyles.cardItem}>
          <div className={NewsStyles.img}>
            <div className={NewsStyles.date}>
               <h1>26</h1>
               <p>MAY</p>
            </div>
            <img src={NewsImg1} alt='img1'></img>
          </div>
          <div className={NewsStyles.intro}>
            <h2>DONEC PHASELLUS VITAE</h2>
            <div className={NewsStyles.admin}>
            <h3>Admin <span><i class="fa fa-comments" aria-hidden="true"></i></span>15</h3>
            </div>
            <p>Volutpat taciti donec bibendum ultrices vulputate mauris ad finibus nam nullam quam. Sed ac vel quis dolor metus.</p>
          </div>
          </div>
          <div className={NewsStyles.cardItem}>
          <div className={NewsStyles.img}>
          <div className={NewsStyles.date}>
               <h1>22</h1>
               <p>MAY</p>
            </div>
          <img src={NewsImg2} alt='img2'></img>
          </div>
          <div className={NewsStyles.intro}>
            <h2>DONEC PHASELLUS VITAE</h2>
            <div className={NewsStyles.admin}>
            <h3>Admin <span> <i class="fa fa-comments" aria-hidden="true"></i></span>15</h3>
            </div>
            <p>Volutpat taciti donec bibendum ultrices vulputate mauris ad finibus nam nullam quam. Sed ac vel quis dolor metus.</p>
          </div>
          </div>
          <div className={NewsStyles.cardItem}>
          <div className={NewsStyles.img}>
          <div className={NewsStyles.date}>
               <h1>20</h1>
               <p>MAY</p>
            </div>
          <img src={NewsImg3} alt='img3'></img>
          </div>
          <div className={NewsStyles.intro}>
            <h2>DONEC PHASELLUS VITAE</h2>
            <div className={NewsStyles.admin}>
            <h3>Admin <span> <i class="fa fa-comments" aria-hidden="true"></i></span>15</h3>
            </div>
            <p>Volutpat taciti donec bibendum ultrices vulputate mauris ad finibus nam nullam quam. Sed ac vel quis dolor metus.</p>
          </div>
          </div>
          <div className={NewsStyles.cardItem}>
          <div className={NewsStyles.img}>
          <div className={NewsStyles.date}>
               <h1>15</h1>
               <p>MAY</p>
            </div>
          <img src={NewsImg4} alt='img4'></img>
          </div>
          <div className={NewsStyles.intro}>
            <h2>DONEC PHASELLUS VITAE</h2>
            <div className={NewsStyles.admin}>
            <h3>Admin <span> <i class="fa fa-comments" aria-hidden="true"></i></span>15</h3>
            </div>
            <p>Volutpat taciti donec bibendum ultrices vulputate mauris ad finibus nam nullam quam. Sed ac vel quis dolor metus.</p>
          </div>
          </div>
      </div>
    </div>
  )
}

export default News;
