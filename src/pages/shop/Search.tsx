import React from 'react'
import './Search.scss'

type serachProp={
    display:string;
    
}

const Search = ({display}:serachProp): JSX.Element => {
    return (
        <div className="shop-search" style={{display: display}}>
            <i className="bi bi-search"/>            
            <input className="" placeholder="Search"/>
        </div>
    )
}

export default Search
