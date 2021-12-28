import React from "react";
import { Icon } from "semantic-ui-react";
import { useWindowWidth } from "../hooks/useWindowWidth";
const SocialLinks = () => {
  const width = useWindowWidth();
  return (
    <div className={width > 500 ? "" : "mobileSocialLinks"}>
      {/* <a
        href="https://www.facebook.com/jake.bills.5"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="facebook" size="big" color="black" />
      </a> */}
      <a
        href="https://www.github.com/jakebills1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="github" size="big" color="black" />
      </a>
      <a
        href="https://www.linkedin.com/in/jakebills1/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="linkedin" size="big" color="black" />
      </a>
      {/* <a
        href="https://www.instagram.com/jakebillsmusic/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="instagram" size="big" color="black" />
      </a>
      <a
        href="https://twitter.com/jakeduck4"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="twitter" size="big" color="black" />
      </a> */}
    </div>
  );
};
export default SocialLinks;
