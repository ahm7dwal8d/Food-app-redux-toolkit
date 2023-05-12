import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDetails } from "../store/mealsSlice";
import { useParams, Link } from "react-router-dom";

function Details() {
    const { data } = useSelector(state => state.Meals);
    const {theme} = useSelector(state => state.Themes)
    const dispatch = useDispatch()
    const { id } = useParams();
    console.log(data)
    useEffect(() => {
        dispatch(getDetails(id))
    }, [])
    return (
        <div className='container'>
            {data && data.meals.map((meal) => {
                return (
                    <div className='meal py-3' key={meal.idMeal}>
                        <img className='w-100 rounded' src={meal.strMealThumb} alt='' />
                        <h6 className={`pt-1 ${theme === 'light' ? 'text-black-50' : 'text-white-50'}`}>{meal.strCategory}</h6>
                        <h5 className='fs-3'>{meal.strMeal}</h5>
                        <p>{meal.strInstructions}</p>
                        <Link to={meal.strYoutube} className='btn btn-danger'>
                            How to prepare
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Details;