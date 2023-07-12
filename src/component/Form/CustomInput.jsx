import React from 'react'
import { Button, Col, Form, Row, InputGroup } from 'react-bootstrap';

const CustomInput = (props) => {
  return (

    <Form.Group as={Col} md="6" controlId="validationCustom01">
        
                        <Form.Control
                            required
                            type={props.type}
                            name={props.name}
                            placeholder={props.placeholder}
                            onChange={props.handleChange}
                            value={props.formDetail[props.name]}/>
                        <Form.Control.Feedback type="invalid">
                            {props.placeholder} is a required field.
                        </Form.Control.Feedback>
    </Form.Group>
  )
}

export default CustomInput