import React from 'react'

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer__wrap containerH">
                <div className="footer__logo">
                    <a href="#">
                        Frontend Developer - WK
                    </a>
                </div>
                <div className="footer__nav">
                    <ul>
                        <li><a href="#about" className="nav__link">About me</a></li>
                        <li><a href="#port" className="nav__link">Work</a></li>
                        <li><a href="#contact" className="nav__link">Contact</a></li>
                    </ul>
                </div>
                <div className="footer__made">
                    Crafted With Code
                </div>
            </div>
        </footer>
    )
}

export default Footer
