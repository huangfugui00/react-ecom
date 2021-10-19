import React from 'react'
import './TagButton.scss'
const TagButton = ({clickSearchBtnEvent,clickFiltersBtnEvent}) => {
    return (
        <div className="TagButton row gap-4">
            <button className="col tagButton-filter" onClick={clickFiltersBtnEvent} >
                <i className="bi bi-sort-down pe-2"/>
                <span>Filter</span>
            </button>
            <button className="col d-flex tagButton-search" onClick={clickSearchBtnEvent}>
                <i className="bi bi-search pe-2"/>
                <span>Search</span> 
            </button>
        </div>
    )
}

export default TagButton
