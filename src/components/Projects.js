import React from "react";
const Projects = () => {
  return (
    <div className="projectsContainer">
      <h2>Projects</h2>
      <div className="project">
        <h3>Query</h3>
        <p className="projectSummary">
          An app for educators to make quick quizzes and have their students
          take them, to assess learning retention after lectures.
        </p>
        <ul className="projectFeatures">
          <li>Dynamic form-based user experience</li>
          <li>
            Custom backend routes to group quizzes based on different criteria
          </li>
          <li>
            Student's quizzes automatically graded on backend for instant
            feedback
          </li>
          <li>Customizable user accounts</li>
        </ul>
        <p className="projectLinks">
          <a href="https://query-dpl.herokuapp.com/">View App </a> |
          <a href="https://github.com/jakebills1/query"> View Code</a>
        </p>
      </div>
      <hr />
      <div className="project">
        <h3>Dan Bills' Guitars Landing Page</h3>
        <p className="projectSummary">
          The landing page for Dan Bills' Guitars, a custom guitar company.
        </p>
        <ul className="projectFeatures">
          <li>Responsive photo gallery</li>
          <li>
            Password-protected admin panel for business owner to manage
            displayed inventory and receive client communication
          </li>
          <li>Drag and Drop multi-upload of photos to cloud server</li>
        </ul>
        <p className="projectLinks">
          <a href="https://whispering-anchorage-26927.herokuapp.com/">
            View App{" "}
          </a>{" "}
          |
          <a href="https://github.com/jakebills1/dan_bills_guitars">
            {" "}
            View Code
          </a>
        </p>
      </div>
      <hr />
      <div className="project">
        <h3>Charts</h3>
        <p className="projectSummary">
          An app for musicians to view and search their charts and lead sheets
        </p>
        <ul className="projectFeatures">
          <li>
            Drag and Drop upload feature, which attempts to pull title and
            artist name from filename
          </li>
          <li>
            Searches can be performed by name, artist name, genre, or associated
            group
          </li>
          <li>Pdf viewer</li>
          <li>Users can group charts into setlists</li>
        </ul>
        <p className="projectLinks">
          Coming Soon! |{" "}
          <a href="https://github.com/jakebills1/charts">View Code</a>
        </p>
      </div>
    </div>
  );
};
export default Projects;
