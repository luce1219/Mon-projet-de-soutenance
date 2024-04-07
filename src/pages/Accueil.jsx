import C_Accueil from "../Components/C_Accueil"; // Assurez-vous d'utiliser C_Accueil ici
import C_Contact from "../Components/C_Contact";
import C_Header from "../Components/C_Header";
import C_Navbar from "../Components/C_Navbar";
import "../pages/Accueil.css"
import SalleList from "../Components/SalleList";
import ListeFuture from "../Components/ListeFuture";
import C_Bureau from "../Components/C_Bureau";
import C_Footer from "../Components/C_Footer";
export default function Accueil() {
    return (
        <>
            <div>
                <C_Navbar />
                <C_Header/>
                <C_Accueil /> {/* Utilisez C_Accueil ici */}
                <div className="AccueilContainer">
                    <C_Contact/> 
                    <h1 className="accueilTitle">Browse by prospety type</h1>

                    <SalleList/> 
                    
                    <h1 className="accueilTitle">Homes guest love</h1>

                    <ListeFuture/>

                    <C_Bureau/>
                    <C_Footer/>
                    

                    
                    
                </div>
                
            </div>
               
        </>
    );
}
