import React from 'react'
import './navBread.scss'
const NavBread = () => {
    return (
        <div className="nav-bread">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Library</li>
                </ol>
            </nav>
        </div>
    )
}

export default NavBread
