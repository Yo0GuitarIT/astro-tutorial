
import React from 'react';
import Social from '@/components/Social';

const Footer: React.FC = () => {
  const footerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '1rem',
    marginTop: '2rem',
  };

  return (
    <footer style={footerStyle}>
      <Social platform="github" username="Yo0GuitarIT" />
      <Social platform="twitter" username="Yo0GuitarIT" />
      <Social platform="linkedin" username="Yo0GuitarIT" />
    </footer>
  );
};

export default Footer;
