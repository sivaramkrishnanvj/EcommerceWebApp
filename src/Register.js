import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues:{
            name:"",
            email:"",
            password:"",
            reenter:"",
        },
        onSubmit: async(values)=>{
            await axios.post("https://62163d587428a1d2a360503f.mockapi.io/register",values);
            navigate("/login")
        }
    })
  return (
      <form onSubmit={formik.handleSubmit}>
    <div className='container'>
    <div className='row'>
            <div className='col-lg-6'>
                <h1>Register</h1>
            </div>
        </div>
    <div className='row'>
            <div className='col-lg-6'>
                <label>Name</label>
                <input type="text" name='name' value={formik.values.name} onChange={formik.handleChange} className='form-control' required/>
            </div>
        </div>
        <div className='row'>
            <div className='col-lg-6'>
                <label>Email</label>
                <input type="email" name='email' value={formik.values.email} onChange={formik.handleChange} className='form-control' required/>
            </div>
        </div>
        <div className='row'>
            <div className='col-lg-6'>
                <label>Password</label>
                <input type="text" name='password' value={formik.values.password} onChange={formik.handleChange} className='form-control'required/>
            </div>
        </div>
        <div className='row'>
            <div className='col-lg-6'>
                <label>Renter Password</label>
                <input type="password" name='reenter' value={formik.values.reenter} onChange={formik.handleChange} className='form-control' required/>
            </div>
        </div>
        <div className='row mt-3'>
            <div className='col-lg-4'>
                 <input type="submit" className='btn btn-primary btn-sm'/>
                
               
            </div>
        </div>
    </div>
    </form>
  )
}

export default Register