import React from 'react'
import {Jumbotron, Container, Form, Row, Col, Button } from 'react-bootstrap'

const searchForm = () => {
return 
(
  <div>
<Jumbotron fluid className='text-light bg-dark'>
<Container>
  <h1>Search for Images!</h1>
  <Form onSubmit={handleFormSubmit}>
    <Form.Row>
      <Col xs={12} md={8}>
        <Form.Control
          name='searchInput'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type='text'
          size='lg'
          placeholder='Search for an image'
        />
      </Col>
      <Col xs={12} md={4}>
        <Button type='submit' variant='success' size='lg'>
          Submit Search
        </Button>
      </Col>
    </Form.Row>
  </Form>
</Container>
</Jumbotron>
</div>
)

}

export default searchForm