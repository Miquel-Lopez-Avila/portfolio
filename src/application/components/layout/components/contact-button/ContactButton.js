import React from 'react';
import { useRouter }                                   from 'next/router';
import { Button, PaperPlane, Wrapper }                 from './ContactButton.styled';

const ContactButton = () => {
  const { pathname } = useRouter();

  return (
    <Wrapper hideButton={pathname === '/contact'}>
      <Button href="/contact" type={'lightSecondary'} backgroundColorSecondary>
        <span>Envianos un mensaje</span> <PaperPlane />
      </Button>
    </Wrapper>
  );
};

export default ContactButton;
