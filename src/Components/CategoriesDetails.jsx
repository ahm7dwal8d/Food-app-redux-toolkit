import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMealbyCategories } from '../store/mealsSlice';
import { Link } from 'react-router-dom';
import Loading from "./Loading";

function CategoriesDetails() {
    const { name } = useParams();
    const { data, isLoading } = useSelector(state => state.Meals);
    console.log(data)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMealbyCategories(name));
    }, [])
    return (
        <div className='container'>
            <h4 className='text-center py-3 fs-2'>{name}</h4>
            <div className='row'>
                {isLoading !== false ? (
                    <Loading />
                ) : (
                    data && data.meals?.map((meal) => {
                        return (
                            <div className='col-lg-3 col-md-6 col-sm-12' key={meal.idMeal}>
                                <div className='box p-3'>
                                    <img className='w-100 rounded' src={meal.strMealThumb} alt='' />
                                    <h4 className='fs-6 pt-2'>{meal.strMeal}</h4>
                                    <Link to={`/details/${meal.idMeal}`} className='btn btn-danger text-capitalize'>details</Link>
                                </div>
                            </div>
                        )
                    })
                )}
            </div>
        </div>
    )
}

export default CategoriesDetails;