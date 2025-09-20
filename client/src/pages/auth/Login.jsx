import React, { useState } from 'react'
import PageHeader from '../../components/PageHeader'
import { FaUser } from "react-icons/fa";
import { TbLockPassword } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Login = () => {
  const [loginUser, setLoginUser] = useState({
    username: "",
    password: ""
  });

  const handleInputChange = (e) => {
    setLoginUser(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  const handleSubmit = () => {
    console.log(loginUser)
  }
  
  return (
    <div className='min-h-screen w-full p-5 flex justify-center items-center'>
      <div className="loginForm flex flex-col gap-4 w-[40rem] border-[1px] border-gray-200 
      py-4 px-6 rounded-xl">
        <PageHeader title={'Login User'} />
        <label className="input validator w-full">
          <FaUser />
          <input
            type="text"
            name='username'
            onChange={handleInputChange}
            required
            placeholder="Username"
            pattern="[A-Za-z][A-Za-z0-9\-]*"
            minlength="3"
            maxlength="30"
            title="Only letters, numbers or dash"
          />
        </label>
       
        <label className="input validator w-full">
          <TbLockPassword />
          <input
            type="password"
            name='password'
            onChange={handleInputChange}
            required
            placeholder="Password"
            minlength="6"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must be more than 5 characters, including number, lowercase letter, uppercase letter"
          />
        </label>

        <button className="btn btn-soft btn-primary" onClick={handleSubmit}>Submit</button>

        <p>Don't have an account? <Link to={'/register'}>Sign Up</Link></p>

        <p className="validator-hint">
          Must be 3 to 30 characters, containing only letters, numbers or dash
        </p>
        <p className="validator-hint hidden">
          Must be more than 5 characters, including
          At least one number <br />At least one lowercase letter <br />At least one uppercase letter
        </p>
      </div>
    </div>
  )
}

export default Login
