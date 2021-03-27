import React from 'react'
import { Link, Route } from 'react-router-dom'
import './style.css'

const MenuLink = ({ lable, to, exactOnly }) => {
    return (
        <Route path={to} exact={exactOnly} children={({ match }) => {
            let active = match ? "active" : ""

            return (
                <li className={active}>
                    <Link to={to} className="header--item">
                        {lable}
                    </Link>
                </li>
            )
        }} />
    )
}
const showMenu = (menu) => {
    let result = null
    result = menu.map((value, index) => {
        return (
            <MenuLink key={index} lable={value.lable} to={value.to} exactOnly={value.exact} />
        )
    })
    return result
}

const Header = (props) => {

    let menu = props.menu
    return (
        <div className="header">
            <div className="container">
                <nav className="header__content">
                    <Link to="/"><h3>Shop</h3></Link>
                    <ul className="header__list">
                        {showMenu(menu)}
                    </ul>

                </nav>
            </div>

        </div>
    )
}
export default Header
