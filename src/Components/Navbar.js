import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <div className='navbar'>
        <h2 onClick={()=>props.handleClick(false)}>
            <span className="brand-first">ALUBAM</span>
            <span className="brand-last">COLLECTIONS</span>
        </h2>
        <Link to={props.path}><button>{props.page}</button></Link>
    </div>
  )
}

export default Navbar