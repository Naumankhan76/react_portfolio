import React from "react";
import myImage from "../img/myImage.png";
import mydp from "../img/pic.jpg";
import mobile from "../img/smartphone.png";
import website from "../img/laptop.png";
import server from "../img/server.png";

class Services extends React.Component {
  constructor() {
    super();
    this.state = {
      mobile1 : mobile,
      website1 : website,
      server1 : server
    };
    
    
  }

  render() {
    return (
      
      <section id="services" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <h5 className="title-left">Services</h5>
                  <div className="row">



                  <div className="title-box-2">
                    
                    </div>
                    <div className="title-box-2">
                    
                    </div>
















                  <section id="services" class="services">
      <div class="container aos-init aos-animate" data-aos="fade-up">

        <div class="section-title">
          
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box iconbox-blue">
              <div className="icon">
                <img 
                src={this.state.mobile1} 
                class="img-fluid" 
                alt=""/>
              </div>
              <h4>Social Media Marketing</h4>
              <p>Social media marketing strategies, Product promotion</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box iconbox-blue">
              <div class="icon">
              <div className="icon">
                <img 
                src={this.state.website1} 
                class="img-fluid" 
                alt=""/>
              </div>
              </div>
              <h4>Search Engine Optimization</h4>
              <p>On page SEO, Off page SEO, Technical SEO</p> 
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box iconbox-blue">
              <div class="icon">
              <img 
                src={this.state.server1} 
                class="img-fluid" 
                alt=""/>
              </div>
              <h4>Ad Campaigns</h4>
              <p style={{fontFamily: "sans-serif"}}>Google Ads, Facebook Ads, Instagram Ads</p>
            </div>
          </div>



        

        </div>

      </div>
</section>




{/* 1st*/}


{/* 2nd*/}

                  
{/* 3rd*/}

 
{/* 4th*/}              
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
