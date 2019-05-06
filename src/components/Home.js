import React from 'react';
import CircleImage from './CircleImage';
const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.hero}>Jake Bills | Web Developer</h1>
      <CircleImage />
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
  }
}
