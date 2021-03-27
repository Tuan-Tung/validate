import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './style.css'
import { showAllProduct, showDetailProduct } from '../../actions'

const Products = () => {
    const products = useSelector(state => state.hobby.list)
    const category = useSelector(state => state.hobby.category)
    const checkCategory = useSelector(state => state.hobby.activeId)
    const [currentCategory, setCurrentCategory] = useState(0)
    const dispatch = useDispatch()

    const showProduct = (product) => {
        let productCategory = []
        let result = null
        let categoryActive = checkCategory

        // if (categoryActive) {                            //dùng Map
        //      product.map((item) => {
        //         if(categoryActive === item.category){
        //             productCategory.push(item)
        //         }    
        //         return productCategory
        //     })
        // }
        if (categoryActive) {
            product.forEach((item) => {                        //dùng ForEach
                if (categoryActive === item.category) {
                    productCategory.push(item)
                }
                return productCategory
            })
        }
        else {
            productCategory = product
        }

        result = productCategory.map((value, index) => {
            return (
                <div key={index} className="col-lg-4">
                    <div className="product__img">
                        <img className="product__img__item" src={value.img} alt=""></img>
                    </div>
                    <div className="product__content">
                        <p className="product__title">{value.name}</p>
                        <p className="product__price">giá:{value.price}đ</p>
                    </div>
                    <div className="product__button">
                        <Link to={`/products`} onClick={() => onBuy(value)}>
                            <button className="product__buy">mua</button>
                        </Link>

                        <Link to={`/products/${value.id}/detail`}>
                            <button className="product__view">chi tiết</button>
                        </Link>
                    </div>
                </div>
            )
        }
        )
        return result
    }
    const onBuy = (values) => {
        const action = showDetailProduct(values)
        dispatch(action)
    }

    const showCategory = (category) => {
        let result = null
        result = category.map((value, index) => {
            return (
                <button
                    key={index}
                    className={currentCategory === index ? 'category active' : 'category'}
                    onClick={() => onCategory(setCurrentCategory, index, value)}
                >
                    {value}
                </button>
            )
        })
        return result;
    }

    const onCategory = (setCurrentCategory, index, value) => {
        setCurrentCategory(index)
        const action = showAllProduct(value)
        dispatch(action)
    }

    return (
        <div className="product">
            <div className="container">
                <div>
                    {showCategory(category)}
                </div>
                <div className="row">
                    {showProduct(products)}
                </div>
            </div>
        </div>
    )
}

export default Products
