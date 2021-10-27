import React from 'react'
import './TagButtons.scss'

type tagButtonsProp ={
    tagButtonSel:string,
    setTagButtonSel:(tabButtonSel:string)=>void
}

const TagButtons = ({tagButtonSel,setTagButtonSel}:tagButtonsProp):JSX.Element => {
    const clickStyle: React.CSSProperties = {
        backgroundColor:'rgba(103,117,214,0.8)',
        color:'white'
    }
    const nullStyle: React.CSSProperties = {}

    return (
        <div className="tag-buttons d-flex">
            <button onClick={()=>setTagButtonSel('description')}
            style={tagButtonSel==='description' ? clickStyle:nullStyle}
            >Description</button>
            <button  onClick={()=>setTagButtonSel('comments')}
            style={tagButtonSel==='comments' ? clickStyle:nullStyle}
            >Comments</button>
        </div>
    )
}

export default TagButtons
