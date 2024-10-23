import { NavLink } from "react-router-dom"
import logoLight from '../../assets/Logos/imagotipo-light-transparent.png'

const Navbar = () => {

  const activeStyle = 'underline underline-offset-4';

  return (
      <>
      <nav className="flex justify-between items-center fixed z-50 top-0 w-full py-2 px-8 shadow-lg bg-zinc-50">
        
        {/* Left Side */}
        <ul className="flex items-center gap-4">
          <li >
            <NavLink to="/">
              <img src={logoLight} alt="Logo de Mont Design" className="w-20" />
            </NavLink>
          </li>
          
          <li className="hover:text-yellow-800">
            <NavLink
              to="/all"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? activeStyle : ""
              }
            >
              All
            </NavLink>
          </li>
          <li className="hover:text-yellow-800">
            <NavLink
              to="/clothes"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? activeStyle : ""
              }
            >
              Clothes
            </NavLink>
          </li>
          <li className="hover:text-yellow-800">
            <NavLink
              to="/electronics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? activeStyle : ""
              }
            >
              Electronics
            </NavLink>
          </li>
          <li className="hover:text-yellow-800">
            <NavLink
              to="/furnitures"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? activeStyle : ""
              }
            >
              Furnitures
            </NavLink>
          </li>
          <li className="hover:text-yellow-800">
            <NavLink
              to="/toys"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? activeStyle : ""
              }
            >
              Toys
            </NavLink>
          </li>
          <li className="hover:text-yellow-800">
            <NavLink
              to="/others"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? activeStyle : ""
              }
            >
              Others
            </NavLink>
          </li>
        </ul>
        
        <hr />

        {/* Right Side */}
        <ul className="flex items-center gap-4">
          <li>
            <NavLink
              to="/my-account"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              MyAccount
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-order"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              MyOrder
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-orders"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              MyOrders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sign-in"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              SignIn
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