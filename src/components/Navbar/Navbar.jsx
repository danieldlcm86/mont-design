import { NavLink } from "react-router-dom"
import logoLight from '../../assets/Logos/imagotipo-light-transparent.png'

const Navbar = () => {

  const activeStyle = 'underline underline-offset-4';

  return (
      <>
      <nav className="flex justify-between items-center fixed z-50 top-0 w-full py-1 px-8 bg-zinc-50 overflow-visible mb-0">
        
        {/* Left Side */}
        <ul className="flex items-center gap-4 font-montserrat">
          <li >
            <NavLink to="/">
              <img src={logoLight} alt="Logo de Mont Design" className="w-20" />
            </NavLink>
          </li>
          
          <li className="hover:text-goldMont hover:font-medium">
            <NavLink
              to="/muebles"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? activeStyle : ""
              }
            >
              Muebles
            </NavLink>
          </li>
          <li className="hover:text-goldMont hover:font-medium">
            <NavLink
              to="/escritorios"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? activeStyle : ""
              }
            >
              Escritorios
            </NavLink>
          </li>
          <li className="hover:text-goldMont hover:font-medium">
            <NavLink
              to="/comedores"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? activeStyle : ""
              }
            >
              Comedores
            </NavLink>
          </li>
          <li className="hover:text-goldMont hover:font-medium">
            <NavLink
              to="/sobre-nosotros"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? activeStyle : ""
              }
            >
              ¿Quiénes somos?
            </NavLink>
          </li>

        </ul>
        
        <hr />

        {/* Right Side */}
        <ul className="flex items-center gap-4 font-montserrat">
          <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Iniciar sesión
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              🛒 0
            </NavLink>
          </li>
        </ul>

      </nav>
      </>
  )
}

export default Navbar