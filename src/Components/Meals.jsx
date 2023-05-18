/* eslint-disable react/prop-types */
import {useEffect} from 'react'
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { useSelector, useDispatch } from 'react-redux';
import Random_Meal from "./Random_Meal";
import { getRandomMeal } from "../store/mealsSlice";

// eslint-disable-next-line react/prop-types
function Meals({ data, loading }) {
    const { theme } = useSelector(state => state.Themes);
    const { Auth } = useSelector(state => state.Meals);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRandomMeal());
    } ,[])
    return(
        <div className='meals'>
            <div className='container'>
                <div className='row'>
                {loading !== false ? (
                <Loading />
                ): (
                    data && data.meals?.map((meal) => {
                        return (
                            <div className='col-lg-3 col-md-6 col-sm-12' key={meal.idMeal}>
                                <div className={`box p-3 mt-4 rounded`} style={{backgroundColor: theme === 'dark' && '#1E293B' }}>
                                    <img className='w-100 rounded' src={meal.strMealThumb} alt='' />
                                    <h6 className={`pt-1 text-left ${theme === 'light' ? 'text-black-50' : 'text-white-50'}`}>{meal.strCategory}</h6>
                                    <h3 className='fs-5 text-left'>{meal.strMeal}</h3>
                                    {Auth ? (
                                        <Link to={`details/${meal.idMeal}`} className='btn btn-danger text-capitalize'>details</Link>
                                    ) : (
                                            <button className='btn btn-danger text-capitalize' disabled={!Auth}>details</button>
                                    )}
                                </div>
                            </div>
                        )
                    })
                    ) }
                    </div>
            </div>
            {Auth && (
        setTimeout(() => {
          <div className='random-meal' style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fiexd', inset: 0, width: '100%', height: '100%'}}>
          <Random_Meal />
      </div>
        }, 1000)
      )}
        </div>
    )
}

export default Meals;