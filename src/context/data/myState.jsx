import React, { useEffect, useState } from 'react'
import myContext from './myContext'
import { addDoc, collection, doc, onSnapshot, orderBy, query, QuerySnapshot, Timestamp } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { fireDB } from '../../firebase/FirebaseConfig';

const myState = (props) => {
   const [mode, setMode] = useState('light');

   const toggleMode = ()=>{
    if(mode === "light"){
        setMode("dark")
        document.body.style.backgroundColor = "rgb(14,24,39)"
    }
    else{
        setMode("light")
        document.body.style.backgroundColor = "white"
    }
   }

   const [loading, setLoading] = useState(false)

   const [products, setProducts] = useState({
    title:null,
    price:null,
    imageUrl:null,
    category:null,
    description:null,
    time:Timestamp.now(),
    date:new Date().toLocaleString(
      "en-US",
      {
        month:"short",
        day:"2-digit",
        year:"numeric"
      }
    )
   })

   const addProduct = async() =>{
      if(products.title===null || products.price===null || products.imageUrl === null || products.category === null || products.description=== null){
        return toast.error("All fields are required!!")
      }
      setLoading(true)
      try{
        //Adding product data to firebase
        const productRef = collection(fireDB,'products')
        await addDoc(productRef,products)

        toast.success("Added product successfully!")
        setTimeout(() => {
        window.location.href = '/dashboard';
          
        }, 800);
        getProductData();
        setLoading(false)
      }catch(error){
        console.log(error)
        setLoading(false)
      }
   }

   const [product, setProduct] = useState([])
   const getProductData = async ()=>{
    setLoading(true)
    try{
      const q = query(
        collection(fireDB,'products'),
        orderBy('time')
      )
      const data = onSnapshot(q,(QuerySnapshot) =>{
        let productArray = []
        QuerySnapshot.forEach((doc)=>{
          productArray.push({...doc.data(), id:doc.id})
        })
        setProduct(productArray)
        setLoading(false)
      })
      return () => data
    }catch(error){
      setLoading(false)

    }
   }

   useEffect(()=>{
      getProductData()
   },[])
  return (
    <myContext.Provider value={{mode,toggleMode,loading,setLoading,products,setProducts, addProduct,product}}>
        {props.children}
    </myContext.Provider>
  )
}

export default myState