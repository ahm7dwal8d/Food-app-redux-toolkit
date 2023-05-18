import ErrorImg from "../assets/Not_Found.png";


function NotFound() {
    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: 'calc(100vh - 70px'}}>
            <img className='w-25 bg-transparent' src={ErrorImg} alt='' />
        </div>
    )
}

export default NotFound;