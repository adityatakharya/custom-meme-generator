import React from 'react';
import { Spinner } from 'react-bootstrap';
import styled from 'styled-components';

// Styled component for the Preloader container
const PreloaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #000; // Optional: match your main page background
`;

const Preloader = () => (
  <PreloaderContainer>
        <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
      <Spinner animation="grow" variant="light" />
      <Spinner animation="grow" variant="dark" />
  </PreloaderContainer>
);

export default Preloader;
