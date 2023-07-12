import React from 'react'
import { useOutletContext, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import CustomInput from '../CustomInput';
import '../form.css'


const FormUserAdressDetail = () => {

    const navigate = useNavigate();
    const [currentActive, setCurrentActive, formDetail, setFormDetail] = useOutletContext()
    const [validated, setValidated] = useState(false)
    const [formError, setFormError] = useState({ city: false, state: false, country: false })

    let back = (event) => {
        setCurrentActive(currentActive - 1)
        navigate("/form/user-info");
    }

    const handleSubmit = (event) => {

        event.preventDefault();
        const form = event.currentTarget;

        // custom error-handeling
        if (formDetail.city == '') {
            setFormError((prev) => ({ ...prev, city: true }))
        }
        if (formDetail.state == '') {
            setFormError((prev) => ({ ...prev, state: true }))
        }
        if (formDetail.country == '') {
            setFormError((prev) => ({ ...prev, country: true }))
        }

        if (form.checkValidity() == false) {
            event.stopPropagation();
        } else {
            setCurrentActive(Number(currentActive) + 1)
            console.log(formDetail)
            navigate("/form/summary");
        }
        setValidated(true);
    };

    const handleChange = (event) => {

        if (event.target.value.charAt(0) == " ") {
            event.target.value = ""
        }

        let name = event.target.name
        let value = event.target.value

        setFormDetail((prev) => {
            if (name == 'adressLine1') {
                return { ...prev, adressLine1: value }
            } else if (name == 'adressLine2') {
                return { ...prev, adressLine2: value }
            } else if (name == 'lastName') {
                return { ...prev, lastName: value }
            } else if (name == 'city') {
                setFormError((prev) => ({ ...prev, city: false }))
                return { ...prev, city: value }
            } else if (name == 'country') {
                setFormError((prev) => ({ ...prev, country: false }))
                return { ...prev, country: value }
            } else if (name == 'state') {
                setFormError((prev) => ({ ...prev, state: false }))
                return { ...prev, state: value }
            } else if (name == 'pincode') {
                return { ...prev, pincode: value }
            }
        })
    }

    return (
        <div>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-1">
                    <CustomInput type='text' name='adressLine1' placeholder='Adress Line 1' handleChange={handleChange} formDetail={formDetail} />
                    <CustomInput type='text' name='adressLine2' placeholder='Adress Line 2' handleChange={handleChange} formDetail={formDetail} />
                </Row>
                <Row className="mb-1">
                    <Form.Group isInvalid={true} as={Col} md="6" controlId="validationCustom02">
                        <Form.Select
                            isInvalid={formError.city}
                            onChange={handleChange} name='city' style={{ color: 'rgb(100,100,100)' }} class="select" placeholder='select'>
                            <option disabled={true} selected value="">City</option>
                            <option value="Ahmedabad">Ahmedabad</option>
                            <option value="Surat">Surat</option>
                            <option value="Rajkot">Rajkot</option>
                            <option value="Ganghinagar">Ganghinagar</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            City is a required field.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group isInvalid={true} as={Col} md="6" controlId="validationCustom02">
                        <Form.Select
                            isInvalid={formError.state}
                            onChange={handleChange} name='state' style={{ color: 'rgb(100,100,100)' }} class="select" placeholder='select'>
                            <option disabled={true} selected value="">State</option>
                            <option value="Gujrat">Gujrat</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Bihar">Bihar</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            State is a required field.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-1">
                    <Form.Group isInvalid={true} as={Col} md="6" controlId="validationCustom02">
                        <Form.Select
                            isInvalid={formError.country}
                            onChange={handleChange} name='country' style={{ color: 'rgb(100,100,100)' }} class="select" placeholder='select'>
                            <option disabled={true} selected value="">Country</option>
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                            <option value="China">China</option>
                            <option value="Pakistan">Pakistan</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            Country is a required field.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <CustomInput type='number' name='pincode' placeholder='Pin Code' handleChange={handleChange} formDetail={formDetail} />
                </Row>
                <button className='btn btn-primary' disabled={currentActive == 1 ? true : false} id='prev' onClick={back}>Back</button>
                <button type="submit" className='btn btn-primary' id='next'>Next</button>
            </Form>
        </div>
    )
}

export default FormUserAdressDetail