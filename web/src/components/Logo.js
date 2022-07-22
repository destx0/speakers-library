import React from 'react';
import { FcBookmark } from 'react-icons/fc';
import LogoStyles from '../styles/LogoStyles';

function Logo() {
  return (
    <LogoStyles to="/">
      <ul>
        <li>
          <FcBookmark />
        </li>
        <li className="logo__text">Speaker's Library </li>
      </ul>
    </LogoStyles>
  );
}

export default Logo;
