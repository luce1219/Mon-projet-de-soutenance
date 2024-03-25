
import '../Components/Navbar.css'
const C_Navbar = () => {
    return (
        <div className="Navbar">
            <div className="navContainer">
            <span className="logo">PeaceBoutique</span>   
            <div className="navItems">
                <button className="navButton">s'inscrire</button>
                <button className="navButton">se connecter</button>
            </div>
            </div>
        </div>
    );
}
    
export default C_Navbar; // Assurez-vous d'exporter sous le nom "Navbar"
