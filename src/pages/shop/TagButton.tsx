import React from 'react'
import './TagButton.scss'

type tagButtonProp ={
    clickSearchBtnEvent : ()=>void,
    clickFiltersBtnEvent: ()=>void,
}


const TagButton = ({clickSearchBtnEvent,clickFiltersBtnEvent}:tagButtonProp) => {
    return (
        <div className="TagButton row gap-4">
            <button className="col d-flex  tagButton-filter" onClick={clickFiltersBtnEvent} >
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
