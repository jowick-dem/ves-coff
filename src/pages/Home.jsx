import React, { useEffect } from 'react';
import Banner from '../components/Banner/Banner';
import About from '../components/About/About';
import Menu from '../components/Menu/Menu';
import Gallery from '../components/Gallery/Gallery';
import Visit from '../components/Visit/Visit';

const Home = () => {
  useEffect(() => {
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    document.querySelectorAll('.fade-in-section').forEach(section => {
      observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Banner />
      <About />
      <Menu />
      <Gallery />
      <Visit />
    </>
  );
};
export default Home;
