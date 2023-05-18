import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDetails } from "../store/mealsSlice";
import { useParams, Link } from "react-router-dom";

function Details() {
    const { data } = useSelector(state => state.Meals);
    const { theme } = useSelector(state => state.Themes)
    const dispatch = useDispatch()
    const { id } = useParams();
    console.log(data)
    useEffect(() => {
        dispatch(getDetails(id))
    }, [])

    return (
        <div className='container'>
            {data && data.meals.map((meal) => {
                const { strYoutube } = meal;
                return (
                    <div className='meal row py-3' key={meal.idMeal}>
                        <div className='col-lg-6 col-sm-12'>
                            <img className='w-100 rounded ' src={meal.strMealThumb} alt='' />
                        </div>
                        <div className='col-lg-6 col-sm-12'>
                            {strYoutube.split("").map((el) => el === 'watch' ? 'embed' : '')}
                        <h6 className={`pt-1 ${theme === 'light' ? 'text-black-50' : 'text-white-50'}`}>{meal.strCategory}</h6>
                            <h5 className='fs-3'>{meal.strMeal}</h5>
                            <p>{meal.strInstructions}</p>
                            <div className='d-flex justify-content-between align-items-center'>
                                <Link to={meal.strYoutube} className='btn btn-danger'>
                                    How to prepare
                                </Link>
                                {meal.strSource && (
                                <Link to={meal.strSource} className='btn btn-primary'>
                                    How Source
                                </Link>
                                )}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Details;