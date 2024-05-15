
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="December 2023 - February 2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          I finished an online course focused on web development      </h3>
          <p>
            Major Focus: 
            Html,Css,JavaScript,Reactjs,  Web Development, Front End
            Development
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="September 2023 - November 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          I completed an internship at SiliconTechNepal, specializing in developing mobile applications
          </h3>

          <p>
            Major Focus: Flutter,Dart,Statemanagement,Firebase,ApiHandling
           
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            BScCSIT from Kathmandu College Of Technology, Lokanthali,Bhaktapur
          </h3>
          <p>Developed Realworld ChatApplication JiffyChat.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Projects</h3>

          <p style={{ background: "#fff", padding: "15px", borderRadius: "5px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", marginBottom: "20px" }}>
            <strong>React Todo App</strong>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li style={{ marginBottom: "10px" }}>
                Live Deployed Link: <a href="https://todoapp-using-react-dkk88ai93-paudelroshan264s-projects.vercel.app/" target="_blank" style={{ color: "#3498db", textDecoration: "none" }}>https://todoapp-using-react-dkk88ai93-paudelroshan264s-projects.vercel.app//</a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                Github: <a href="https://github.com/rohit4545454545/TODOAPP-using-REACT" target="_blank" style={{ color: "#3498db", textDecoration: "none" }}>https://github.com/rohit4545454545/TODOAPP-using-REACT</a>
              </li>
            </ul>
          </p>

          <p style={{ background: "#fff", padding: "15px", borderRadius: "5px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", marginBottom: "20px" }}>
            <strong>Kathmandu Pizza Food Site</strong>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li style={{ marginBottom: "10px" }}>
                Live Deployed Link: <a href="https://pizzas-website-omega.vercel.app/" target="_blank" style={{ color: "#3498db", textDecoration: "none" }}>https://pizzas-website-omega.vercel.app/</a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                Github: <a href="https://github.com/rohit4545454545/Pizzas-website" target="_blank" style={{ color: "#3498db", textDecoration: "none" }}>https://github.com/rohit4545454545/Pizzas-website</a>
              </li>
            </ul>
          </p>

          <p style={{ background: "#fff", padding: "15px", borderRadius: "5px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", marginBottom: "20px" }}>
            <strong>Nike Brand Page Using React Js</strong>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li style={{ marginBottom: "10px" }}>
                Live Deployed Link: <a href="https://nike-shoe-web-app.vercel.app/ " target="_blank" style={{ color: "#3498db", textDecoration: "none" }}>https://nike-shoe-web-app.vercel.app/</a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                Github: <a href="https://github.com/rohit4545454545/nike-shoe-web-app" target="_blank" style={{ color: "#3498db", textDecoration: "none" }}> https://github.com/rohit4545454545/nike-shoe-web-app</a>
              </li>
            </ul>
          </p>

          <p style={{ background: "#fff", padding: "15px", borderRadius: "5px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", marginBottom: "20px" }}>
            <strong>Other Projects and some flutter project is in GitHub and Gitlab</strong></p>
            <br />
            <p>
           Gitlab:<a href="https://gitlab.com/paudelroshan264" target="_blank" style={{ color: "#3498db", textDecoration: "none" }}>https://gitlab.com/paudelroshan264</a>
          </p>
          <p>
            Github: <a href="https://github.com/rohit4545454545/   " target="_blank" style={{ color: "#3498db", textDecoration: "none" }}>https://github.com/rohit4545454545/</a>
          </p>
</VerticalTimelineElement>
      </VerticalTimeline>
      
    </div>
  );
}

export default Experience;
