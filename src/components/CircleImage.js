import React, { useState, } from 'react';
import profile from '../assets/Jake_Bills_2.jpeg';
import Bio from './Bio';
const CircleImage = () => {
  const [showBio, setShowBio] = useState(false);
  return (
    <>
      {showBio ?
        <Bio />
        :
        <div style={styles.circleContainer} onClick={() => setShowBio(!showBio)}>
          <img src={profile} style={styles.pic} alt="profile" />
        </div>
      }
    </>
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
    border: "5px solid black",
    marginBottom: "10px"
  },
  pic: {
    display: "inline",
    margin: "0 auto",
    marginLeft: "-25%",
    height: "100%",
    width: "auto",
  }
}
