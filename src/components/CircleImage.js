import React from 'react';
import profile from '../assets/Jake_Bills_2.jpeg';
const CircleImage = () => {
  return (
    <div style={styles.circleContainer} >
    
    </div>
  )

}

export default CircleImage;

const styles = {
  circleContainer: {
    height: "200px",
    width: "200px",
    position: "relative",
    overflow: "hidden",
    borderRadius: "50%",
    border: "5px solid white",
    marginBottom: "10px",
    backgroundImage: `url(${profile})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  pic: {
    display: "inline",
    margin: "0 auto",
    marginLeft: "-25%",
    height: "100%",
    width: "auto",
  }
}
