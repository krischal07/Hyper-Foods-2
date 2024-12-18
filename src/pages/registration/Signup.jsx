import { Link } from 'react-router-dom'

function Signup() {
   
    return (
        <div className=' flex justify-center items-center h-screen bg-blue-950'>
            <div className=' bg-yellow-500 px-10 py-10 rounded-xl '>
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>
                </div>
                <div>
                    <input type="email"
                        name='email'
                        className=' bg-white-100 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-blue-950 placeholder:text-gray-500 outline-none'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                        type="password"
                        className=' bg-white-100 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-blue-950 placeholder:text-gray-500 outline-none'
                        placeholder='Password'
                    />
                </div>
                <div className=' flex justify-center mb-3'>
                    <button
                        className=' bg-blue-950 w-full text-white font-bold  px-2 py-2 rounded-lg'>
                        Signup
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Have an account? <Link className=' text-blue-950 font-bold' to={'/login'}>Login</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Signup

//dfgds