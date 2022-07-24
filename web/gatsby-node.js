exports.createPages = async ({ graphql, actions }) => {
  const singleBlogTemplate = require.resolve('./src/templates/single-blog.js');
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
};
