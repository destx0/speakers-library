import { graphql } from 'gatsby';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { SingleBlogStyles } from '../styles/blog/SingleBlogStyles';
import SEO from '../components/SEO';
import PageSpace from '../components/PageSpace';

export const postQuery = graphql`
  query SingleBlogQuery($id: String!) {
    sanityBlog(id: { eq: $id }) {
      title
      publishedAt
      _rawBody
      coverImage {
        asset {
          gatsbyImageData(placeholder: DOMINANT_COLOR)
        }
        alt
      }
      categories {
        title
        slug {
          current
        }
      }
      author {
        name
        slug {
          current
        }
      }
    }
  }
`;

function singleBlog({ data }) {
  const blog = data.sanityBlog;

  return (
    <SingleBlogStyles>
      <SEO title={blog.title} />
      <PageSpace>
        <div className="container">
          <div className="blog-header">
            <GatsbyImage image={blog.coverImage.asset.gatsbyImageData} />
          </div>
        </div>
      </PageSpace>
    </SingleBlogStyles>
  );
}

export default singleBlog;
