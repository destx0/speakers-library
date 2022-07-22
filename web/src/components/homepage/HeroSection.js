import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { HeroSectionStyles } from '../../styles/homePage/HeroSectionStyles';
import ParagraphText from '../typography/ParagraphText';
import Button from '../buttons/Button';

function HeroSection() {
  return (
    <HeroSectionStyles>
      <div className="container">
        <div className="hero__wrapper">
          <div className="left">
            <h1 className="hero__heading">
              Knowledge of 100s of books in your native language
            </h1>
            <ParagraphText className="hero__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem
              ipsum dolor sit amet consectetur adipisicing elit
            </ParagraphText>
            <Button to="/blogs" tag={Link} className="hero__button">
              Explore Summeries
            </Button>
          </div>
          <div className="right">
            <StaticImage
              className="hero__image"
              src="../../images/vr-guy.jpg"
              src="https://cdn.dribbble.com/users/1410611/screenshots/6958383/media/1512c6c6df7cc31c706128020d53b4ff.jpg?"
              alt="vr guy"
              placeholder="blurred"
              objectPosition="50% 30%"
            />
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}

export default HeroSection;
