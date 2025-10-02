import React, { useEffect, useState } from 'react'
import PageHeader from '../../components/PageHeader'
import { FaUser } from "react-icons/fa";
import { TbLockPassword } from "react-icons/tb";
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserThunk } from '../../store/slice/user/userThunk';
import toast from 'react-hot-toast';
const Login = () => {
  const [loginUser, setLoginUser] = useState({
    username: "",
    password: ""
  });
  const { isAuthenticated } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if(isAuthenticated) navigate('/');
  }, [isAuthenticated])
  
  const handleInputChange = (e) => {
    setLoginUser(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!loginUser.username || !loginUser.password) {
      toast.error('Please fill all fields');
      return;
    }
    const response = await dispatch(loginUserThunk(loginUser));
    if(response?.payload?.success) {
      navigate('/');
    }
    setLoginUser({
      username: "",
      password: ""
    }); 
  }
  
  return (
    <div className='min-h-screen w-full p-5 flex flex-col justify-center items-center gap-5 relative'>
      <h2 className='text-5xl font-bold uppercase text-accent'>AG Chats</h2>
      <form className="loginForm flex flex-col gap-4 w-[40rem] border-[1px] border-gray-200 
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
            minLength="3"
            maxLength="30"
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
            autoComplete='true'
          />
        </label>

        <button className="btn btn-soft btn-accent" onClick={handleSubmit}>Submit</button>

        <p className='text-center'>Don't have an account? <Link to={'/register'}>Sign Up</Link></p>

        <p className="validator-hint">
          Must be 3 to 30 characters, containing only letters, numbers or dash
        </p>
        <p className="validator-hint hidden">
          Must be more than 5 characters, including
          {/* At least one number <br />At least one lowercase letter <br />At least one uppercase letter */}
        </p>
      </form>
      <Footer />
    </div>
  )
}

export default Login
