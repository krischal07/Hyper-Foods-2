import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'

const Home = () => {
    const context = useContext(myContext)
    console.log(context)
    // const {name, rollno} = context
    // const {state, color} = context

  return (
    <Layout>
        Home
    </Layout>
  )
}

export default Home