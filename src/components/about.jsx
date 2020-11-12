import React from "react";
import myImage from "../img/myImage.png";


class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", 
          content: "HTML5", 
          porcentage: "100%", 
          value: "100" },
        { id: "CSS3_skill", 
          content: "CSS3", 
          porcentage: "100%", 
          value: "100" },
        {
          id: "ReactJs_skill",
          content: "ReactJs",
          porcentage: "90%",
          value: "90"
        },
        { id: "NodeJs_skill", 
          content: "NodeJs", 
          porcentage: "70%", 
          value: "70" },
        {
          id: "Javascript_skills",
          content: "Javascript(ES6+)",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "Redux_skill",
          content: "Redux",
          porcentage: "75%",
          value: "75"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "I am a software developer student at Business College Helsinki pursuing the Full Stack Web Developer Program."
        },
        {
          id: "second-p-about",
          content:
            "I develop web applications and I am skilled in CSS3, HTML5, Javascript, ReactJs, NodeJs, Redux and MongoDB."
        },
        {
          id: "third-p-about",
          content:
            "I develop desktop application using C#."
        }

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
                <div className="row">
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
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                    <a href="https://gitconnected.com/ebou-touray/resume" download rel="noopener noreferrer" target="_blank">
                     Click here to download my CV.</a>
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
