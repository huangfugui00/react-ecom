import React from 'react'
import './Categories.scss'

const Categories = ({categories}) => {
    return (
        <div className='categories '>                     
            <ul className='row'>
                <li className='col'>
                    All
                </li>
                {
                    categories.map((category,index)=>
                        <li className='col' key={index}> 
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
