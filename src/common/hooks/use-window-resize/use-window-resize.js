import { useState, useLayoutEffect } from 'react';

const useWindowResize = () => {
  const [size, setSize] = useState([0, 0]);

  const updateSize = () => {
    setSize([window.innerWidth, window.innerHeight]);
  };

  useLayoutEffect(() => {
    window.addEventListener('resize', updateSize);
    window.addEventListener('scroll', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return { windowWidth: size[0], windowHeight: size[1] };
};

export default useWindowResize;
