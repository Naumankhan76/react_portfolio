import React, { useRef, useState } from "react";
import myImage from "../img/myImage.png";
import mydp from "../img/pic.jpg";
import testimoniali from "../img/testimonials-2.jpg";
import testimoniali2 from "../img/testimonials-1.jpg";
import testimoniali3 from "../img/testimonial3.jpg";
import website from "../img/laptop.png";
import server from "../img/server.png";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import $ from "jquery";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "../../node_modules/swiper/swiper.scss";

import "../../node_modules/swiper/components/pagination/pagination.scss"

// Import my scss file

import SwiperCore, {
  Autoplay
} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);
























class testimonials extends React.Component {
  constructor() {
    super();
    this.state = {
      testimonialp : testimoniali,
      testimonialpg : testimoniali2,
      testi3 : testimoniali3
    };
  }

  render() {
    return (






 <section id="testimonials" className="testimonials section-bg,about-mf sect-pt4 route">
        
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <h5 className="title-left">Testimonial</h5>
                  <div className="row">
                  <div className="title-box-2">
                      </div>
                        <div className="title-box-2">
                          </div>


                      
      <>
      <Swiper
     
     slidesPerView={1}
      spaceBetween={30} centeredSlides={true} autoplay={{
        "delay": 2500,
        "disableOnInteraction": false
      }} pagination={{
      
      "clickable": true 
      }} navigation={true} className="mySwiper"
      
    >
            <SwiperSlide>
                  <div class="testimonial-item" data-aos="fade-up" data-aos-delay="300">
            <p>
              <i class="bx bxs-quote-alt-left quote-icon-left"></i> "I loved this developer. He is very cooperative. He communicates well and will revise until the job is done correctly. I will definitely use his services again."
              labore illum veniam.
              <i class="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <img 
                src={this.state.testimonialpg} 
                class="testimonial-img" 
                alt=""/>
            <h3>Paula Griffith</h3>
            <h4>Grief Coach</h4>
            <div className="title-box-2">
                      </div>
          </div>
          </SwiperSlide>
      <SwiperSlide>
      
      <div class="testimonial-item" data-aos="fade-up">
            <p>
              <i class="bx bxs-quote-alt-left quote-icon-left unselectable"></i> "I would hire and will hire again. Give him a try."
              <i class="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <img 
                src={this.state.testimonialp} 
                class="testimonial-img" 
                alt=""/>
           
            <h3>Anthony Clancy</h3>
            <h4>CEO &amp; Founder Direct DVD Concepts, LLC</h4>

            <div className="title-box-2">
                      </div>

          </div>
          
      </SwiperSlide>
      <SwiperSlide>
      <div class="testimonial-item" data-aos="fade-up" data-aos-delay="400">
            <p>
              <i class="bx bxs-quote-alt-left quote-icon-left"></i> "Excellent work and faster than my expected turnaround time."
              
              <i class="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <img 
                src={this.state.testi3} 
                class="testimonial-img" 
                alt=""/>
            <h3>Jason Carpenter</h3>
            <h4>Law Officer</h4>
            <div className="title-box-2">
                      </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
      <div class="testimonial-item" data-aos="fade-up" data-aos-delay="100">
            <p>
              <i class="bx bxs-quote-alt-left quote-icon-left"></i> "The guy has amazing communication skills and really honest with what he does."
              <i class="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <img 
                src={this.state.testimonialp} 
                class="testimonial-img" 
                alt=""/>
            <h3>H Virk</h3>
            <h4>CEO EasyMED</h4>
            <div className="title-box-2">
                      </div>
          </div>
      </SwiperSlide>



      <SwiperSlide>
      <div class="testimonial-item" data-aos="fade-up" data-aos-delay="200">
            <p>
              <i class="bx bxs-quote-alt-left quote-icon-left"></i> "Nauman is really a hard working person. I am fully satisfied with my project. He suggest some thing which i didn't even think of. 100% Recommended"
              <i class="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <img 
                src={this.state.testimonialp} 
                class="testimonial-img" 
                alt=""/>
            <h3>Litte J</h3>
            <h4>Store Owner</h4>
            <div className="title-box-2">
                      </div>
          </div>
      </SwiperSlide>
    </Swiper>
</>


        
  
    




 















                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    );
    
  }
}


export default testimonials;



