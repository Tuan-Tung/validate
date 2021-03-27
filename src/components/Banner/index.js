import React from 'react'
import './style.css'

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="banner__content">
                    <div className="banner__left">
                        <p>Cảm hứng mới 2020</p>
                        <h1>Thời Trang Nam</h1>
                        <p>Xu hướng từ bộ sưu tập phong cách thời trang</p>
                        <div>
                            <button className="banner__button">mua hàng</button>
                        </div>
                    </div>
                    <div className="banner__right">
                        <img src="https://res-console.cloudinary.com/dkzpakm7v/thumbnails/v1/image/upload/v1608865312/c2FtcGxlcy9hbmgvaW1nL8Ohby1raG9hYy1uYW0xX3B5cnJnbg==/preview" alt=""></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
