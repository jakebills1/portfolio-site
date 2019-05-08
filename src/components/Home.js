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
  },
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  button: {
    width: "25%",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    marginBottom: "10px",
  },
  text: {
    color: "white"
  }
}


