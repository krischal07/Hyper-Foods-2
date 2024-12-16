import React from 'react'
import myContext from './myContext'

const myState = (props) => {
    const state =  {
        name: "Krischal Shrestha",
        rollno: 7
    }
    const color = 'red'
  return (
    <myContext.Provider value={{state,color}}>
        {props.children}
    </myContext.Provider>
  )
}

export default myState