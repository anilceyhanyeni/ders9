import "./section.css"
import ModKutusu from "./ModKutusu.jsx"

function Section() {

  return (
    <section id="mod-liste">

      <ModKutusu url ="https://lipsum.app/id/15/150x150" alt="Orman Görseli" modAdi="Orman"/>

      <ModKutusu url="https://lipsum.app/id/25/150x150" alt="Kamp Görseli" modAdi="Kamp Ateşi" />
      
      <ModKutusu url="https://lipsum.app/id/35/150x150" alt="Yağmur Görseli" modAdi="Yağmur"/>
      
      <ModKutusu url="https://lipsum.app/id/45/150x150" alt="Cırcır Böceği Görseli" modAdi="Cırcır Böceği"/>

      <ModKutusu url="https://lipsum.app/id/55/150x150" alt="Şehir Görseli" modAdi="Şehir"/>
      
      <ModKutusu url="https://lipsum.app/id/65/150x150" alt="Cafe Görseli" modAdi="Cafe"/>

    </section>

  )
}

export default Section