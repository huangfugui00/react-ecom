import React from 'react'
import './Search.scss'

const Search = ({display}) => {
    return (
        <div className="shop-search" style={{display: display}}>
            <i className="bi bi-search"/>            
            <input className="" placeholder="Search"/>
        </div>
    )
}

export default Search
