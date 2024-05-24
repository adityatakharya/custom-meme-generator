import React, { useState, useEffect } from 'react';
import MemeCard from '../components/Card';
import { getAllMemes } from '../api/mainapi';
import { Container, Row, Col, Image } from 'react-bootstrap';
import headerImage from '../assets/images/ADITYA_logo.png';
import styled, { keyframes } from 'styled-components';
import Preloader from '../components/Preloader';

// Define a keyframe animation for the gradient
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Styled component for the heading with gradient animation
const AnimatedHeading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 3rem;
  background: linear-gradient(270deg, #00ff88, #007eff, #ff00b8, #ff4700, #ffff00, #00ff00);
  background-size: 600% 600%; /* Larger range for more colors */
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ${gradientAnimation} 8s linear infinite; /* Adjusted animation duration */
  text-shadow: 0 0 8px rgba(0, 255, 136, 0.8), 0 0 16px rgba(0, 126, 255, 0.8);
  border-radius: 8px;
  justify-content: center;
`;

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const simulateDelay = async () => {
      try {
        const memes = await getAllMemes();

        setTimeout(() => {
          setData(memes.data.memes);
          setLoading(false); 
        }, 2100);
      } catch (error) {
        console.error('Error fetching memes:', error);
        setLoading(false); 
      }
    };

    simulateDelay();
  }, []);

  if (loading) {
    return <Preloader />; 
  }

  return (
    <div className="min-vh-100 bg-dark">
      <div className="text-center">
        <Image
          src={headerImage}
          fluid
          className="rounded mx-auto d-block pt-3"
          alt="Header"
          width="150"
        />
      </div>
      <hr/>
      <Container fluid className="py-3">
        <AnimatedHeading className='text-center'>Quick Meme Generator</AnimatedHeading>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {data.map((el) => (
            <Col key={el.id}>
              <MemeCard title={el.name} imgsrc={el.url} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
