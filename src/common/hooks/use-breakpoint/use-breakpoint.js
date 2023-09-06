import { useMediaQuery } from 'react-responsive';
import { fromDesktop, fromLargeDesktop, isMobile, isTablet } from 'application/styles/breakpoints';

const useBreakpoint = () => ({
  isMobile: useMediaQuery({ query: isMobile }),
  isTablet: useMediaQuery({ query: isTablet }),
  isDesktop: useMediaQuery({ query: fromDesktop }),
  isLargeDesktop: useMediaQuery({ query: fromLargeDesktop }),
});

export default useBreakpoint;
