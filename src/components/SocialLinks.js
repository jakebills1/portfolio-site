import React from "react";
import { Icon, } from 'semantic-ui-react';
const SocialLinks = () => {
  return (
    <div>
        <Icon name="facebook" link to="https://www.facebook.com/jake.bills.5" size="big" inverted />
        <Icon name="github" link to="https://github.com/jakebills1" size="big" inverted />
        <Icon name="linkedin" link to="https://www.linkedin.com/in/jakebills1/" size="big" inverted />
        <Icon name="instagram" link to="https://www.instagram.com/jakebillsmusic/" size="big" inverted />
        <Icon name="twitter" link to="https://twitter.com/jakeduck4" size="big" inverted />
    </div>
  )
}
export default SocialLinks;