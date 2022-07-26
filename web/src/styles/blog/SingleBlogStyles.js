import styled from 'styled-components';

export const SingleBlogStyles = styled.div`
  max-width: 700px;
  margin: 0 auto;
  .blog-cover-image {
    height: 300px;
    margin-bottom: 2rem;
    border-radius: 2rem;
  }
  .title {
    margin-bottom: 1rem;
    font-size: 2.5rem;
  }
  .publishedAt {
    margin-bottom: 0.5rem;
  }
  .categoriesText,
  .author,
  .publishedAt,
  .buyOptions {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    svg {
      height: 20px;
      width: 20px;
    }
    a {
      color: var(--gray);
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .buyOptions {
    display: flex;
    align-items: center;
    /* justify-content: center; */
    /* padding: 3rem; */
    /* gap: 3rem; */
    color: red;
    align-items: flex-start;
    a {
      color: var(--white);
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .buy__button {
    display: flex;
  }
  .hr {
    margin: 2rem 0;
    color: var(--gray);
  }
  .body {
    margin-top: 2rem;
    h1,
    h2,
    h3,
    h4 {
      margin: 1rem 0;
    }
    .bodyImage {
      margin: 2rem 0;
    }
    .bodyCode {
      margin: 2rem 0;
      font-size: 2rem;
    }
  }
`;
