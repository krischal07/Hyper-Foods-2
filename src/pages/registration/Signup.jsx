import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import myContext from '../../context/data/myContext'
import { toast } from 'react-toastify'
import { auth, fireDB } from "../../firebase/FirebaseConfig"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { addDoc, collection, Timestamp } from 'firebase/firestore'
import Loader from '../../components/loader/Loader'

function Signup() {
//changed

   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   const context = useContext(myContext)
   const { loading, setLoading } = context

   const signup = async () => {
      setLoading(true)
      console.log(name, email, password)
      if (name === "" || email === "" || password === "") {
         setLoading(false)
         return toast.error("All fields are required!!")
      }
      try {
         const users = await createUserWithEmailAndPassword(auth, email, password)
         const user = {
            name: name,
            uid: users.user.uid,
            email: users.user.email,
            time: Timestamp.now()
         }
         const userRef = collection(fireDB, "users")
         await addDoc(userRef, user)
         toast.success("SignUp Successful")
         setName("")
         setEmail("")
         setPassword("")
         setLoading(false)
      } catch (error) {
         console.log(error)
         toast.error(error.message)
         setLoading(false)
      }
   }

   return (
      <div className='flex justify-center items-center h-screen bg-blue-950'>
         {loading && <Loader />}
         <div className='bg-yellow-500 px-10 py-10 rounded-xl'>
            <div className="">
               <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>


            </div>
            <div>
               <input type="text"
                  name='name'
                  className='bg-white-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-blue-950 placeholder:text-gray-500 outline-none'
                  placeholder='Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
               />
            </div>
            <div>
               <input type="email"
                  name='email'
                  className='bg-white-100 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-blue-950 placeholder:text-gray-500 outline-none'
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
            </div>
            <div>
               <input
                  type="password"
                  className='bg-white-100 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-blue-950 placeholder:text-gray-500 outline-none'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
            </div>
            <div className='flex justify-center mb-3'>
               <button
                  className='bg-blue-950 w-full text-white font-bold px-2 py-2 rounded-lg'
                  onClick={signup}>
                  Signup
               </button>
            </div>
            <div>
               <h2 className='text-white'>Have an account? <Link className='text-blue-950 font-bold' to={'/login'}>Login</Link></h2>
            </div>
         </div>
      </div>
   )
}

export default Signup

