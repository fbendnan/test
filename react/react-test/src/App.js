// src/App.js
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Card, Row, Col } from "react-bootstrap";

const cardData = [
  {
    title: "Card 1",
    text: "This is the first card.",
    image: "https://content.presspage.com/uploads/2170/1920_girlvolleyball.jpg?10000"
  },
  {
    title: "Card 2",
    text: "This is the second card.",
    image: "https://www.sportsexperts.ca/media/634d8f55-dc57-4de6-bde8-a2e30a6723bc/DAm5kw/Pages-categories/2025/SS/sport/250326-13-header-lifestyle-sports-assets/m-header-sport-soccer.jpg"
  },
  {
    title: "Card 3",
    text: "This is the third card.",
    image: "https://www.eusa.eu/files/News/2023/whatsup_may-team.jpg"
  },
];


function App() {
  return (
    <>
      <div className="App">

        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        </Container>
      </Navbar>

      

        <Container className="my-4">
          <h1 className="text-center mb-4">Welcome to My Cards</h1>

          <Row xs={1} md={3} className="g-4">
      {cardData.map((card, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={card.image} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>
                {card.text}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
