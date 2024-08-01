import React from "react";
import "./some.scss"
import somefoto from "../../image/img.png"
import somefoto1 from "../../image/img1.png"
import somefoto2 from "../../image/img2.png"
import { IoStarOutline } from "react-icons/io5";
const somebox = [
    {
        id: 1,
        url: somefoto,
        title: "“I love it! No more air fresheners”",
        info: "Luisa"
    },
    {
        id: 2,
        url: somefoto1,
        title: "“Raccomended for everyone”",
        info: "Edoardo"
    },
    {
        id: 3,
        url: somefoto2,
        title: "“Looks very natural, the smell is awesome”",
        info: "Mart"
    },
]
const Some = () => {
    return (
        <div className="some">
            <div className="container">
                <div className="some__soy">
                    <p className="some__info">Testimonials</p>
                    <p className="some__p">Some quotes from our happy customers</p>
                </div>
                <div className="some__wrapper">
                    {
                        somebox?.map((el) => (
                            <div key={el.id} className="some__box">
                                <div className="some__img">
                                    <img src={el.url} alt="" />
                                    <div className="some__icon">
                                        <IoStarOutline className="icon" />
                                        <IoStarOutline className="icon" />
                                        <IoStarOutline className="icon" />
                                        <IoStarOutline className="icon" />
                                        <IoStarOutline />
                                    </div>
                                </div>
                                <div className="some__content">
                                    <p className="some__desc">{el.title}</p>
                                    <p className="some__fors">{el.info}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
export default Some