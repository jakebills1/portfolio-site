import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import styles from './circle-image.module.css'

const CircleImage = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "Jake_Bills_2.jpeg" }) {
            childImageSharp {
              fixed(width: 250, height: 250) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={(data) => (
        <div className={styles.container}>
          <Img
            fixed={data.file.childImageSharp.fixed}
            className={styles.img}
          />
        </div>
      )}
    />
  );
};

export default CircleImage;