import './style.css'
import React from "react";
import img from "./img/iPhone 15 Pro and iPhone 15 Pro Max.jpeg"
function CardComponents(){
    return(
        <div className="title">
               <div>
                   <img src={img} alt="apple" className="apple"/>
               </div>
                <div className="card-item">
                    <h2 className="apple-name">iPhone 15 Pro Max</h2>
                    <p className="apple-color">Цвет</p>
                    <div className="card-round">
                        <div className="card"></div>
                        <div className="card-1"></div>
                        <div className="card-3"></div>
                    </div>
                    <p className="memory">
                        память
                    </p>
                        <div className="container-gb">
                            <p className="gb">256gb</p>
                            <p className="gb">512gb</p>
                            <p className="gb">1tb</p>
                        </div>
                        <p className="model">
                            модель
                        </p>
                    <div className="container-model">
                        <p className='model-appel'>nano-SIM + eSIM</p>
                        <p className='model-appel'>nano-SIM + nano-SIM</p>
                        <p className='model-appel'>eSIM + eSIM</p>
                    </div>
                    <p className="price">
                        128 700 com  	&#128184;
                    </p>
                </div>
        </div>
    )

}
export default CardComponents