import React from 'react'
import './iconText.scss'

type iconTextProp = {
    icon:string,
    text:string,
}

const IconText = ({icon,text}:iconTextProp) => {
    return (
        <div className="icon-text d-flex gap-2 align-items-center" >
            <i className={`bi ${icon}`}></i>
            <span>{text}</span>
        </div>
    )
}

export default IconText 
