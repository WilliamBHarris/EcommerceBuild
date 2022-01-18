import React from 'react'
import { Link } from 'react-router-dom'

const Showcase = () => {
    return (
        <div className='showcase'>
           <Link to='/products'><h1>View Inventory</h1></Link> 
        </div>
    )
}

export default Showcase
