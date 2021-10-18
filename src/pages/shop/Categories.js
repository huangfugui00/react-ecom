import React from 'react'
import './Categories.scss'

const Categories = ({categories}) => {
    return (
        <div className={categories}>                     
            <ul >
                <li >
                    <a onClick={()=>alert(1)}>All Products</a>
                </li>
                {
                    categories.map((category,index)=>
                        <li key={index}> 
                            <a>{category}</a>
                        </li>
                    )
                }
                <li>

                </li>
            </ul>                 
        </div>
    )
}

export default Categories
