import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Card.css"

function MemeCard(props) {
  const navigate = useNavigate();
  return (
    <Card className="meme-card text-white bg-dark border-0 shadow-lg rounded-lg position-relative mb-5">
      <Card.Img variant="top" src={props.imgsrc} className="rounded-top" />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title className="text-center mb-4 display-6 fw-bold" style={{ fontSize: '1.5rem' }}>
          {props.title}
        </Card.Title>
        <div className="d-flex justify-content-center">
          <Button
            onClick={(e) => navigate(`/create?imgsrc=${props.imgsrc}`)}
            variant="outline-danger"
            className=" fw-bold py-2 shadow-sm"
            style={{
              borderRadius: '10px',
              width: '50%',
              fontSize: "0.9rem"
            }}
          >
            Create Meme
          </Button>
        </div>
      </Card.Body>
      <div className="white-shadow"></div>
    </Card>
  );
}

export default MemeCard;