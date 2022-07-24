exports.createPages = async ({ graphql, actions }) => {
  const postsPerPage = parseInt(process.env.GATSBY_POST_PER_PAGE) || 10;
  const singleBlogTemplate = require.resolve('./src/templates/single-blog.js');
  const blogListTemplate = require.resolve('./src/templates/blog-list.js');
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityBlog {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `);
  const blogs = result.data.allSanityBlog.nodes;

  //   single blog page
  blogs.forEach((blog) => {
    createPage({
      path: `/summary/${blog.slug.current}`,
      component: singleBlogTemplate,
      context: { id: blog.id },
    });
  });
  // blogs paginated pages
  const totalBlogListPages = Math.ceil(blogs.length / postsPerPage);
  Array.from({ length: totalBlogListPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/summary` : `/summary/${index + 1}`,
      component: blogListTemplate,
      context: {
        limit: postsPerPage,
        offset: index * postsPerPage,
        numberOfPages: totalBlogListPages,
        currentPage: index + 1,
      },
    });
  });
};
