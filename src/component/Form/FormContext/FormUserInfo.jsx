import React from 'react'
import { useState } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { Col, Form, Row } from 'react-bootstrap';
import CustomInput from '../CustomInput';
import '../form.css'

const FormUserInfo = () => {
    const [currentActive, setCurrentActive, formDetail, setFormDetail] = useOutletContext()
    const [validated, setValidated] = useState(false)
    const [birthdayIcon, setBirthdayIcon] = useState(true)
    const [formError, setFormError] = useState({ gender: false, maritalStatus: false, bloodGroup: false })
    const navigate = useNavigate();

    const handleSubmit = (event) => {

        event.preventDefault();
        setBirthdayIcon(false)
        const form = event.currentTarget;

        // custom error-handeling
        if (formDetail.gender == '') {
            setFormError((prev) => ({ ...prev, gender: true }))
        }
        if (formDetail.bloodGroup == '') {
            setFormError((prev) => ({ ...prev, bloodGroup: true }))
        }
        if (formDetail.maritalStatus == '') {
            setFormError((prev) => ({ ...prev, maritalStatus: true }))
        }

        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            setCurrentActive(Number(currentActive) + 1)
            navigate("/form/user-adress-details");
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
            if (name == 'firstName') {
                return { ...prev, firstName: value }
            } else if (name == 'middleName') {
                return { ...prev, middleName: value }
            } else if (name == 'lastName') {
                return { ...prev, lastName: value }
            } else if (name == 'mobileNumber') {
                return { ...prev, mobileNumber: value }
            } else if (name == 'email') {
                return { ...prev, email: value }
            } else if (name == 'birthdate') {
                return { ...prev, birthdate: value }
            } else if (name == 'age') {
                return { ...prev, age: value }
            } else if (name == 'bloodGroup') {
                setFormError((prev) => ({ ...prev, bloodGroup: false }))
                return { ...prev, bloodGroup: value }
            } else if (name == 'height') {
                return { ...prev, height: value }
            } else if (name == 'weight') {
                return { ...prev, weight: value }
            } else if (name == 'gender') {
                setFormError((prev) => ({ ...prev, gender: false }))
                return { ...prev, gender: value }
            } else if (name == 'maritalStatus') {
                setFormError((prev) => ({ ...prev, maritalStatus: false }))
                return { ...prev, maritalStatus: value }
            }
        })
    }

    const onfocus = (e) => {
        setBirthdayIcon(false)
        e.target.type = "date"
    }

    return (
        <div>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-1">
                    <CustomInput type='text' name='firstName' placeholder='First Name' handleChange={handleChange} formDetail={formDetail} />
                    <CustomInput type='text' name='middleName' placeholder='Middle Name' handleChange={handleChange} formDetail={formDetail} />
                </Row>
                <Row className="mb-1">
                    <CustomInput type='text' name='lastName' placeholder='Last Name' handleChange={handleChange} formDetail={formDetail} />
                    <CustomInput type='number' name='mobileNumber' placeholder='Mobile Number' handleChange={handleChange} formDetail={formDetail} />
                </Row>
                <Row className="mb-1">
                    <CustomInput type='text' name='email' placeholder='Email' handleChange={handleChange} formDetail={formDetail} />
                    <Form.Group style={{ position: 'relative' }} as={Col} md="6" controlId="validationCustom02">
                        <Form.Control
                            required
                            type="text"
                            onFocus={onfocus}
                            name="birthdate"
                            placeholder="Birthday"
                            onChange={handleChange}
                            value={formDetail.birthdate}
                        />
                        {birthdayIcon ? <div style={{ position: 'absolute', top: '6px', right: '26px' }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 20 20">
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                        </svg></div> : null}
                        <Form.Control.Feedback type="invalid">
                            Birthday is a required field.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-1">
                    <CustomInput type='number' name='age' placeholder='Age' handleChange={handleChange} formDetail={formDetail} />
                    <Form.Group isInvalid={true} as={Col} md="6" controlId="validationCustom02">
                        <Form.Select
                            isInvalid={formError.bloodGroup}
                            onChange={handleChange} name='bloodGroup' style={{ color: 'rgb(100,100,100)' }} class="select" placeholder='select'>
                            <option disabled={true} selected value="">Blood Group</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="AB">AB</option>
                            <option value="O">O</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            Blood Group is a required field.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-1">
                    <CustomInput type='number' name='height' placeholder='Height' handleChange={handleChange} formDetail={formDetail} />
                    <CustomInput type='number' name='weight' placeholder='Weight' handleChange={handleChange} formDetail={formDetail} />
                </Row>
                <div className="row">
                    <div className="col-md-6">
                        <span>Gender </span><br />
                        <input onChange={handleChange} type="radio" id="g1" name="gender" value="male" />
                        <label htmlFor="g1">Male</label>
                        <input onChange={handleChange} type="radio" id="g2" name="gender" value="female" />
                        <label htmlFor="g2">Female</label><br />
                        {formError.gender && <span className='error'>Please Select Your Gender</span>}
                    </div>
                    <div className="col-md-6">
                        <span>Marital Status</span><br />
                        <input onChange={handleChange} type="radio" id="ms1" name="maritalStatus" value="single" />
                        <label htmlFor="ms1">Single</label>
                        <input onChange={handleChange} type="radio" id="ms2" name="maritalStatus" value="married" />
                        <label htmlFor="ms2">Married</label>
                        <input onChange={handleChange} type="radio" id="ms3" name="maritalStatus" value="divorced" />
                        <label htmlFor="ms3">Divorced</label>
                        <input onChange={handleChange} type="radio" id="ms4" name="maritalStatus" value="widowed" />
                        <label htmlFor="ms4">Widowed</label><br />
                        {formError.maritalStatus && <span className='error'>Please Select Marital Status</span>}
                    </div>
                </div>
                <button className='btn btn-primary' disabled={currentActive == 1 ? true : false} id='prev'>Back</button>
                <button type="submit" className='btn btn-primary' id='next'>Next</button>
            </Form>
        </div>
    )
}

export default FormUserInfo