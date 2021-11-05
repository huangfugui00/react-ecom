import React from 'react'
import './Search.scss'

type serachProp={
    display:string,
    searchItem:string,
    searchChangeEvent:(searchItem:string)=>void,
}

const Search = ({display,searchItem,searchChangeEvent}:serachProp): JSX.Element => {
    return (
        <div className="shop-search" style={{display: display}}>
            <i className="bi bi-search"/>            
            {/* <input className=""   value={searchItem}  placeholder="Search"/> */}
            <input className=""  value={searchItem}  onChange={event => searchChangeEvent(event.target.value)} placeholder="Search"/>
        </div>
    )
}

export default Search
