import React from "react";
import "./hero.scss"
const Hero = () => {
    return(
        <div className="hero">
            <div className="hero__wrapper">
                <div className="hero__theme">
                    <p className="hero__ul">  🌱
                    </p>
                    <p className="hero__desc">The nature candle</p>
                    <p className="hero__info">All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments </p>
                </div>
                <div className="hero__btr">
                    <button className="hero__btr">Discovery our collection</button>
                </div>
            </div>
        </div>
    )
}
export default Hero
