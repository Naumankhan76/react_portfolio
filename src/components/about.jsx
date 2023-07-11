import React from "react";
import mydp from "../img/pic.jpg";


class About extends React.Component {
  constructor() {
    super();

    this.state = {
      mydp: mydp
    };
    
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "ON PAGE SEO", porcentage: "90%", value: "90" },
        { id: "CSS3_skill", content: "OFF PAGE SEO", porcentage: "90%", value: "90" },
        {
          id: "JavaScript_skill",
          content: "TECHNICAL SEO",
          porcentage: "80%",
          value: "80"
        },
        { id: "PHP_skill", content: "SEM", porcentage: "75%", value: "75" },
        {
          id: "ReactJS_skill",
          content: "SMM",
          porcentage: "85%",
          value: "85"
        },
        {
          id: "Python_skill",
          content: "GOOGLE ADS",
          porcentage: "75%",
          value: "75"
        },
        {
          id: "VanillaJS_skill",
          content: "AD DESIGNS",
          porcentage: "85%",
          value: "80"
        },
        {
          id: "Wordpress_skill",
          content: "WORDPRESS",
          porcentage: "90%",
          value: "90"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "A tech enthusiast offering expertise in digital marketing and web development. Seeking for clients and companies where i can utilize my skills and knowledge and experience in the field of internet marketing. Committed to project deadlines and capable of thinking “outside box.” Strong decision-maker. Ready to work closely with teams and customers to identify most efficient and beneficial solutions for process improvement."
        },
        {
          id: "second-p-about",
          content:
            "I am a self-motivated hardworking individual who loves challenging and interesting work assignments. I believe in positive attitude and willingness to give 100 percent. I enjoy working individually as well as with people in a team."        
},
        
      ]
    };
  }

  render() {
    return (
      
      <section id="about" className="about-mf sect-pt4 route">
        
        <div className="container">
          <div className="row">
            
            <div className="col-sm-12">
              <div className="box-shadow-full">
              <h5 className="title-left">About</h5>
                <div className="row">


                <div className="col-md-6" >

                
                  
                  <div className="about-me pt-4 pt-md-0">
                    
                    <div className="title-box-2">
                    
                    </div>
                    <div className="title-box-2">
                    
                    </div>


                    
     
            <h3 className="bold" style={{ fontFamily: "sans-serif", fontWeight: "bold",listStyleType: "none" , textAlign:"center"}}>Nauman Khan</h3>
            <div class="col-lg-4" data-aos="fade-right">
              <div class="col-lg-4" data-aos="fade-right">
              
            
          </div>
            
          </div>

              <div class="col-md-6">
              
              <ul class="content-menu-menu">
                <li style={{ fontFamily: "sans-serif",listStyleType: "none" }}> <strong>Email&nbsp;:</strong>&nbsp;Hello@naumankhan.site</li>
                <li  style={{ fontFamily: "sans-serif",listStyleType: "none" }}> <strong>Phone&nbsp;:</strong>&nbsp;+92&nbsp;308&nbsp;6467434</li>
                <li  style={{ fontFamily: "sans-serif",listStyleType: "none" }}> <strong>City&nbsp;:</strong>&nbsp;Islamabad,&nbsp;Pakistan</li>
                <li  style={{ fontFamily: "sans-serif",listStyleType: "none" }}> <strong>Freelance&nbsp;:</strong>&nbsp;Available</li>
                </ul>
                
              </div>
            
                    {this.state.about_me.map(content => {
                      return (
                        <p className="lead" key={content.id}>
                          {content.content}
                        </p>
                      );
                    })}
                  </div>
                </div>




                  <div className="col-md-6">
                    <div className="row">
                      
                      <div
                      
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
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
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                    
                  </div>
                  
                  
                
                
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
