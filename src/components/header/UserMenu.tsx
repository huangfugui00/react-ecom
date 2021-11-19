import React,{useState} from 'react'
import './userMenu.scss'
import {Link} from 'react-router-dom'
import config from '../../config/config'
import IconText from '../../components/IconText'

type userMenuProp = {
    userName:string,
    avatar:string,
}

const UserMenu = ({userName,avatar}:userMenuProp) => {
    const [isClick,setIsClick]=useState(false)
    const clickStyle: React.CSSProperties = {display:'block'}
    const nullStyle: React.CSSProperties = {display:'none'}
    

    return (
        <div className="dropdown">
            <img src={`${config.api}/${avatar}`} id="avatar" alt="Avatar" onClick={()=>setIsClick(!isClick)}/>
            <div id="dropwdown-content" style={isClick?clickStyle:nullStyle}>
                <Link to='/' className="my-link">
                    <div className="icon-text d-flex gap-2 align-items-center"  >
                        <img src={`${config.api}/${avatar}`} id="avatar" alt="Avatar"/>
                        <span>{userName}</span>
                    </div>
                </Link>
                <hr/>
                <Link to="/" className="my-link">
                <IconText icon="bi-heart" text='Favorite'/>
                </Link>
                <Link to="/" className="my-link">
                <IconText icon="bi-cart" text='Cart'/>
                </Link>
                <Link to="/" className="my-link">
                <IconText icon="bi-shop" text='Order'/>
                </Link>
            </div>
        </div>
    )
}

export default UserMenu
