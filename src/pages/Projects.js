import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

const Projects = () => {
  return (
    <div className="experience">
    <VerticalTimeline lineColor="#3e497a">


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
              Live Deployed Link: <a href="https://todoapp-using-react-dkk88ai93-paudelroshan264s-projects.vercel.app/" target="_blank" style={{ color: "#3498db", textDecoration: "none" }}>https://react-todolist-liard.vercel.app/</a>
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
              Live Deployed Link: <a href="https://nike-shoe-web-app.vercel.app/ " target="_blank" style={{ color: "#3498db", textDecoration: "none" }}>https://nike-shoe-web-app.vercel.app/ </a>
            </li>
            <li style={{ marginBottom: "10px" }}>
              Github: <a href="https://github.com/rohit4545454545/nike-shoe-web-app" target="_blank" style={{ color: "#3498db", textDecoration: "none" }}>https://github.com/rohit4545454545/nike-shoe-web-app</a>
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
  )
}

export default Projects