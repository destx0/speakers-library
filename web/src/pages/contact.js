import React from 'react';
import PageSpace from '../components/PageSpace';
import { SectionTitle } from '../components/typography/Title';
import { contactStyles } from '../styles/contactStyles';
import { socialLinks } from '../constants/socialLinks';

function contact() {
  return (
    <PageSpace>
      <div className="container">
        <contactStyles>
          <SectionTitle className="title">Contact Us</SectionTitle>

          <ul className="socialList">
            {socialLinks.map((item) => (
              <li key={item.name}>
                <a href={item.url}>{item.icon}</a>
              </li>
            ))}
          </ul>
        </contactStyles>
      </div>
    </PageSpace>
  );
}

export default contact;
