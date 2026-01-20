import React from 'react'
import "../App.css"

function Comunidades() {
  return (
    <div className='app-comunidades'>
      <nav className="navbar">
        <div className='navbar-logo'>NEBRIMATCH</div>
        <div className='navbar-menu'>
          <span>Comunidades</span>
          <span>Mis chats</span>
          <span>Perfil</span>
        </div>
      </nav>
      <section className="principal-content">
        <h1>Tablón de comunidades</h1>
        <p>¡Bienvenido!. Aquí aparecerán los grupos de estudio y profesores.</p>
        <div className="target-groups">
          <p>Cargando Comunidades...</p>
        </div>
      </section>
    </div>
  )
}

export default Comunidades