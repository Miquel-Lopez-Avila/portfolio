import React, { useState, useRef, useEffect }     from 'react';
import { Button, Container, PaperPlane, Wrapper } from './ContactButton.styled';
import useBreakpoint                              from "../../hooks/use-breakpoint";

const ContactButton = () => {
  const [isFloating, setIsFloating] = useState(false);
  const { isMobile } = useBreakpoint();
  const floatingButton = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", action);
    return () => window.removeEventListener('scroll', action);
  }, []);

  const action = () => {
    if (floatingButton.current && !isMobile) {
      const elementPosition = floatingButton.current.getBoundingClientRect().top + 500;
      const scrollPosition = window.pageYOffset;

      if (scrollPosition > elementPosition) {
        setIsFloating(true);
      } else {
        setIsFloating(false);
      }
    }
  }

  return (
    <Wrapper ref={floatingButton} isFloating={isFloating}>
      <Container>
        <Button href="/contact" isFloating={isFloating} backgroundColorSecondary>
          {isFloating ? <>Envianos un mensaje <PaperPlane /></> : 'Contactanos'}
        </Button>
      </Container>
    </Wrapper>
  );
};

export default ContactButton;
