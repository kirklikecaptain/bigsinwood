import React from 'react';
import styled from 'styled-components';

const ContactPage = () => {
  return (
    <StyledContactPage>
      <h4>Contact BIG SIN WOOD</h4>
      <p>
        Fill out our contact form or send us an email at{' '}
        <a href='mailto:info@bigsinwood.com'>info@bigsinwood.com</a>
      </p>
      <iframe
        src='https://docs.google.com/forms/d/e/1FAIpQLScUEH47V54qotFmt7FpnDjkGIRYrVWLsy33pwPnTvWOuFFWrQ/viewform?embedded=true'
        frameBorder='0'
        title='Contact Big Sin Wood'
      />
    </StyledContactPage>
  );
};

export default ContactPage;

const StyledContactPage = styled.div`
  iframe {
    margin: 0;
    display: block;
    width: 600px;
    max-width: 100%;
    height: 1000px;
  }
`;
