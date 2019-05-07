import React from 'react';
const Navbar = () => {

  return (
    <div style={styles.nav}>
      <div>Home</div>
      <div>Resume</div>
      <div>stuff</div>
      <div>more</div>
      <div>even more</div>
    </div>
  )
}
export default Navbar;
const styles = {
  nav: {
    height: "75px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
    

  }
}