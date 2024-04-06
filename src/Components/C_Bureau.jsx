import "../Components/Bureau.css"

const C_Bureau = () => {
    return (
        <div className="bureau">
            <h1 className="bureauTitle">Gagner du temps, économiser de l'argent</h1>
            <span className="bureauDesc">Inscrivez-vous, nous vous enverrons les meilleures offres</span>
            <div className="bureauInputContainer">
                <input type="text" placeholder="Votre e-mail"/>
                <button>S'abonner</button>
            </div>
        </div>
    )
}


export default C_Bureau