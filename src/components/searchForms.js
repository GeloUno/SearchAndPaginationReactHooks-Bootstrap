import React from 'react'
import { Form, Button, Col } from 'react-bootstrap'

export default function searchForms({ params, onHandleSearchChange }) {   
    return (
        <Form className={'d-block m-3'}>
            <Form.Row>
                <Col md={3} xs={12} >
                    <Form.Group controlId="formSearchLocation">
        <Form.Label  >Location</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter city"
                            onChange={onHandleSearchChange}
                            name="location"
                            value={params.location}
                        />  
  </Form.Group>
                </Col>
                
<Col md={3} xs={12} >
  <Form.Group controlId="formSearchDescription">
        <Form.Label>Decription</Form.Label>
                        <Form.Control type="text " placeholder="Enter description" onChange={onHandleSearchChange}
                            name="description"
                            value={params.description}
                        />
    </Form.Group>
                </Col>


    <Col md={3} xs={12} className={' align-self-end mb-2'} >
    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox"
                            label="Full time"
                            onChange={onHandleSearchChange}
                            name="full_time"
                        />
    </Form.Group> 
                    </Col>
                </Form.Row>
</Form>
    )
}
