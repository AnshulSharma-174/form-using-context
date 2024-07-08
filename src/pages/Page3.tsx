import React from 'react'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import { useFormContext } from '../context/FormContext';

const Page3 = () => {
    const {
        firstName,
        lastName,
        age,
        dob
    } = useFormContext()
    return (
        <Container>
            <section style={{ width: '50%' }} className='m-auto mt-5 text-center'>
                <h1 className='text-center m-5 p-3'>Page3</h1>
                <p><b>Name:{firstName + ' ' + lastName} </b></p>
                <p><b>Date of Birth: {dob}</b></p>
                <p><b>Age: {age}</b></p>
                <Link to={'/Page2'}><button className="btn btn-primary m-4 px-5">Back</button></Link>
            </section>
        </Container>
    )
}

export default Page3
