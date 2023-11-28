import '../assets/styles/Header.scss'
export const Header = () => {
  return (
    <header className="header">
      <h1 className="title">Servicio de Transporte Público</h1>

      <ul className="nav-list">
        <li className="nav-list_item">
          <div>
            Unidades
          </div>
        </li>
        <li className="nav-list_item">
          <div>
            Estaciones
          </div>
        </li>
        <li className="nav-list_item">
          <div>
            Registros
          </div>
        </li>
      </ul>
    </header>
  )
}
