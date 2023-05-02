import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './Chef.css'
const Chef = ({chef}) => {

const {name,id,picture,
experience,num_recipes,likes} = chef;

    return (
        <Container>
        <Row className='mb-4 mt-5'>
          <Col>
          <Card className='card' style={{ width: '68rem' }}>
      <Card.Img variant="top" src={picture} className='img-fluid w-50 rounded mx-auto d-block my-3' />
      <Card.Body>
        <Card.Title className='text-center mb-4 fw-semibold fs-2'>{name}</Card.Title>
        <Card.Text className='d-flex fw-normal fs-5 justify-content-evenly'>
<p>Years of experience : {experience}</p>
<p>Number of recipes : {num_recipes}</p>
<p><small>Likes : {likes}</small></p>
        </Card.Text>
        <Button className='mx-auto my-2 d-block' variant="dark">View Recipe</Button>
      </Card.Body>
    </Card>
          </Col>
        </Row>
      </Container>
    );
};

export default Chef;