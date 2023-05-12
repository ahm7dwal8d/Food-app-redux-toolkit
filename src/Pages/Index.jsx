import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getMeals } from "../store/mealsSlice";
import Form from "../Components/Form"
import Meals from "../Components/Meals"

function Index() {
    const { data, isLoading } = useSelector(state => state.Meals);
    const dispatch = useDispatch();
    console.log(data)
    useEffect(() => {
        dispatch(getMeals())
    }, [])
    return (
        <>
            <Form />
            <Meals data={data} loading={isLoading} />
        </>
    )
}

export default Index;