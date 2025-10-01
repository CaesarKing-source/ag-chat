import React, { useState } from 'react'
import PageHeader from '../../components/PageHeader'
import { FaUser } from "react-icons/fa";
import { TbLockPassword } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { registerUserThunk } from '../../store/slice/user/userThunk';

const Register = () => {
  const [registerUser, setRegisterUser] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setRegisterUser(prev => ({
      ...prev,
      [e.target.name] : e.target.value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!registerUser.fullName || !registerUser.username || !registerUser.email || 
      !registerUser.password || !registerUser.confirmPassword) {
        toast.error('Fill all the required fields');
        return;
      }

    if(registerUser.password != registerUser.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    const response = await dispatch(registerUserThunk(registerUser));
    if(response?.payload?.success) {
      navigate('/');
    }
    setRegisterUser({
      fullName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    })
  }

  return (
    <div className='min-h-screen w-full p-5 flex flex-col justify-center items-center gap-5 relative'>
      <h2 className='text-5xl font-bold uppercase text-accent'>AG Chats</h2>
      <form className="loginForm flex flex-col gap-4 w-[40rem] border-[1px] border-gray-200 
      py-4 px-6 rounded-xl">
        <PageHeader title={'Register User'} />
        <label className="input validator w-full">
          <FaUser />
          <input
            type="text"
            name='fullName'
            onChange={handleInputChange}
            required
            placeholder="Full Name"
            minLength="3"
            maxLength="30"
          />
        </label>

        <label className="input validator w-full">
          <FaUser />
          <input
            type="text"
            name='username'
            onChange={handleInputChange}
            required
            placeholder="Username"
            pattern="[A-Za-z][A-Za-z0-9\-]*"
            minLength="3"
            maxLength="30"
            title="Only letters, numbers or dash"
          />
        </label>

        <label className="input validator w-full">
          <MdEmail />
          <input type="email" placeholder="example@mail.com" 
          name='email' onChange={handleInputChange} required />
        </label>
       
        <label className="input validator w-full">
          <TbLockPassword />
          <input
            type="password"
            name='password'
            onChange={handleInputChange}
            required
            placeholder="Password"
            minLength="6"
          />
        </label>

        <label className="input validator w-full">
          <TbLockPassword />
          <input
            type="password"
            name='confirmPassword'
            onChange={handleInputChange}
            required
            placeholder="Confirm Password"
            minLength="6"
          />
        </label>

        <select defaultValue="Gender" name='gender' onChange={handleInputChange} className="select w-full">
          <option disabled={true} defaultValue={true}>Select Gender</option>
          <option value={'male'}>Male</option>
          <option value={'female'}>Female</option>
        </select>

        <button className="btn btn-soft btn-accent" onClick={handleSubmit}>Submit</button>

        <p className='text-center'>Already have an account? <Link to={'/login'}>Sign In</Link></p>

        <p className="validator-hint">
          Must be 3 to 30 characters, containing only letters, numbers or dash
        </p>
        <div className="validator-hint hidden">Enter valid email address</div>
        <p className="validator-hint hidden">
          Must be more than 5 characters, including
        </p>
      </form>

      <Footer />
    </div>
  )
}

export default Register
