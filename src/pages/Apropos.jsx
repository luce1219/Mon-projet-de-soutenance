import React from "react";
import { useLocation } from "react-router-dom"; // Importez useLocation depuis react-router-dom
import C_Apropos from "../Components/C_Apropos";
import C_Navbar from "../Components/C_Navbar";
import C_Header from "../Components/C_Header";
import "../Components/Header.css";
import "../pages/Apropos.css";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import Rechercher from "../Components/Rechercher";




export default function Apropos() {
    const location = useLocation(); // Utilisez useLocation dans votre composant
    const [destination,setDestination] = useState(location.state ? location.state.destination : '');
    const [date,setDate] = useState(location.state ? location.state.date : [{ startDate: new Date(), endDate: new Date() }]);
    const [options,setOptions] = useState(location.state ? location.state.options : { personnes: 0, adult: 0, salle: 0 });
    const [openDate,setOpenDate] = useState(false);



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
                                <input placeholder={destination}  type="text" />
                            </div>
                            <div className="lsItem">
                                <label>date d'arrivée</label>
                                <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} à ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                                {openDate && (
                                    <DateRange
                                        onChange={(item) => setDate([item.selection])}
                                        minDate={new Date()} 
                                        ranges={date}
                                    />
                                )}

                            </div>
                            <div className="lsItem">
                                <label>Options</label>
                                <div className="lsOptions">
                                    <div className="lsOptionItem">
                                        <span className="lsOptionText">
                                            Prix minimum <small>par droit</small>
                                        </span>
                                        <input type="number" className="lsOptionInput"/>

                                    </div>
                                    <div className="lsOptionItem">
                                        <span className="lsOptionText">
                                            Prix maximum <small>par droit</small>
                                        </span>
                                        <input type="number" className="lsOptionInput"/>

                                    </div>
                                    <div className="lsOptionItem">
                                        <span className="lsOptionText">
                                        Personnes 
                                        </span>
                                        <input type="number" min={0} className="lsOptionInput" placeholder={options.personnes}/>
                                        
                                    </div>
                                    <div className="lsOptionItem">
                                        <span className="lsOptionText">
                                        adult
                                        </span>
                                        <input type="number" min={1} className="lsOptionInput" placeholder={options.adult}/>

                                    </div>
                                    <div className="lsOptionItem">
                                        <span className="lsOptionText">
                                            salle
                                        </span>
                                        <input type="number" min={1} className="lsOptionInput" placeholder={options.salle}/>

                                    </div>
                               </div>   
                            </div>
                            <button>Recherche</button> 
                        </div>
                        <div className="listResult">
                            <Rechercher/>
                            <Rechercher/>
                            <Rechercher/>
                            <Rechercher/>
                            <Rechercher/>
                            <Rechercher/>
                            <Rechercher/>
                            <Rechercher/>
                            <Rechercher/>
                        </div>

                    </div>

                </div>
           </div>
        </>
    );
}
