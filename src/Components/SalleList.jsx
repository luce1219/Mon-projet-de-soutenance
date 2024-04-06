import "../Components/SalleList.css"

const SalleList = () => {
    return (
        <div className="salleList">
            <div className="salleListItem">
                <img src="/img2.jpg" alt="" className="salleListImg"/>
                <div className="sallelistTitles">
                    <h1>Salles de Réunion</h1>
                    <h2>10 Salles</h2>
                </div>
            </div>
            <div className="salleListItem">
                <img src="/img2.jpg" alt="" className="salleListImg"/>
                <div className="sallelistTitles">
                    <h1>Bureaux equipés</h1>
                    <h2>15 Salles</h2>
                </div>
            </div>
            <div className="salleListItem">
                <img src="/img2.jpg" alt="" className="salleListImg"/>
                <div className="sallelistTitles">
                    <h1>Salles de conférence</h1>
                    <h2>20 Salles</h2>
                </div>
            </div>

        </div>
    )
}


export default SalleList
