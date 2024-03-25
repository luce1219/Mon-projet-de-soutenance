import C_Accueil from "../Components/C_Accueil"; // Assurez-vous d'utiliser C_Accueil ici
import C_Header from "../Components/C_Header";
import C_Navbar from "../Components/C_Navbar";

export default function Accueil() {
    return (
        <>
            <C_Navbar />
            <C_Header/>
            <C_Accueil /> {/* Utilisez C_Accueil ici */}
        </>
    );
}
