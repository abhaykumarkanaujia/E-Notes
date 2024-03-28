import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../context/auth/AuthContext';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const context = useContext(AuthContext);
    const navigate = useNavigate();
    const { signup } = context;
    const [auth, setAuth] = useState({ name: "", password: "", email: "", cpassword: "" });
    useEffect(() => {
        if(localStorage.getItem('token')){
          navigate('/');
        }
      }, [navigate]);
    const OnSubmit = async (e) => {
        e.preventDefault();
        if (auth.password !== auth.cpassword) {
            console.log("Invalid Credentials");
        } else {
            const result = await signup(auth.name, auth.email, auth.password);

            if(result.success){
                localStorage.setItem('token', result.token);
                navigate('/');
            }
        }
    }

    const OnChange = (e) => {
        setAuth({ ...auth, [e.target.name]: e.target.value })
    }
    return (
        <>
            <h3>Sign Up</h3>
            <form onSubmit={OnSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" onChange={OnChange} value={auth.name} name="name" id="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={OnChange} value={auth.email} name="email" id="email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={OnChange} autoComplete='on' value={auth.password} name="password" id="password" minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" onChange={OnChange} autoComplete='on' value={auth.cpassword} name="cpassword" id="cpassword" minLength={5} required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default SignUp