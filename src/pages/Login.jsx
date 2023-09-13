import React, { useState } from 'react';
import './about.css'

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='container-xxl'>
      <div className="width ">
      <h4 className='mb-12'>LOGIN</h4>
      
<div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-12">
      <p className=''>Enter your Email address</p>
    <div className="mb-4">
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username"/>
    </div>
      <p>password</p>
      <div className="mb-6">
      <input
        className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
        type={showPassword ? 'text' : 'password'}
        placeholder="******************"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p className="text-red text-xs italic">Please choose a password.</p>
      <button className='btnp' onClick={togglePasswordVisibility}>
        {showPassword ? 'Hide Password' : 'Show Password'}
      </button>
    </div>
    <div className="flex items-center justify-between">
      <button className="btny" type="button">
        Sign In
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
        Forgot Password?
      </a>
    </div>
    </div>

    
</div>
    </div>
  )
}

export default Login