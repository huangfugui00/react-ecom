import React,{useRef} from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import './myMenu.scss'

type myMenuProp={
    children:React.ReactNode
    open:boolean,
    closeEvent:()=>void
}

const MyMenu = ({children,open,closeEvent}:myMenuProp) => {
    const ref= useRef(null)
    useOnClickOutside(ref,closeEvent)

    const clickStyle: React.CSSProperties = {display:'block'}
    const nullStyle: React.CSSProperties = {display:'none'}
    return (
           <div className="my-menu" style={open?clickStyle:nullStyle} ref={ref}>
            {children}
           </div>
    )
}

export default MyMenu
