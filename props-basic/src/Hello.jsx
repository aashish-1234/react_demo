import React from 'react'

function Hello(props){
  return (
    <>
    <h1>hello {props.name} and age = {props.age}</h1>
    {props.children}
    </>
  )
}

export default Hello
