import React from 'react'
import './style.css'
import { cancelProduct, changeProduct } from '../../actions'
import { useSelector, useDispatch } from 'react-redux'

const Cart = () => {
    const cartProduct = useSelector(state => state.hobby.newProduct)
    const dispatch = useDispatch()

    const showCart = (cartProduct) => { 
        let result = null
        result = cartProduct.map((value, index) => {

            const onReduce = (value,id) =>{
                if(id === value.id && value.number > 0){
                    value.number = value.number - 1
                   
                    const action = changeProduct(value)
                    dispatch(action)
                }           
            }
            const onIncrease = (id) =>{
                if(id === value.id){
                   
                    value.number = value.number + 1
                   
                    const action = changeProduct(value)
                    dispatch(action)
                }
            }           

            let money = Number(value.price * value.number);
            money = money.toLocaleString('vi', { style: 'currency', currency: 'VND' })

            return (
                <div key={index} className="cart__content">
                    <div className="cart__img">
                        <div className="cart__img--item">
                            <img src={value.img} alt="" />
                        </div>
                    </div>
                    <div className="cart__item">
                        <h3>{value.name}</h3>
                        <p>số lượng: {value.number}</p>
                        <div>
                            <button onClick={() =>onReduce(value,value.id)} className="cart__reduce">-</button>
                            <button onClick={() =>onIncrease(value.id)} className="cart__increase">+</button>
                        </div>
                        <p>giá sản phẩm : {money} </p>
                        <div className="cart__button">
                            <button className="cart__buy">thanh toán</button>
                            <button onClick={() => onCancelProduct(index)} className="cart__cancel">hủy hàng</button>
                        </div>
                    </div>
                </div>
            )
        })
        return result
    }
    const onCancelProduct = (value) => {
        const action = cancelProduct(value)
        dispatch(action)
    }
    return (
        <div className="cart">
            <div className="container">
                <h2>Các Sản Phẩm Bạn Đã Mua</h2>
                {showCart(cartProduct)}
            </div>
        </div>
    )
}

export default Cart
