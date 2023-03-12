import "./mod-kutusu.css"

function ModKutusu(ozellikler){
    
    return (
        <div className="mod-kutusu">
        <img src={ozellikler.url} alt={ozellikler.alt}/>
        <h2>{ozellikler.modAdi}</h2>
      </div>

    )
}

export default ModKutusu