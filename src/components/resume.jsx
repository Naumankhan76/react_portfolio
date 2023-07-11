import React from "react";
import myImage from "../img/myImage.png";
import logo2 from "../img/pic.jpg";

class Resume extends React.Component {
  constructor() {
    super();
    
  
  }

  render() {
    return (
      
      <section id="about" className="about-mf sect-pt4 route">
        
        <div className="container">
          <div className="row">
            
            <div className="col-sm-12">
              <div className="box-shadow-full">

              <section id="resume" class="resume">
                <div className="row">
                    <div class="container">
                              <div class="section-title">
                                   <h5 className="title-left" >Resume</h5>

        <div
                        className="about-img"
                        style={{ textAlign: "center" }}
                      >
                        <img
                          className="img-fluid rounded b-shadow-a"
                          alt=""
                        />
                      </div>

          

        </div>
        </div>
        <div class="row">
          
          <div class="col-lg-6" data-aos="fade-up">

            

            <h3 class="resume-title">Education</h3>
            <div class="resume-item">
              <h4>BIIT, PMAS Universty</h4>
              <h5>2014 - 2018</h5>
              <p><em>Bachelor of Science in Computer Science, Rawalpindi</em></p>
              <p>Computer Science, Elective and Selective Courses</p>
            </div>
            <div class="resume-item">
              <h4>F.G Liaquat Ali Degree College</h4>
              <h5>2011 - 2013</h5>
              <p><em>Intermediate in Comouter Science, Rawalpindi</em></p>
              <p>Computer Science, Physics, Maths</p>
            </div>
            <div class="resume-item">
              <h4>F.G Sir Syed Boys Secondary School</h4>
              <h5>2009 - 2011</h5>
              <p><em>Matriculation in Computer Science, Rawalpindi</em></p>
              <p>Computer Science, Physics, Chemistry, Maths</p>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 class="resume-title">Professional Experience</h3>
            <div class="resume-item">
              <h4>FELICIA PARIS</h4>
              <h5>Dec 2022 - March 2023</h5>
              <p><em>Freelance, United Kingdom</em></p>
              <ul>
                <li> I created numerous ad campaigns and developed SEO strategies to generate sales and bring more customers. </li>
              </ul>
            </div>
            <div class="resume-item">
              <h4>Upwork</h4>
              <h5>2019 - Present</h5>
              
              <ul>
                <li>Providing solutions to people around the world in the domain of digital marketing.</li>
              </ul>
            </div>
            <div class="resume-item">
              <h4>Fiverr</h4>
              <h5>2019 - Present</h5>
              
              <ul>
                <li>Providing solutions to people around the world in the domain of digital marketing.</li>
              </ul>
            </div>


            
          </div>
        </div>
      </div>
    </section>








              </div>
              </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
