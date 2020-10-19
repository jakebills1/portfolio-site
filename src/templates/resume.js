import React from 'react'
import { graphql } from "gatsby";

export default ({
  data
}) => {
  const { markdownRemark: { html }} = data;
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export const query = graphql `
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
    }
  }
`