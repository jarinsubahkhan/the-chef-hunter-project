
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './Chef.css'
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

const Chef = ({chef}) => {

const {name,id,picture,
experience,num_recipes,likes} = chef;


    return (
        <Container>
            
        <Row className='mb-4 mt-5'>
          <Col>
          <Card className='card' style={{ width: '68rem' }}>
      <Card.Img variant="top" src={picture} className='img-fluid w-50 rounded mx-auto d-block my-3 lazy-img' loading='' />
      <Card.Body>
        <Card.Title className='text-center mb-4 fw-semibold fs-2'>{name}</Card.Title>
        <Card.Text className='d-flex fw-normal fs-5 justify-content-evenly'>
<p>Years of experience : {experience}y</p>
<p>Number of recipes : {num_recipes}</p>
<p> <FaHeart></FaHeart> {likes}</p>
        </Card.Text>
        <Link to={`/chefs/${id}`}>
        <Button className='mx-auto my-2 d-block' variant="dark">View Recipe</Button>
        </Link>
        
      </Card.Body>
    </Card>
          </Col>
        </Row>
      </Container>
    );
};

export default Chef;