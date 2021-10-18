import React from 'react'
import './TagButton.scss'
const TagButton = () => {
    return (
        <div className="TagButton">
            <button>
                <i className="bi bi-menu"/>
                <span>Filter</span>
            </button>
                <i className="bi bi-search"/>
                <span>Search</span> 
            <button></button>
        </div>
    )
}

export default TagButton
