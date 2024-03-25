import "../Components/Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt, faUsers, faBell, faSquareCheck } from '@fortawesome/free-solid-svg-icons'; // Importez plusieurs icônes en une seule fois


const C_Header = () => {
   return (
      <div className="header">
         <div className="headerContainer">
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
                  <span>confirmation</span>
               </div>
                  
            </div>
            <h1 className="headerTitle">Une vie de réductions ? C'est du génie</h1>
            <p className="headerDesc">
               Accumulez des récompenses pour chaque réservation de
               salle de réunion et bénéficiez d'une économie instantanée de 10 % à chaque utilisation
            </p>
            <button className="headerBtn">Se connecter/S'inscrire</button>
         </div>    
      </div>
   );
}

export default C_Header;
