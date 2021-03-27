import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import './style.css'
import { showDetailProduct } from '../../actions'

const DetailPAge = (props) => {
    const match = props.match.match.params.id

    const productDetail = useSelector(state => state.hobby.list)
    const dispatch = useDispatch()

    let result = {}
    for (const value of productDetail) {
        if (value.id === Number(match)) {
            result = value
        }
    }
    const onBuy = (values) => {
        const action = showDetailProduct(values)
        dispatch(action)
    }

    return (
        <div className="detail__product">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-6">
                        <img src={result.img} alt="" />
                    </div>
                    <div className="col-xl-6">
                        <div className="detail__content">
                            <h3 className="detail__title">
                                Chi tiết sản phẩm: {result.name}
                            </h3>
                            <p className="detail__item">
                                Thiết kế uyển chuyển nhưng chắc chắn với phần cage bằng nhựa ôm trọn thân giày.
                                Đôi giày cũng được đánh giá cao về công nghệ khi hợp tác với Continental
                                (hãng sản xuất lốp xe của Đức), BASF (hãng hóa chất lớn nhất Thế Giới) và
                                AIT tạo ra một bộ đế Boost cao cấp.
                            </p>
                            <div className="price">
                                <p>{result.price} đ</p>
                            </div>
                            <Link to="/products">
                                <button onClick={() => onBuy(result)} className="detail__button">Mua hàng</button>
                            </Link>
                        </div>
                        <div className="sale__product">
                            <div className="sale__product__item">
                                <h4>KHUYẾN MÃI KHI NHẬN HÀNG</h4>
                                <p>Miễn phí ship hàng toàn quốc cho đơn hàng trên 2 triệu.</p>
                                <p>Với đơn hàng dưới 2 triệu, phí ship đồng giá 30k.</p>
                                <p>Nhận hàng và kiểm tra trước khi thanh toán.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailPAge
