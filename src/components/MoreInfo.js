import React from "react";
const MoreInfo = ({ toggle, styles }) => {
  return (
    <>
      <div style={styles.button} onClick={toggle}>
        <div style={styles.text}>Learn More</div>
      </div>
    </>
  );
};
export default MoreInfo;
