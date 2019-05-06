import React from 'react';
import profile from '../assets/Jake_Bills.jpeg';
import { Image, } from 'semantic-ui-react';
const CircleImage = () => {
  return (
    <div style={styles.circleContainer}>
      <img src={profile} style={styles.pic} />
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
  },
  pic: {
    display: "inline",
    margin: "0 auto",
    marginLeft: "-25%",
    height: "100%",
    width:"auto",
  }
}
