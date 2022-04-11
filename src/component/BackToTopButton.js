import React, { useEffect, useState } from 'react';
import KeyboardDoubleArrowUpOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowUpOutlined';

function BackToTopButton() {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {backToTop && (
        <button onClick={scrollUp} className='back-to-top-button'>
          <KeyboardDoubleArrowUpOutlinedIcon fontSize='large' />
        </button>
      )}
    </div>
  );
}

export default BackToTopButton;
