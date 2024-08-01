import React from "react";
import "./clean.scss"
import clean1 from "../../image/image2.png"
const Clean = () => {
    return (
        <div className="clean">
            <div className="container">
                <div className="clean__wrapper">
                    <div className="clean__box">
                        <div className="clean__soy">
                            <p className="clean__info">Clean and fragrant soy wax</p>
                            <p className="clean__p">Made for your home and for your wellness</p>
                        </div>
                        <div className="clean__befor">
                            <p className="clean__oco">Eco-sustainable:<span className="clear__span">All recyclable materials, 0% CO2 emissions</span></p>
                            <p className="clean__oco">Eco-sustainable:<span className="clear__span">All recyclable materials, 0% CO2 emissions</span></p>
                            <p className="clean__oco">Eco-sustainable:<span className="clear__span">All recyclable materials, 0% CO2 emissions</span></p>
                            <p className="clean__oco">Eco-sustainable:<span className="clear__span">All recyclable materials, 0% CO2 emissions</span></p>
                        </div>
                        <div className="clean__btr">
                            <button className="clear__button">Learn more</button>
                        </div>
                    </div>
                    <div className="clean__img">
                        <img src={clean1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Clean