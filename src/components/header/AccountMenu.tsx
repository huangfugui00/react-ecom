import React,{ useState} from 'react'
import './accountMenu.scss'
import {Link} from 'react-router-dom'
import config from '../../config/config'
import IconText from '../../components/IconText'
import MyMenu from './MyMenu'

type AccountMenuProp = {
    userName:string,
    avatar:string,
}


const AccountMenu = ({userName,avatar}:AccountMenuProp) => {
    const [isClick,setIsClick]=useState(false)
    const closeEvent = ()=>{setIsClick(false)}
    return (
        <div className="account-menu" >
            <img src={`${config.api}/${avatar}`} id="avatar" alt="Avatar" onClick={()=>setIsClick(!isClick)} />
            <MyMenu open={isClick} closeEvent={closeEvent} >
                <Link to='/' className="my-link">
                    <div className="icon-text d-flex gap-2 align-items-center"  >
                        <img src={`${config.api}/${avatar}`} id="avatar" alt="Avatar"/>
                        <span>{userName}</span>
                    </div>
                </Link>
                <hr/>
                <Link to="/favorite" className="my-link" >
                <IconText icon="bi-heart" text='Favorite'/>
                </Link>
                <Link to="/cart" className="my-link">
                <IconText icon="bi-cart" text='Cart'/>
                </Link>
                <Link to="/orderList" className="my-link">
                <IconText icon="bi-shop" text='Order'/>
                </Link>
            </MyMenu>              
        </div>
    )
}

export default AccountMenu
