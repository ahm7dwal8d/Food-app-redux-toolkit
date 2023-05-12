import { useDispatch } from "react-redux";
import { searchMeals } from "../store/mealsSlice";

function Form() {
    const dispatch = useDispatch();
    return (
        <div className='container'>
            <form className='w-100 d-block py-3'>
                <div className="form-floating mb-3 w-100">
                    <input type="search" className="form-control" id="floatingInput" placeholder='Enter Meals Name' onChange={ e => dispatch(searchMeals(e.target.value))} />
                    <label htmlFor="floatingInput" style={{color: '#0F172A'}}>Enter Meals Name</label>
                </div>
            </form>
        </div>
    )
}

export default Form;