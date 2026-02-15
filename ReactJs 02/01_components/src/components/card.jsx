import React from 'react'

const card = (props) => {
  return (
    
      <div className='card'>
        <img src={props.img} alt='broken img'/>
        <h1 className='head'>{props.user},{props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quis harum quam voluptatum ipsam dignissimos illum nisi rem, magnam consequatur.</p>
        <button>View Profile</button>
      </div>
   
  )
}

export default card
