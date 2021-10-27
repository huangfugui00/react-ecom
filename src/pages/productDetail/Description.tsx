import React from 'react'

type descriptionProp = {
    description:string
    tagButtonSel:string
}

const Description = ({description,tagButtonSel}:descriptionProp): JSX.Element=> {
    const clickStyle: React.CSSProperties = {}
    const nullStyle: React.CSSProperties = {display:'none'}

    return (
        <div style={tagButtonSel==='description'?clickStyle:nullStyle}>
            {description}
        </div>
    )
}

export default Description
