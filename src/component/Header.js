import '../App.css';

import React from 'react'

function App({count,setshow}) {
  return (
    <div className='flex sh' >
        <div className='headerh' onClick={()=>setshow(false)}>Home</div>
        <div className='logoname'> OnLine Shoping Store</div>
        <div className='headerh' onClick={()=>setshow(true)}>Cart
            <sup className='cartcount'>{count}</sup>
        </div>
    </div>
  )
}

export default App;