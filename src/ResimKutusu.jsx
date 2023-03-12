import "./resim-kutusu.css"

function ResimKutusu(ozellikler){
    
    return (
        <div className="resim-kutusu">
        <img src={ozellikler.url} alt={ozellikler.alt}/>
        <h2>{ozellikler.sahip}</h2>
        <button>Paylaş</button>
        <button>Beğen</button>
      </div>

    )
}

export default ResimKutusu