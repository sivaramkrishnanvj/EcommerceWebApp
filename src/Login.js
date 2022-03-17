import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Login.css"

function Login() {
    const navigate=useNavigate()
    const formik= useFormik({
        initialValues:{
            email:"",
            password:"",
        },
        onSubmit: async(values)=>{
            await axios.post("https://62163d587428a1d2a360503f.mockapi.io/login",values)
            navigate("/home");
        }
    })
  return (
    <div className='login'>
        
       <form onSubmit={formik.handleSubmit}>

           <div className='container'>
           <div className='row mb-5'>
                   <div className='col-lg-4'>
                  <h1>Login</h1>
                   </div>
               </div>
               <div className='row'>
                   <div className='col-lg-4'>
                   <label>Email</label>
           <input type="email" name='email' value={formik.values.email} onChange={formik.handleChange} className="form-control"></input>
                   </div>
               </div>
               <div className='row'>
                   <div className='col-lg-4'>
                   <label>Password</label>
           <input type="password" name='password' value={formik.values.password} onChange={formik.handleChange} className="form-control"></input>
                   </div>
               </div>
               <div className='row mt-3 mb-2'>
                   <div className='col-lg-4'>
           <input type="Submit" className="btn btn-primary btn-sm"></input>
                   </div>
               </div>
               <button className='btn btn-primary'>Register</button>
           </div>
            
       </form>
           
        </div>
  )
}

export default Login