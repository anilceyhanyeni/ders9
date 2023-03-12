import "./section.css"
import ResimKutusu from "./ResimKutusu.jsx"

function Section() {

  return (
    <section id="resim-liste">

      <ResimKutusu url ="https://picsum.photos/id/0/150/150" alt="Laptop" sahip="Alejandro Escamilla"/>

      <ResimKutusu url="https://picsum.photos/id/10/150/150" alt="Kamp Görseli" sahip="Paul Jarvis" />
      
      <ResimKutusu url="https://picsum.photos/id/20/150/150" alt="Yağmur Görseli" sahip="Aleks Dorohovich"/>
      
      <ResimKutusu url="https://picsum.photos/id/25/150/150" alt="Cırcır Böceği Görseli" sahip="Alejandro Escamilla"/>

      <ResimKutusu url="https://picsum.photos/id/26/150/150" alt="Şehir Görseli" sahip="Vadim Sherbakov"/>
      
      <ResimKutusu url="https://picsum.photos/id/27/150/150" alt="Cafe Görseli" sahip="Yoni Kaplan-Nadel"/>

    </section>

  )
}

export default Section