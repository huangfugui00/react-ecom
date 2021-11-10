import React, { useEffect,useState } from 'react'
import './alert.scss'
type alertProp = {
    message:string
}
const Alert = ({message}:alertProp) => {

    const alertStyle: React.CSSProperties = {display:'flex'}
    const nullStyle: React.CSSProperties = {display:'none'}
    const [show,setShow]= useState(false)
    useEffect(() => {
        if(message===''){
            setShow(false)
        }
        else{
            setShow(true)
            setTimeout(() => {
                setShow(false)
            }, 2000)
        }   
    }, [message])

    return (
        <div className="alert alert-primary my-alert" style={show?alertStyle:nullStyle} role="alert">
            {message}
        </div>
    )
}

export default Alert
