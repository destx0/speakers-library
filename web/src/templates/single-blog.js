import { graphql, Link } from 'gatsby';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { format } from 'date-fns';
import { FiCalendar, FiUser } from 'react-icons/fi';
import { BiCategory } from 'react-icons/bi';

import { DiscussionEmbed } from 'disqus-react';
import { SingleBlogStyles } from '../styles/blog/SingleBlogStyles';
import SEO from '../components/SEO';
import PageSpace from '../components/PageSpace';
import { Title } from '../components/typography/Title';
import ParagraphText from '../components/typography/ParagraphText';
import MyPortableText from '../components/MyPortableText';
import FeaturedBlogs from '../components/homepage/FeaturedBlogs';

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
  // diqus
  // const PostTemplate = () => {
  // let disqusConfig = {
  //   url: `${config.siteUrl+location.pathname}`,
  //   identifier: post.id,
  //   title: post.title,
  // }

  return (
    <SingleBlogStyles>
      <SEO title={blog.title} />
      <PageSpace>
        <div className="container">
          <div className="blog-header">
            <GatsbyImage
              image={blog.coverImage.asset.gatsbyImageData}
              alt={blog.coverImage.alt}
              className="blog-cover-image"
            />
          </div>
          <Title className="title">{blog.title}</Title>
          <ParagraphText className="publishedAt">
            <FiCalendar />
            {format(new Date(blog.publishedAt), 'p, MMMM dd, yyyy')}
          </ParagraphText>
          <ParagraphText className="categoriesText">
            <BiCategory />
            <span>
              {blog.categories.map((item, index) => (
                <span key={item.slug.current}>
                  <Link to={`/categories/${item.slug.current}`}>
                    {item.title}
                  </Link>
                  {index < blog.categories.length - 1 ? ', ' : ''}
                </span>
              ))}
            </span>
          </ParagraphText>
          <ParagraphText className="author">
            <FiUser />
            <Link to={`/authors/${blog.author.slug.current}`}>
              {blog.author.name}
            </Link>
          </ParagraphText>
          <hr className="hr" />
          <div className="body">
            <MyPortableText value={blog._rawBody} />
            <hr className="hr" />
          </div>
          {/* disqus st */}
          {/* <CommentCount config={disqusConfig} placeholder="..." />
          
          <Disqus config={disqusConfig} /> */}
          {/* disqus st */}
        </div>
        <div className="container">
          <div className="s9-widget-wrapper" />
        </div>
        <div className="container">
          <FeaturedBlogs />
        </div>
      </PageSpace>
    </SingleBlogStyles>
  );
}

export default singleBlog;
