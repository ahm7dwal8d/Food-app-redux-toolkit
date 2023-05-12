import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../store/mealsSlice";
import { Link } from "react-router-dom";
import Loading from './Loading';

function Categories() {
    const { data, isLoading } = useSelector(state => state.Meals);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories())
    } , [])
    return (
        <div className='container py-3'>
            <h1 className='fs-3 text-center'>Categories</h1>
            <div className='row py-3'>
                {
                    isLoading !== false ? (
                        <Loading />
                    ) :
                        (
                            data && data.categories?.map((cate) => {
                                return (
                                    <div className='col-lg-4 col-md-6 col-sm-12' key={cate.idCategory}>
                                        <div className='box p-2'></div>
                                        <img className='w-100 rounded' src={cate.strCategoryThumb} alt='' />
                                        <h4 className='text-center pt-2'>{cate.strCategory}</h4>
                                        <Link to={`/cate/Details/${cate.strCategory}`} className='btn btn-danger text-capitalize text-center d-block m-auto'>get meals</Link>
                                    </div>
                                )
                            })
                    )
                }
            </div>
        </div>
    )
}

export default Categories;