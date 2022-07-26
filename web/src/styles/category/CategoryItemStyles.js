import styled from 'styled-components';

export const CategoryItemStyles = styled.div`
  display: flex;
  align-items: center;
  background: var(--secondary);
  padding: 1.5rem 0.5rem;
  border-radius: 1rem;
  background: #ff0084; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #003b94,
    #005f94
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #003b94,
    #005f94
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  /* box-shadow: var(--orange) 0px 30px 90px; */
  /* box-shadow: rgba(103, 25, 204, 0.267) 0px 4px 16px,
    rgba(105, 51, 206, 0.493) 0px 8px 32px; */
  .title {
    /* margin-bottom: 1rem; */
    color: var(--white);
    padding-left: 1rem;
  }
  .text {
    margin-bottom: 2rem;
  }
`;
