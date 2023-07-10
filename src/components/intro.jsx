import React from "react";
import "./stars.scss";
import Typed from "react-typed";

class Intro extends React.Component {
  render() {
    return (
       //<div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <div id="home" className="intro route bg-image background">


        <div className="intro-content display-table">
          <div className="table-cell">
          
            
            <div className="conpad">
            <div className="title-box-2">
                    
                    </div>
                    <div className="title-box-2">
                    
                    </div>
                    <div className="title-box-2">
                    
                    </div>
              <h1 className="intro-title">Hello, I am Nauman Khan</h1>
              
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Digital Marketer"
                      "Search Engine Optimization",
                      "Search Engine Marketing",
                      "Social Media Marketing",
                      "Content Marketing",
                    ]}
                    typeSpeed={50}
                    backDelay={1100}
                    backSpeed={10}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">
                <a
                  className="button button-a button-big button-rouded js-scroll"
                  href="#work"
                  role="button"
                >
                  View My Work
                </a>
              </p>
            </div>
          
          </div>
          </div>
        </div>
      
    );
  }
}

export default Intro;
