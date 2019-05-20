import React from 'react';
import page1 from '../assets/page1.jpg';
import page2 from '../assets/page2.jpg';
import {Image, } from 'semantic-ui-react';
const Resume = () => {
  return (
    <>
      <Image src={page1} /> 
      <Image src={page2} style={styles.img} /> 
    </>
  );

}
export default Resume;
const styles = {
  img: {
    marginTop: "-49px",
  }
}
