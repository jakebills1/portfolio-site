import React from 'react';
import { Icon, } from 'semantic-ui-react';
const Info = ({ styles, }) => {

  return (
    <>
      <div>I am a web developer in the Salt Lake City, Utah area. I build beautiful, functional web applications primarily using <Icon name="diamond" color="red" />Ruby on Rails and <Icon name="react" color="teal" />React but I am exciting to continue learning new technologies and techniques. I am actively seeking work, both freelance and full-time.</div>
      <div style={styles.button}>
        <div><a href="mailto:jakebills1@gmail.com" style={{ color: "white"}} >Email me</a></div>
      </div>
    </>
  )
}
export default Info;