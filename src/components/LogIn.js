import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../context/auth/AuthContext';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
    const context = useContext(AuthContext);
    const navigate = useNavigate();
    const { login } = context;
    const [auth, setAuth] = useState({ email: "", password: "" });
    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/');
        }
    }, [navigate]);

    const OnSubmit = async (e) => {
        const result = await login(auth.email, auth.password);

        if (result.success) {
            localStorage.setItem('token', result.token);
            navigate('/');
        }

    }

    const OnChange = (e) => {
        setAuth({ ...auth, [e.target.name]: e.target.value });
    }
    return (
        <>
            <div className='container row'>
                <h3>Log In</h3>
                <hr/>
                <div className=''>
                    <form onSubmit={OnSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" onChange={OnChange} className="form-control" value={auth.email} name="email" id="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" autoComplete='on' onChange={OnChange} className="form-control" value={auth.password} name="password" id="password" />
                        </div>
                        <button type="submit" className="btn btn-primary">Log In</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LogIn;