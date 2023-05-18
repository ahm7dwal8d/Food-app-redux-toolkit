import { useSelector } from "react-redux";
import Loading from "./Loading";
import { Link } from 'react-router-dom';


function Random_Meal() {
    const { randomMeal, isLoading, Auth } = useSelector(state => state.Meals);
    const { theme } = useSelector(state => state.Themes);
    console.log(randomMeal)
    return (
        <>
                        {isLoading !== false ? (
                <Loading />
                ): (
                    randomMeal && randomMeal.meals?.map((meal) => {
                        return (
                                <div className={`box p-3 mt-4 rounded bg-white text-center w-75`}  key={meal.idMeal} style={{backgroundColor: theme === 'dark' && '#1E293B', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '99999'}}>
                                    <img className='w-50 rounded' src={meal.strMealThumb} alt='' />
                                    <h6 className={`pt-1 text-left ${theme === 'light' ? 'text-black-50' : 'text-white-50'}`}>{meal.strCategory}</h6>
                                    <h3 className='fs-5 text-left'>{meal.strMeal}</h3>
                                    {Auth ? (
                                        <Link to={`details/${meal.idMeal}`} className='btn btn-danger text-capitalize'>details</Link>
                                    ) : (
                                            <button className='btn btn-danger text-capitalize' disabled={!Auth}>details</button>
                                    )}
                                </div>
                        )
                    })
                    ) }
        </>
    )
}

export default Random_Meal