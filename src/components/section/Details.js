import React, { useState, useEffect, useCallback, useContext } from 'react'
import { DataContext } from '../Context'
import { Link } from 'react-router-dom'
import Colors from './Colors'
import './Details.css'

function Details(props) {
    const [product, setProducts] = useState([])
    const { addCart, products } = useContext(DataContext)

    const getProduct = useCallback(() => {
        if (props.match.params.id) {

            const data = products.filter(item => {
                return item._id === props.match.params.id
            });
            setProducts(data)
        }
    }, [props.match.params.id,products])

    useEffect(() => {
        getProduct();
    }, [getProduct])

    return (
        <React.Fragment>
            {
                product && product.map(item => (
                    <div className="details" key={item._id}>
                        <img src={item.src} alt="" />
                        <div className="box">
                            <div className="row">
                                <h2>{item.title}</h2>
                                <span>${item.price}</span>
                            </div>
                            <Colors colors={item.colors} />
                            <p>{item.description}</p>
                            <p>{item.content}</p>
                            <Link to="/cart" className="cart" onClick={() => addCart(item._id)}>
                                Add to cart
                            </Link>
                        </div>
                    </div>
                ))
            }
        </React.Fragment>
    )
}

export default Details;