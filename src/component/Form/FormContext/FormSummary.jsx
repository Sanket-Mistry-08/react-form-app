import React from 'react'
import { useOutletContext } from 'react-router-dom';
import '../form.css'
const FormSummary = () => {

  const [currentActive, setCurrentActive, formDetail, setFormDetail] = useOutletContext();

  return (
    <div>
      <h3 className='success'>Data Added Successfully</h3>
      {Object.keys(formDetail).map((key, index) => {
        console.log("hi")
        return (
          <div className='row' key={index}>
            <div className='col-6' >{key.charAt(0).toUpperCase() +
              key.slice(1)}</div>
            <div className='col-6'>{formDetail[key]}</div>
            <hr />
          </div>
        );
      })}</div>
  )
}

export default FormSummary