/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Categories.scss'


type categoriesType = {
    categories:string[],
    categorySel:string,
    clickCategorySelEvent:(category:string)=>void
}


const Categories = ({categories,categorySel,clickCategorySelEvent}:categoriesType) => {
    const clickStyle: React.CSSProperties = {textDecoration:'underline'}
    const nullStyle: React.CSSProperties = {}

    return (
        <div className='shop-categories'>                     
            <ul className='row'>
                <li className='col' key='All' style={'All'===categorySel?clickStyle:nullStyle}>
                    <a onClick={()=>clickCategorySelEvent('All')}>All</a>
                </li>
                {
                    categories.map((category)=>
                        <li className='col' key={category}  style={category===categorySel?clickStyle:nullStyle}> 
                            <a  onClick={()=> clickCategorySelEvent(category)}>{category}</a>
                        </li>
                    )
                }
            </ul>                 
        </div>
    )
}

export default Categories
