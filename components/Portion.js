import React from 'react'

const Portion = (props) => {
    console.log(props)
  return (
    <div>{props.portion.name}</div>
  )
}

export default Portion