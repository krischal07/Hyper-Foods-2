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
   const [username, setuserName] = useState("")
   const [phoneNumber, setPhoneNumber] = useState("")


   const context = useContext(myContext)
   const { loading, setLoading } = context
    
   const signup = async () => {
      setLoading(true)
      console.log(name, email, password,username,phoneNumber)
      if (name === "" || email === "" || password === ""|| username === ""|| phoneNumber === "") {
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
            username: username,
            phoneNumber: phoneNumber,
            time: Timestamp.now()
         }
         // const usernameQuery = query(userRef, where ("username" , "==" ,username));
         // const usernameSnapshot = await getDocs(usernameQuery);
         
         // if(!usernameSnapshot.empty){
            //    setLoading(false);
            //    return toast.error("username is already taken");
            // }
            
            
            const userRef = collection(fireDB, "users")

         await addDoc(userRef, user)
         toast.success("SignUp Successful")
         setName("")
         setEmail("")
         setPassword("")
         setuserName("")
         setPhoneNumber("")
         setLoading(false)
      } 
      catch (error) {
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
               <input type="text"
                  name='username'
                  className='bg-gray-400 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-black outline-none'
                  placeholder='username'
                  value={username}
                  onChange={(e) => setuserName(e.target.value)}
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


// without verification link 
// import { useState, useContext } from "react";
// import { Link } from "react-router-dom";
// import { auth, googleProvider, fireDB } from "../../firebase/FirebaseConfig";
// import { signInWithPopup } from "firebase/auth"; // Import signInWithPopup
// import { addDoc, collection, Timestamp } from "firebase/firestore";
// import myContext from "../../context/data/myContext";
// import { toast } from "react-toastify";
// import Loader from "../../components/loader/Loader";
// import signuplogo from "../../assets/hyperlogo.png";

// function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");

//   const context = useContext(myContext);
//   const { loading, setLoading } = context;

//   // Google Sign-Up function
//   const googleSignUp = async () => {
//     setLoading(true);
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       const user = result.user;
      
//       // Add user data to Firestore
//       const userDoc = {
//         name: user.displayName,
//         uid: user.uid,
//         email: user.email,
//         phoneNumber: phoneNumber, // Optional: You can also add phone number from input
//         time: Timestamp.now(),
//       };
      
//       const userRef = collection(fireDB, "users");
//       await addDoc(userRef, userDoc);
      
//       toast.success("Google SignUp Successful");
//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message);
//       setLoading(false);
//     }
//   };

//   // Existing email/password signup code
//   const signup = async () => {
//     setLoading(true);
//     if (name === "" || email === "" || password === "" || phoneNumber === "") {
//       setLoading(false);
//       return toast.error("All fields are required!!");
//     }

//     if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
//       setLoading(false);
//       return toast.error("Invalid Number");
//     }

//     try {
//       const users = await createUserWithEmailAndPassword(auth, email, password);
//       const user = {
//         name: name,
//         uid: users.user.uid,
//         email: users.user.email,
//         phoneNumber: phoneNumber,
//         time: Timestamp.now(),
//       };
//       const userRef = collection(fireDB, "users");
//       await addDoc(userRef, user);
//       toast.success("SignUp Successful");
//       setName("");
//       setEmail("");
//       setPassword("");
//       setPhoneNumber("");
//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message);
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-white">
//       {loading && <Loader />}
//       <div className="bg-white px-10 py-10 rounded-xl">
//         {/* logo */}
//         <div className="flex justify-center mb-4">
//           <img src={signuplogo} alt="App Logo" className="w-30 h-20 object-contain" />
//         </div>

//         <div className="">
//           <h1 className="text-center text-black text-xl mb-4 font-bold">Signup</h1>
//         </div>
//         <div>
//           <input
//             type="text"
//             name="name"
//             className="bg-gray-400 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-black outline-none"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div>
//           <input
//             type="email"
//             name="email"
//             className="bg-gray-400 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-black outline-none"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div>
//           <input
//             type="password"
//             className="bg-gray-400 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-black outline-none"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             className="bg-gray-400 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-black outline-none"
//             placeholder="Phone Number"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//           />
//         </div>
//         <div className="flex justify-center mb-3">
//           <button
//             className="bg-blue-800 w-full text-white font-bold px-2 py-2 rounded-lg"
//             onClick={signup}
//           >
//             Signup
//           </button>
//         </div>
//         <div className="flex justify-center mb-3">
//           <button
//             className="bg-red-600 w-full text-white font-bold px-2 py-2 rounded-lg"
//             onClick={googleSignUp}
//           >
//             Sign Up with Google
//           </button>
//         </div>
//         <div>
//           <h2 className="text-black">
//             Have an account?{" "}
//             <Link className="text-blue-800 font-bold" to={"/login"}>
//               Login
//             </Link>
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;



// with google verification link
// import { useState, useContext } from "react";
// import { Link } from "react-router-dom";
// import {
//   auth,
//   googleProvider,
//   fireDB
// } from "../../firebase/FirebaseConfig";
// import {
//   createUserWithEmailAndPassword,
//   sendEmailVerification,
//   signInWithPopup
// } from "firebase/auth";
// import { addDoc, collection, Timestamp } from "firebase/firestore";
// import myContext from "../../context/data/myContext";
// import { toast } from "react-toastify";
// import Loader from "../../components/loader/Loader";
// import signuplogo from "../../assets/hyperlogo.png";

// function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");

//   const context = useContext(myContext);
//   const { loading, setLoading } = context;

//   // Google Sign-Up function
//   const googleSignUp = async () => {
//     setLoading(true);
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       const googleUser = result.user;

//       // Add user data to Firestore
//       const userDoc = {
//         name: googleUser.displayName || "Google User", // Fallback if displayName is null
//         uid: googleUser.uid,
//         email: googleUser.email || "",
//         phoneNumber: phoneNumber || "Not provided", // Optional: Use phone input if provided
//         time: Timestamp.now(),
//       };

//       const userRef = collection(fireDB, "users");
//       await addDoc(userRef, userDoc);

//       toast.success("Google Sign-Up Successful");
//       setLoading(false);
//     } catch (error) {
//       console.error("Google Sign-Up Error:", error);
//       toast.error(error.message || "An error occurred during Google Sign-Up.");
//       setLoading(false);
//     }
//   };

//   // Email/Password signup with email verification
//   const signup = async () => {
//     setLoading(true);

//     // Validation checks
//     if (!name || !email || !password || !phoneNumber) {
//       setLoading(false);
//       return toast.error("All fields are required!");
//     }

//     if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
//       setLoading(false);
//       return toast.error("Invalid phone number format. Must be 10 digits.");
//     }

//     try {
//       const result = await createUserWithEmailAndPassword(auth, email, password);

//       // Send email verification
//       await sendEmailVerification(result.user);
//       toast.success("Email has been confirmed. Please login");

//       // Add user to Firestore
//       const newUser = {
//         name: name,
//         uid: result.user.uid,
//         email: result.user.email,
//         phoneNumber: phoneNumber,
//         time: Timestamp.now(),
//       };
//       const userRef = collection(fireDB, "users");
//       await addDoc(userRef, newUser);

//       // Reset form fields
//       setName("");
//       setEmail("");
//       setPassword("");
//       setPhoneNumber("");
//       setLoading(false);
//     } catch (error) {
//       console.error("Sign-Up Error:", error);
//       toast.error(error.message || "An error occurred during Sign-Up.");
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-white">
//       {loading && <Loader />}
//       <div className="bg-white px-10 py-10 rounded-xl">
//         {/* logo */}
//         <div className="flex justify-center mb-4">
//           <img src={signuplogo} alt="App Logo" className="w-30 h-20 object-contain" />
//         </div>

//         <div>
//           <h1 className="text-center text-black text-xl mb-4 font-bold">Signup</h1>
//         </div>
//         <div>
//           <input
//             type="text"
//             name="name"
//             className="bg-gray-400 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-black outline-none"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div>
//           <input
//             type="email"
//             name="email"
//             className="bg-gray-400 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-black outline-none"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div>
//           <input
//             type="password"
//             className="bg-gray-400 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-black outline-none"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             className="bg-gray-400 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-black outline-none"
//             placeholder="Phone Number"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//           />
//         </div>
//         <div className="flex justify-center mb-3">
//           <button
//             className="bg-blue-800 w-full text-white font-bold px-2 py-2 rounded-lg"
//             onClick={signup}
//           >
//             Signup
//           </button>
//         </div>
//         <div className="flex justify-center mb-3">
//           <button
//             className="bg-red-600 w-full text-white font-bold px-2 py-2 rounded-lg"
//             onClick={googleSignUp}
//           >
//             Sign Up with Google
//           </button>
//         </div>
//         <div>
//           <h2 className="text-black">
//             Have an account?{" "}
//             <Link className="text-blue-800 font-bold" to={"/login"}>
//               Login
//             </Link>
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;


