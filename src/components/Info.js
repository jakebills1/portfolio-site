import React from 'react';
import { Icon, } from 'semantic-ui-react';
const Info = ({ styles, }) => {

  return (
    <div style={styles.InfoContainer}>
      <div style={styles.summary}>My name is Jake Bills and I am a web developer in the Salt Lake City, Utah area. I build beautiful, functional web applications primarily using <Icon name="diamond" color="red" />Ruby on Rails and <Icon name="react" color="teal" />React but I am exciting to continue learning new technologies and techniques. I am actively seeking work, both freelance and full-time.</div>
      <div style={styles.resume}>
        <div style={styles.ResumeHeader}>Education: </div>
        <br/>
        <div style={styles.ResumeText}><strong>University of Utah Professional Education</strong>, Web Development Certificate, Spring 2019</div>
        <div style={styles.ResumeText}><strong>Dev Point Labs</strong>, Full-time Web Development Bootcamp, Spring 2019</div>
        <div style={styles.ResumeText}><strong>University of Utah</strong>, Bachelors of Music, Spring 2015</div>
        <br/>
        <div style={styles.ResumeHeader}>Experience: </div>
        <br/>
        <div style={styles.ResumeText}><strong>Samar Audio Design</strong>, Technician, 2017 to Present</div>
        <div style={styles.ResumeText}><strong>School Of Rock</strong>, Private Instructor, 2012 to Present</div>
        <div style={styles.ResumeText}><strong>Freelance Musician</strong>, Performer, 2012 to Present</div>
        <br/>
        <div style={styles.ResumeHeader}>Projects: </div>
        <br/>
        <div style={styles.ResumeText}><strong><a style={{color: "black", textDecoration: "underline"}} href="https://github.com/jakebills1/query">Query</a></strong>, Quiz App, 2019</div>

      </div>
      <div style={styles.ButtonContainer}>
        <div style={styles.button}>
          <div><a href="mailto:jakebills1@gmail.com" style={{ color: "white" }} >Email me</a></div>
        </div>
      </div>
    </div>
  )
}

export default Info;