import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { switchTheme } from '../store/ThemeSlice';

function Header() {
    const { isError } = useSelector(state => state.Meals);
    const { theme } = useSelector(state => state.Themes);
    const dispatch = useDispatch();
    return (
        <>
            {isError && (
                <div className="alert alert-danger m-0" role="alert">
                    {isError}
                </div>
            )}
            <div className='header py-3' style={{backgroundColor: '#1E293B'}} >
                <div className='container d-flex justify-content-between align-items-center'>
                    <a className='text-danger text-capitalize text-decoration-none fs-5' href='/'>meals</a>
                    <ul className='m-0'>
                        <NavLink to='/categorise' className='text-capitalize text-decoration-none' style={{ color: '#fff', opacity: 0.7 }}>category</NavLink>
                        <span className='ms-2 text-white' style={{cursor: 'pointer'}} onClick={() => dispatch(switchTheme())}>
                            <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
                        </span>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;