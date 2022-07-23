import React from 'react';
import FeaturedBlogs from '../components/homepage/FeaturedBlogs';
import HeroSection from '../components/homepage/HeroSection';
import TopCategories from '../components/homepage/TopCategories';
import SEO from '../components/SEO';

const IndexPage = () => (
  <>
    <SEO />
    <HeroSection />
    <div className="container">
      <TopCategories />
      <FeaturedBlogs />
    </div>
  </>
);

export default IndexPage;
