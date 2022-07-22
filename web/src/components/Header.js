import { Link } from 'gatsby';
import React, { useState } from 'react';
import { MdSearch, MdMenu, MdClose } from 'react-icons/md';
import clsx from 'clsx';
import HeaderStyles from '../styles/HeaderStyles';
import { menu } from '../constants/menu';
import Logo from './Logo';
import LogoText from './LogoText';
import ActionButton from './buttons/ActionButton';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <HeaderStyles>
      <div className="container">
        <div className="header__container">
          <div className="logo">
            <Logo />
          </div>
          <div className="logo__text">
            <LogoText />
          </div>
          <div className={clsx('nav__wrapper', isNavOpen && 'open')}>
            <div className="mobileIcon">
              {/* <div className="searchIcon">
                <div className="searchIcon__wrapper">
                  <MdSearch />
                </div>
              </div> */}
              <ActionButton
                className="mobileMenuBtn"
                onClick={() => setIsNavOpen(true)}
                onKeyDown={() => setIsNavOpen(true)}
              >
                <MdMenu />
              </ActionButton>
            </div>
            {isNavOpen && (
              <div
                className="mobileNavBg"
                aria-label="close-menu"
                role="button"
                tabIndex={0}
                onClick={() => setIsNavOpen(false)}
                onKeyDown={() => setIsNavOpen(false)}
              />
            )}
            <nav>
              <ActionButton
                className="mobileMenuCloseBtn"
                onClick={() => setIsNavOpen(false)}
                onKeyDown={() => setIsNavOpen(false)}
              >
                <MdClose />
              </ActionButton>
              <ul>
                {menu.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} onClick={() => setIsNavOpen(false)}>
                      {item.title}
                    </Link>
                  </li>
                ))}
                {/* <li className="searchIcon">
                  <div className="searchIcon__wrapper">
                    <MdSearch />
                  </div>
                </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
}

export default Header;
