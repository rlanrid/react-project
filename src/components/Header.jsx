import React from 'react'
import { Link } from 'react-router-dom'
import nav from '../constants/index.js'

const Header = () => {
    return (
        <header id="header">
            <div className="header__wrap containerH">
                <div className="header__container">
                    <div className="header__logo">
                        <div className="logo__text">
                            <Link to="/">
                                Frontend Developer - W<i>oojoo</i><em>K<i>im</i></em>
                            </Link>
                        </div>
                    </div>
                    <nav className="nav">
                        <ul>
                            {nav.map((navItem, key) => (
                                <li key={key}>
                                    <Link to={navItem.url} className="nav__link">{navItem.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="nav__mobile__menu" id="navToggle" aria-controls="primary-menu" aria-expanded="false"
                        role="button">
                        <span></span>
                    </div>
                </div>
                <div className="header__line"></div>
            </div>
        </header>
    )
}

export default Header
