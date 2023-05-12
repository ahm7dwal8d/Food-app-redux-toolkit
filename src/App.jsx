
import { useEffect, useState } from 'react';
import Header from "./Components/Header";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Index from "./Pages/Index"
import Categories from "./Components/Categories";
import Details from "./Components/Details"
import CategoriesDetails from "./Components/CategoriesDetails"
import { updateAuth } from './store/Auth';

function App() {
  // const [sign, setSign] = useState(false);
  // const [login, setLogin] = useState(false);
  const { theme, bg, color } = useSelector(state => state.Themes);
  console.log(bg, color)
  const dispatch = useDispatch();
  useEffect(() => { 
    dispatch(updateAuth({ name: 'f', mail: 's', password: 45 }));
    setTimeout(() => {
      // setSign(true);
    }, 5000)
  }, [])
  // const overly = {
  //   position: 'fixed',
  //   inset: 0,
  //   width: '100%',
  //   height: '100%',
  //   backgroundColor: "rgba(0, 0, 0, 0.5)",
  //   zIndex: 99999999
  // }
  // const formStyle = {
  //   position: "absolute",
  //   top: "50%",
  //   left: "50%",
  //   transform: "translate(-50%, -50%)"
  // }
  // const closeBtn = () => {
  //   setSign(false);
  //   setLogin(false);
  // }
  return (
    <div className={`App ${theme}`} style={{backgroundColor: bg, color: color, transition: '0.8s linear'}}>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/categorise' element={<Categories />}/>
          <Route path='/cate/Details/:name' element={<CategoriesDetails />} />
      </Routes>
      </BrowserRouter>
      {/* {sign && (
        <div className='overly' style={overly}>
          <form className='w-50 bg-white p-3 rounded' style={formStyle}>
          <div className="form-floating mb-3">
            <input type="name" className="form-control" id="floatingInput" placeholder="Enter Your Name" />
            <label htmlFor="floatingInput">Enter Your Name</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control mt-3" id="floatingPassword" placeholder="Enter Password" />
            <label htmlFor="floatingPassword">Enter Password</label>
          </div>
          <div className="form-floating">
            <input type="email" className="form-control mt-3" id="floatingPassword" placeholder="Enter Your Email Address" />
            <label htmlFor="floatingPassword">Enter Your Email Address</label>
            </div>
            <button type='submit' className='btn btn-danger text-capitalize mt-2'>submit</button>
          </form>
          <div className='close-btn text-danger text-capitalize fw-bold' onClick={closeBtn} style={{position: 'absolute', top: '30px', right: '30px', cursor: 'pointer'}}>x</div>
        </div>
      )} */}
    </div>
  )
}

export default App
