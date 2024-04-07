import C_Apropos from "../Components/C_Apropos";
import React from "react";
import C_Navbar from "../Components/C_Navbar";
import C_Header from "../Components/C_Header";
import "../Components/Header.css";
import "../pages/Apropos.css"

export default function Apropos() {
    return (
        <>
             <div>
                <C_Apropos />
                <C_Navbar/>
                <C_Header type="apropos"/>
                <div className="listContainer">
                    <div className="listWrapper">
                        <div className="listSearch">
                            <h1 className="listTitle">Search</h1>
                            <div className="lsItem">
                                <label>Destination</label>
                                <input type="text" />
                            </div>
                            <div className="lsItem">
                                <label>date d'arrivée</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="listResult"></div>

                    </div>

                </div>
           </div>
        </>
    );
}


