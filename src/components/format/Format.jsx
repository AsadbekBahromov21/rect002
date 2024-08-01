import React from "react";
import "./format.scss"
import image from "../../image/image 1.png"
import image1 from "../../image/image 2.png"
const format = [
    {
        id: 1,
        url: image,
        title: "Spiced Mint",
        price: 9.99
    },
    {
        id: 2,
        url: image1,
        title: "Sweet Straweberry",
        price: 9.99
    },
    {
        id: 3,
        url: image,
        title: "Cool Blueberries",
        price: 9.99
    },
    {
        id: 4,
        url: image1,
        title: "Juicy Lemon",
        price: 9.99
    },
]
const Format = () => {
    return(
        <div className="container">
              <div className="product__theme">
                <p className="product__p">Popular</p>
                <p className="product__info">
                Our top selling product that you may like
                </p>
            </div>
            <div className="product__wrapper">
            {
                    format?.map((el) => (
                        <div key={el.id} className="product__box">
                            <div className="product__img">
                                <img src={el.url} alt="" />
                            </div>
                            <div className="product__order">
                                <p className="product__mint">{el.title}</p>
                                <p className="product__collect">{el.price}$</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Format