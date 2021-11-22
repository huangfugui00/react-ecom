import React,{useRef} from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import './myModal.scss'

type myModalProp={
    children:React.ReactNode
    open:boolean,
    closeEvent:()=>void
}

const MyModal = ({children,open,closeEvent}:myModalProp) => {
    const clickStyle: React.CSSProperties = {display:'block'}
    const nullStyle: React.CSSProperties = {display:'none'}

    const ref= useRef(null)
    useOnClickOutside(ref,closeEvent)

    return (
        <div className="my-modal" style={open?clickStyle:nullStyle} ref={ref}>
            {children}
        </div>
    )
}

export default MyModal
