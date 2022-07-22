import styled from 'styled-components';
import { Link } from 'gatsby';

export default styled(Link)`
  @import url('https://fonts.googleapis.com/css2?family=Splash&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Edu+VIC+WA+NT+Beginner&display=swap');

  display: inline-block;
  /* max-width: 200px; */
  ul {
    display: flex;
    /* margin: 0 0.5rem; */
    font-size: 2rem;
    align-items: center;
  }
  svg {
    font-size: 3rem;
    margin-top: 1rem;
    path {
      stroke: white;
    }
  }
  .logo__text {
    color: var(--white-1);
    font-family: 'Edu VIC WA NT Beginner', cursive;
  }
`;
// li {
//       display: inline-block;
//       margin: 0 0.5rem;
//       a {
//         display: inline-block;
//         width: 20px;
//         color: var(--gray);
//       }
//       :hover {
//         a {
//           color: var(--white-1);
//         }
//       }
//     }
