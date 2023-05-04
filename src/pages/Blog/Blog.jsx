import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const Blog = () => {
    return (
      <Container className='mt-5 mb-5'>

<Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>1. Tell us the differences between uncontrolled and controlled components.</Accordion.Header>
        <Accordion.Body>
        In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>2. How to validate React props using PropTypes</Accordion.Header>
        <Accordion.Body>
        App.propTypes is used for props validation in react component.
        PropTypes.any : The prop can be of any data type.
PropTypes.bool : The prop should be a Boolean.
PropTypes.number : The prop should be a number.
PropTypes.string : The prop should be a string.
PropTypes.func : The prop should be a function.
PropTypes.array : The prop should be an array.
         </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>
        Tell us the difference between nodejs and express js.
        </Accordion.Header>
        <Accordion.Body>
        Node.js is a platform for building the i/o applications which are server-side event-driven and made using JavaScript whereas Express.js is a framework based on Node.js which is used for building web-application using approaches and principles of Node.js event-driven architecture.
         </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>
        What is a custom hook, and why will you create a custom hook?
        </Accordion.Header>
        <Accordion.Body>
        In React, a custom hook is a function that allows you to reuse stateful logic across different components.A custom hook is created by extracting stateful logic from a component into a reusable function that can be called in other components.You might want to create a custom hook to simplify the logic of a complex component or to share common functionality across multiple components.
         </Accordion.Body>
      </Accordion.Item>

    </Accordion>

      </Container>
    );
};

export default Blog;