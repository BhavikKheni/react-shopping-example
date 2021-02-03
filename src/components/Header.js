
import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { DataContext } from './Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faAlignJustify, faTimes } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
function Header() {
    const [toggle, setToggle] = useState(false);
    const { cart } = useContext(DataContext)
    const menuToggle = () => {
        setToggle((toggle) => !toggle)
    }

    return (
        <React.Fragment>
            <header>
                <div className="menu" onClick={menuToggle}>
                    <FontAwesomeIcon icon={faAlignJustify}></FontAwesomeIcon>
                </div>
                <div className="logo">
                    <h1><Link to="/">Shopping</Link></h1>
                </div>
                <nav>
                    <ul className={toggle ? "toggle" : ""}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/product">Product</Link></li>
                        <li className="close" onClick={menuToggle}>
                            <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                        </li>
                    </ul>
                    <div className="nav-cart">
                        <span>{cart.length}</span>
                        <Link to="/cart">
                            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                        </Link>
                    </div>
                </nav>
            </header>
        </React.Fragment>
    )
}

export default Header;