import React, { useContext } from 'react'
import { DataContext } from '../Context';
import { Link } from 'react-router-dom';
import Colors from './Colors'
import './Cart.css'
function Cart() {
    const { cart, increase,reduction,removeProduct,total} = useContext(DataContext)
    return (
        <React.Fragment>
            {
                cart.length === 0 && 'No records found'
            }
             {
                        cart.map(item =>(
                            <div className="details cart" key={item._id}>
                                <img src={item.src} alt=""/>
                                <div className="box">
                                    <div className="row">
                                        <h2>{item.title}</h2>
                                        <span>${item.price * item.count}</span>
                                    </div>
                                    <Colors colors={item.colors}/>
                                    <p>{item.description}</p>
                                    <p>{item.content}</p>
                                    <div className="amount">
                                        <button className="count" onClick={() => reduction(item._id)}> - </button>
                                        <span>{item.count}</span>
                                        <button className="count" onClick={() => increase(item._id)}> + </button>
                                    </div>
                                </div>
                                <div className="delete" onClick={() => removeProduct(item._id)}>X</div>
                            </div>
                        ))
                    }
                     <div className="total">
                        <h3>Total: ${total}</h3>
                    </div>
        </React.Fragment>
    )
}

export default Cart;