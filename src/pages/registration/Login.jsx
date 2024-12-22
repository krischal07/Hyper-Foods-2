import { Link } from 'react-router-dom'

function Login() {
   
    return (
        <div className=' flex justify-center items-center h-screen bg-white'>
            <div className=' bg-white px-10 py-10 rounded-xl '>
                {/* logo */}
            <div className="flex justify-center mb-4">
               <img 
                  src="/src/assets/hyperlogo.png" 
                  alt="App Logo" 
                  className="w-30 h-20 object-contain"
               />
            </div>

                <div className="">
                    <h1 className='text-center text-black text-xl mb-4 font-bold'>Login</h1>
                </div>
                <div>
                    <input type="email"
                        name='email'
                        className=' bg-gray-400 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-blue-950 placeholder:text-black outline-none'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                        type="password"
                        className=' bg-gray-400 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-blue-950 placeholder:text-black outline-none'
                        placeholder='Password'
                    />
                </div>
                <div className=' flex justify-center mb-3'>
                    <button
                        className=' bg-blue-800 w-full text-white font-bold  px-2 py-2 rounded-lg'>
                        Login
                    </button>
                </div>
                <div>
                    <h2 className='text-black'>Don't have an account? <Link className=' text-blue-800 font-bold' to={'/signup'}>Signup</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Login