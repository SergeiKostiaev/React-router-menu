import {NavLink} from "react-router-dom"

export default function Menu() {
    const isActive = 'menu__item menu__item-active';
    const isNoActive = 'menu__item';
    return(
      <nav className="menu">
        <NavLink to="/" className={(navData) => navData.isActive ? isActive : isNoActive}>Главная</NavLink>
        <NavLink to="/drift" className={(navData) => navData.isActive ? isActive : isNoActive}>Дрифт-такси</NavLink>
        <NavLink to="/timeattack" className={(navData) => navData.isActive ? isActive : isNoActive}>Time Attack</NavLink>
        <NavLink to="/forza" className={(navData) => navData.isActive ? isActive : isNoActive}>Forza Karting</NavLink>
      </nav>
    )
}