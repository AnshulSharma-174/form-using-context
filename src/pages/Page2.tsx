import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { useFormContext } from '../context/FormContext';
import { Link } from 'react-router-dom';

const Page2 = () => {
    const {
        dob,
        handleDob
    } = useFormContext();
    return (
        <section style={{ width: '40%' }} className='m-auto text-center'>
            <h1 className='m-5'>Page 2</h1>
            <form>
                <div className="form-group p-3">
                    <label htmlFor="fname">Date of Birth</label>
                    <input value={dob} onChange={handleDob} type="date" id='fname' className="form-control p-3" placeholder="Date of birth" />
                </div>
                <div className="form-check d-flex justify-content-center p-3">
                    <input className="form-check-input p-2 me-1" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                        Do you agree to our term & conditions
                    </label>
                </div>
                <div className="form-group p-3">
                    <Link to={'/'}><button className="btn btn-primary m-4 px-5">Back</button></Link>
                    <Link to={'/Page3'}><button className="btn btn-primary m-4 px-5">Next</button></Link>
                </div>
            </form>
        </section>
    )
}

export default Page2
