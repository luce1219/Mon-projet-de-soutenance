import "../Components/Rechercher.css"

const Rechercher = () => {
    return(
        <div className="Rechercher">
            <img src="/img2.jpg" 
                alt="" 
                className="sImg"

            />
            <div className="siDesc">
                <h1 className="siTitle">Nos coworking Salle de Réunion "Lumière du Lac"</h1>
                <span className="siDistance">centre-ville (renovation)</span>
                <span className="siTaxiOp">La visite est Gratuit</span>
                <span className="sallTitle">
                  salle de réunion (Wi-Fi ,dame de ménage, imprimante, scanne, salle climatisé, café)
                </span>
                <span className="siFutures">
                studio entier +1 salle de bain +21m2 1 lit double
                </span>
                <span className="siAnnuleOp">Annulation gratuite</span>
                <span className="siAnnuleOpSsallTitle">
                vous pouvez annuler plus tard, alors regardez ce prix avantageux dès aujourd'hui !

                </span>

            </div>
            <div className="siDetails">
                <div className="siSalle">
                    <span>Excelent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTests">
                    <span className="siPrix">15000fcfa/heure</span>
                    <span className="siTaxOp">1Comprend les taxes et les frais</span>
                </div>
            </div>
        </div>
    )
}

export default Rechercher