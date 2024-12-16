import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'

const Home = () => {
    const context = useContext(myContext)
    console.log(context)
    // const {name, rollno} = context
    const {state, color} = context

  return (
    <Layout>
        <h1>Name: {state.name}</h1>
        <h1>RollNo: {state.rollno}</h1>
        <h1>MyColor: {color}</h1>
    </Layout>
  )
}

export default Home