import "../Components/Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt, faUsers, faBell, faSquareCheck, faSearch, faCalendarAlt, faPerson } from '@fortawesome/free-solid-svg-icons'; // Importez plusieurs icônes en une seule fois
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import React, { useState } from 'react';
import { format } from "date-fns";
import { fr } from 'date-fns/locale';

const C_Header = ({type}) => {
   const [openDate, setOpenDate] = useState(false);
   const [date, setDate] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
      }
   ]);
   const [openOptions, setOpenOptions] = useState(false); // Ajout de openOptions
   const [options, setOptions] = useState({
      personnes: 5,
      adult: 0,
      salle: 0 // Ajout de salle dans l'objet options
   });

   const navigate = useNavigate()


   const handleOption = (nom, operation) => {
      setOptions((prev) => {
         return {
            ...prev,
            [nom]: operation === "i" ? prev[nom] + 1 : prev[nom] - 1,
         };
      });
   };

   const  handleSearch =()=>{
      navigate("/Apropos", {state:{}})
   }

   return (
      <div className="header">
         <div className={type === "apropos" ? "headerContainer aproposMode" : "headerContainer"}>
            <div className="headerlist">
               <div className="headerListItem active">
                  <FontAwesomeIcon icon={faClock} />
                  <span>Horloge</span>
               </div>
               <div className="headerListItem">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <span>Localisation</span>
               </div>
               <div className="headerListItem">
                  <FontAwesomeIcon icon={faUsers} />
                  <span>Personnes</span>
               </div>
               <div className="headerListItem">
                  <FontAwesomeIcon icon={faBell} />
                  <span>Notification </span>
               </div>
               <div className="headerListItem">
                  <FontAwesomeIcon icon={faSquareCheck} />
                  <span>Confirmation</span>
               </div>
                  
            </div>
            { type !=="apropos" &&
               <>
                  <h1 className="headerTitle">Une vie de réductions ? C'est du génie</h1>
                  <p className="headerDesc">
                     Accumulez des récompenses pour chaque réservation de
                     salle de réunion et bénéficiez d'une économie instantanée de 10 % à chaque utilisation
                  </p>
                  <button className="headerBtn">Se connecter/S'inscrire</button>
                  <div className="headerSearch">
                     <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faSearch} />
                        <input 
                           type="text" 
                           placeholder="Chercher des salles disponibles" 
                           className="headerSearchInput"
                        />
                     </div>
                     <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarAlt} /> 
                        <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "dd/MM/yyyy")} à ${format(date[0].endDate, "dd/MM/yyyy")} `}</span> 
                        {openDate && <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        locale={fr}
                        className="date"
                        />}
                     </div>
                     <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} />
                        <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.personnes} personne(s). ${options.adult} adulte(s). ${options.salle} salle(s)`}</span> 
                        {openOptions && <div className="options">
                           <div className="optionItem">
                              <span className="optionText">Personne</span>
                              <div className="optionCounter">
                                 <button className="optionCounterButton" onClick={()=>handleOption("personnes", "d")}>-</button>
                                 <span className="optionCounterNumber">{options.personnes}</span>
                                 <button className="optionCounterButton" onClick={()=>handleOption("personnes", "i")}>+</button>
                              </div>
                           </div>
                           <div className="optionItem">
                              <span className="optionText">adult</span>
                              <div className="optionCounter">
                                 <button className="optionCounterButton" onClick={()=>handleOption("adult", "d")}>-</button>
                                 <span className="optionCounterNumber">{options.adult}</span>
                                 <button className="optionCounterButton" onClick={()=>handleOption("adult", "i")}>+</button>
                              </div>
                           </div>
                           <div className="optionItem">
                              <span className="optionText">salle(s)</span>
                              <div className="optionCounter">
                                 <button className="optionCounterButton" onClick={()=>handleOption("salle", "d")}>-</button>
                                 <span className="optionCounterNumber">{options.salle}</span>
                                 <button className="optionCounterButton" onClick={()=>handleOption("salle", "i")}>+</button> 
                              </div>
                           </div>
                     </div>}
                     </div>
                     <div className="headerSearchItem">
                        <button className="headerBtn" onClick={handleSearch}>Recherche</button> 
                     </div>
                  </div>
               </>
            }      
         </div>    
      </div>
   );
}

export default C_Header;
