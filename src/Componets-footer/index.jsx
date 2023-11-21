import "./style.css"
import React from "react";
import {findAllByDisplayValue} from "@testing-library/react";

function FotterComponets(){
        return(
            <div className="footer">
                <div className='footer-item1' >
                    <p className="Istore">Istore</p>
                    <span className="magazin">магазин техники apple бищкек</span>
                    <p className='time'>режим работы</p>
                    <p className="time-work">Пн - Вс 10-00 22-00</p>
                </div>
                    <div className="footer-item2">
                        <p className="production">продикция</p>
                        <ul className="ul-cotainer">
                            <li className="li-tem">  Mac</li>
                            <li className="li-tem">Ipad</li>
                            <li className="li-tem">Iphone</li>
                            <li className="li-tem">Watch</li>
                            <li className="li-tem">Гаджеты</li>
                        </ul>
                    </div>
                    <div className="footer-item3">
                        <p className="Kontakt">котакты</p>
                        <ul className="item-card">
                            <li className="card-li">
                                +996 (555) 802 000
                                +996 (505) 802 000
                            </li >
                            <li className="card-li">
                                пр. Манаса, 40 (пер. ул. Киевская)
                            </li>
                            <li className="card-li">
                                office@istore.kg
                            </li>
                        </ul>
                    </div>
            </div>
        )
}
export default FotterComponets