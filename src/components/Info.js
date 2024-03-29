import React from "react";
import Projects from "./Projects";
import { useWindowWidth } from "../hooks/useWindowWidth";
const Info = () => {
  const width = useWindowWidth();
  return (
    <div className="infoContainer">
      <h2>Biography</h2>
      <div className="summary">
        My name is Jake Bills and I am a web developer in the Salt Lake City,
        Utah area. I build web applications primarily using Ruby on Rails and
        React but I am very interested in adding new languages and techniques to
        my repertoire. I am currently seeking employment opportunities in a
        development role.
        <br />
        <br />
        I became interested in programming while in college pursuing my degree
        in music. I took a music technology course, where I was introduced to
        the principles of programming through a code-based synthesis program.
        After that, I dabbled in various languages and online courses before
        deciding to make the commitment to attend DevPoint Labs, a coding
        bootcamp from which I graduated in Spring of 2019.
        <br />
        <br />
        My final project there was Query, an education focused app where
        students can take quizzes created by teachers. My experience working on
        that app taught me a lot about teamwork, the Agile development
        philosophy, SQL queries, custom controller actions in Rails, and dynamic
        forms and state management in React.
        <br />
        <br />
        My current goal is to build my skillset through freelance projects and
        contributing to open source projects, with the intention of obtaining a
        developer position with a great company.
      </div>
      <Projects />
      <div className="buttonContainer">
        <div className={width > 500 ? "button" : "mobileButton"}>
          <div>
            <a href="mailto:jakebills1+personal-site@gmail.com">Email me</a>
          </div>
        </div>
        <div className={width > 500 ? "button" : "mobileButton"}>
          <div>
            <a href="https://drive.google.com/file/d/1DL0UWE3HbKZCjIUx_SSfx9S2YMJiSWQO/view?usp=sharing">
              Full Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
