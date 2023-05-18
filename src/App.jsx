
import { useEffect } from 'react';
import Header from "./Components/Header";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Index from "./Pages/Index"
import Categories from "./Components/Categories";
import Details from "./Components/Details"
import CategoriesDetails from "./Components/CategoriesDetails";
import NotFound from "./Components/NotFound";
// import Random_Meal from "./Components/Random_Meal";
import { getRandomMeal } from "./store/mealsSlice";

function App() {
  // const { Auth } = useSelector(state => state.Meals);
  const { theme, bg, color } = useSelector(state => state.Themes);
  console.log(bg, color)
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getRandomMeal());
  } ,[])
  return (
    <div className={`App ${theme}`} style={{backgroundColor: bg, color: color, transition: '0.8s linear'}}>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/categorise' element={<Categories />}/>
          <Route path='/cate/Details/:name' element={<CategoriesDetails />} />
          <Route path='*' element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
