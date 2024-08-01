import React from "react";
import "./product.scss"
import image from "../../image/image 1.png"
import image1 from "../../image/image 2.png"
const data = [
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
    {
        id: 5,
        url: image,
        title: "Product name",
        price: 9.99
    },
    {
        id: 6,
        url: image1,
        title: "Fragrant Cinnamon",
        price: 9.99
    },
    {
        id: 7,
        url: image,
        title: "Summer Cherries",
        price: 9.99
    },
    {
        id: 8,
        url: image1,
        title: "Clean Lavander",
        price: 9.99
    },
]
const Product = () => {
    return (
        <div className="container">
            <div className="product__theme">
                <p className="product__p">Products</p>
                <p className="product__info">
                    Order it for you or for your beloved ones
                </p>
            </div>
            <div className="product__wrapper">
                {
                    data?.map((el) => (
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
export default Product