import React from 'react';
import { Link } from 'gatsby'
const MoreInfo = ({ toggle, styles, }) => {
  return (
    <>
    <Link to="/resume">
      <div style={styles.button}>
        <div style={styles.text}>Learn More</div>
      </div>
    </Link>
    </>
  )
}
export default MoreInfo;
