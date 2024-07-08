import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { useFormContext } from '../context/FormContext';
import { Link } from 'react-router-dom';

const Page1 = () => {
    const {
        firstName,
        lastName,
        age,
        dob,
        handleFirstName,
        handleLastName,
        handleAge,
    } = useFormContext();
    return (
        <section style={{ width: '40%' }} className='m-auto text-center'>
            <h1 className='m-5'>Page 1</h1>
            <form>
                <div className="form-group p-3">
                    <label htmlFor="fname">First Name</label>
                    <input value={firstName} onChange={handleFirstName} type="text" id='fname' className="form-control p-3" placeholder="First name" />
                </div>
                <div className="form-group p-3">
                    <label htmlFor="lname">Last Name</label>
                    <input value={lastName} onChange={handleLastName} type="text" id='lname' className="form-control p-3" placeholder="Last name" />
                </div>
                <div className="form-group p-3">
                    <label htmlFor="age">Age</label>
                    <input value={age} onChange={handleAge} type="number" id='age' className="form-control p-3" placeholder="Age" />
                </div>
                <Link to={'/Page2'}><button className="btn btn-primary m-4 px-5">Next</button></Link>
            </form>
        </section>
    )
}
export default Page1