import styled from 'styled-components';

export const CategoryItemStyles = styled.div`
  background: var(--orange);
  padding: 1.5rem;
  border-radius: 12px;
  /* box-shadow: var(--orange) 0px 30px 90px; */
  box-shadow: rgba(103, 25, 204, 0.267) 0px 4px 16px,
    rgba(105, 51, 206, 0.493) 0px 8px 32px;
  .title {
    /* margin-bottom: 1rem; */
    color: var(--black-2);
  }
  .text {
    margin-bottom: 2rem;
  }
`;
