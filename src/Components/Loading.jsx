import LoadingImg from '../assets/Loading.gif';


function Loading() {
    return (
        <div className='loading d-flex justify-content-center align-items-center'>
            <img src={LoadingImg} alt='' />
        </div>
    )
}

export default Loading;