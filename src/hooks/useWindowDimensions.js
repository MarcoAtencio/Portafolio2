import { useState, useEffect } from 'react';

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window === 'object' ? window.innerWidth : undefined,
    height: typeof window === 'object' ? window.innerHeight : undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    if (typeof window === 'object') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowDimensions.width >= 992 ? 'desktop' : 'tablet';
}
