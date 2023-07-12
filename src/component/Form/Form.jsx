import React from 'react'
import { useState } from 'react'
import './form.css'
import { Outlet } from 'react-router-dom'
const Form = () => {

    let [currentActive, setCurrentActive] = useState(1)
    let [formDetail, setFormDetail] = useState({
        firstName: '', middleName: '', lastName: '', mobileNumber: '',
        email: '', birthdate: '', age: '', bloodGroup: '', height: '', weight: '', gender: '', maritalStatus: '', adressLine1: '',
        adressLine2: '', city: '', state: '', country: '', pincode: ''
    })

    return (
        <div className='form-container'>

            {/* Form-progress-bar  */}
            <div className="main-progress-container">
                <div className="progress-container">
                    <div className="progress" id="progress"></div>
                    <div className={`circle ${currentActive >= 1 ? 'active' : ''}`}>{currentActive >= 2 ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg> : '1'}</div>
                    <div className={`circle ${currentActive >= 2 ? 'active' : ''}`}>{currentActive >= 3 ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg> : '2'}</div>
                    <div className={`circle ${currentActive >= 3 ? 'active' : ''}`}>3</div>
                </div>
                <div className="progress-container">
                    <span>User Info</span>
                    <span>Adress Details</span>
                    <span>Summary</span>
                </div>

            </div>

            {/* Form-context  */}
            <Outlet context={[currentActive, setCurrentActive, formDetail, setFormDetail]} />

        </div>



    )
}

export default Form