function Header() {
  const uygulamaAdi = "ModApp"

  console.log("Merhaba ben header")

  return (
    <header className='flex-kutu'>
      <h1>{uygulamaAdi}</h1>
      <p>İletişim bilgileri</p>
    </header>
  )
}

export default Header