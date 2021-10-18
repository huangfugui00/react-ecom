import React from 'react'
import './TagButton.scss'
const TagButton = () => {
    return (
        <div className="TagButton row gap-4">
            <button className="col tagButton-filter">
                <i className="bi bi-sort-down pe-2"/>
                <span>Filter</span>
            </button>
            <button className="col d-flex tagButton-search">
                <i className="bi bi-search pe-2"/>
                <span>Search</span> 
            </button>
        </div>
    )
}

export default TagButton
