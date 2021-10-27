import React from 'react'

type commentType ={
    tagButtonSel:string,
}

const Comments = ({tagButtonSel}:commentType) : JSX.Element=> {
    const clickStyle: React.CSSProperties = {}
    const nullStyle: React.CSSProperties = {display:'none'}
    return (
        <div style={tagButtonSel==='comments'?clickStyle:nullStyle}>
            Comment
        </div>
    )
}

export default Comments
