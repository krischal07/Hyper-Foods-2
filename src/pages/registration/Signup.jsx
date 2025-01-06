import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import myContext from '../../context/data/myContext'
import { toast } from 'react-toastify'
import { auth, fireDB } from "../../firebase/FirebaseConfig"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { addDoc, collection, Timestamp } from 'firebase/firestore'
import Loader from '../../components/loader/Loader'
import signuplogo from "../../assets/hyperlogo.png"

function Signup() {


   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [phoneNumber, setPhoneNumber] = useState("")


   const context = useContext(myContext)
   const { loading, setLoading } = context
    
   const signup = async () => {
      setLoading(true)
      console.log(name, email, password,phoneNumber)
      if (name === "" || email === "" || password === ""|| phoneNumber === "") {
         setLoading(false)
         return toast.error("All fields are required!!")
      }

      if(phoneNumber.length !==10 || isNaN(phoneNumber)){
         setLoading(false)
         return toast.error("Invalid Number")
      }
      try {
         const users = await createUserWithEmailAndPassword(auth, email, password)
         const user = {
            name: name,
            uid: users.user.uid,
            email: users.user.email,
            phoneNumber: phoneNumber,
            time: Timestamp.now()
         }
         const userRef = collection(fireDB, "users")
         await addDoc(userRef, user)
         toast.success("SignUp Successful")
         setName("")
         setEmail("")
         setPassword("")
         setPhoneNumber("")
         setLoading(false)
      } catch (error) {
         console.log(error)
         toast.error(error.message)
         setLoading(false)
      }
   }

   return (
      <div className='flex justify-center items-center h-screen bg-white'>
         {loading && <Loader />}
         <div className='bg-white px-10 py-10 rounded-xl'>
            {/* logo */}
         <div className="flex justify-center mb-4">
               <img 
                  src={signuplogo}
                  alt="App Logo" 
                  className="w-30 h-20 object-contain"
               />
            </div>

            <div className="">
               <h1 className='text-center text-black text-xl mb-4 font-bold'>Signup</h1>


            </div>
            <div>
               <input type="text"
                  name='name'
                  className='bg-gray-400 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-black outline-none'
                  placeholder='Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
               />
            </div>
            <div>
               <input type="email"
                  name='email'
                  className='bg-gray-400 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-black outline-none'
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
            </div>
            <div>
               <input
                  type="password"
                  className='bg-gray-400 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-black outline-none'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
            </div>
            <div>
               <input
                  type="text"
                  className='bg-gray-400 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-black outline-none'
                  placeholder='Phone Number'
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
               />
            </div>
            <div className='flex justify-center mb-3'>
               <button
                  className='bg-blue-800 w-full text-white font-bold px-2 py-2 rounded-lg'
                  onClick={signup}>
                  Signup
               </button>
            </div>
            <div>
               <h2 className='text-black'>Have an account? <Link className='text-blue-800 font-bold' to={'/login'}>Login</Link></h2>
            </div>
         </div>
      </div>
   )
}

export default Signup

