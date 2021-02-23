import React, { Component } from "react";
import { Cell } from "react-mdl";
import { Grid } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
class About extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={10}>
            <h2 style={{ paddingTop: "2em" }}>StreamDev</h2>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              StreamDev est une startup de formation en ligne qui permet à
              chacun de se former aux compétences de demain
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>
              A 8 – 8 immeuble Golden Towers Centre Urbain Nord Tunis , 1082
              Tunisie
            </p>
            <h5>Phone</h5>
            <p>(123) 456-7890</p>
            <h5>Email</h5>
            <p>someone@example.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          {/* <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2002}
              endYear={2006}
              schoolName="My University"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />

            <Education
              startYear={2007}
              endYear={2009}
              schoolName="My 2nd University"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />

            <Experience
              startYear={2012}
              endYear={2016}
              jobName="Second Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="javascript" progress={100} />
            <Skills skill="HTML/CSS" progress={80} />
            <Skills skill="NodeJS" progress={50} />
            <Skills skill="React" progress={25} />
          </Cell> */}
        </Grid>
      </div>
    );
  }
}

export default About;
