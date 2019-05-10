import React, { useState, } from 'react';
import CircleImage from './CircleImage';
import SocialLinks from './SocialLinks';
import MoreInfo from './MoreInfo'
import Info from './Info';
const Home = () => {
  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);
  return (
    <div style={styles.container}>
      <h1 style={styles.hero}>Jake Bills | Web Developer</h1>
      <CircleImage />
      { show ? <Info styles={styles} /> : <MoreInfo toggle={toggle} styles={styles}/>}
      <SocialLinks />
    </div>
  )
}
export default Home;

const styles = {
  hero: {
    fontSize: "50px",
    color: "white",
  },
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "auto",
    justifyContent: "center",
    backgroundColor: "black",
  },
  button: {
    width: "25%",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginBottom: "10px",
    color: "white",
  },
  text: {
    color: "black"
  },
  resume: {
    fontSize: "1.5em",
    marginBottom: "40px",
  },
  ResumeText: {
    fontSize: "0.75em",
    color: "white",
  },
  InfoContainer: {
    display: "flex",
    flexDirection: "column",
  },
  ButtonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  summary: {
    fontSize: "1.5em",
    marginBottom: "40px",
    color: "white",
  },
  ResumeHeader: {
    fontWeight: "bold",
    color: "white",

  },
  ListContainer: {
    display: "flex",
    flexDirection: "column",
  },
  ListItem: {
    fontSize: "0.75em",
    color: "white",
  }
}


