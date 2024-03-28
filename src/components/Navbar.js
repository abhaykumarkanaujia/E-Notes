import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const logout = ()=>{
        localStorage.removeItem('token');
        navigate('/login');
    }
    const location = useLocation();
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark fixed-top" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">E-Notes</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        {!localStorage.getItem('token') ? <div className='d-flex'>
                        {location.pathname === "/signup" && <Link to="/login" className="btn btn-primary mx-1" role="button" >Log In</Link>}
                        {location.pathname === "/login" && <Link to="/signup" className="btn btn-secondary mx-1" role="button">Sign Up</Link>}
                        </div> : <button onClick={logout} type="button" className="btn btn-info">Log Out</button>}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar