import { useState, useRef } from 'react';
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { switchTheme } from '../store/ThemeSlice';
import { setAuth } from '../store/mealsSlice';

function Header() {
    const [state, setState] = useState(false);
    const { isError, Auth, name } = useSelector(state => state.Meals);
    const { theme } = useSelector(state => state.Themes);
    const dispatch = useDispatch();
    const inputValue = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setAuth(inputValue.current.value))
        setState(false)
    }
    return (
        <>
            {isError && (
                <div className="alert alert-danger m-0" role="alert">
                    {isError}
                </div>
            )}
            {isError === null && (
                <div className="alert alert-primary m-0 d-flex justify-content-center align-items-center" role="alert">
                    {name === null ? (
                        <h6>Please Create Auth</h6>
                    ) : (
                        name
                    )}
                </div>  
            )}
            <div className='header py-3' style={{backgroundColor: '#1E293B'}} >
                <div className='container d-flex justify-content-between align-items-center'>
                    <a className='text-danger text-capitalize text-decoration-none fs-5' href='/'>meals</a>
                    {Auth === true && (
                        <ul className='m-0'>
                            <NavLink to='/categorise' className='text-capitalize text-decoration-none' style={{ color: '#fff', opacity: 0.7 }}>category</NavLink>
                            <span className='ms-2 text-white' style={{cursor: 'pointer'}} onClick={() => dispatch(switchTheme())}>
                                <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
                            </span>
                        </ul>
                    )}
                    {Auth === false && (
                        <button className="btn btn-primary" onClick={() => setState(true)}>Auth</button>
                    )}
                </div>
            </div>
            {state && (
                <div className='overly' style={{position: 'fixed', inset: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1, transition: 'all 0.4s linear'}}>
                    <div className='box rounded' style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#fff', padding: '20px'}}>
                        <form className='w-100' onSubmit={handleSubmit}>
                            <div className="form-floating">
                                <input type="name" className="form-control" ref={inputValue} id="floatingUserName" placeholder="Enter Your Name" />
                                <label htmlFor="floatingUserName">Enter Your Name</label>
                            </div>
                            <button type='submit' className='btn btn-danger mt-2 text-capitalize'>submit</button>
                        </form>
                        <div className='close-btn fw-bold p-2 text-danger' onClick={() => setState(false)} style={{position: 'absolute', top: '0', right: '0', cursor: 'pointer'}}>x</div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Header;