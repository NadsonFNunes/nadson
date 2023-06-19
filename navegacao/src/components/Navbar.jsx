import { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import AuthContext from "../contexts/AuthContext"
import './Navbar.css'

export default function Navbar(props) {
    const navigate = useNavigate()
    const { userID, logout } = useContext(AuthContext);
    const perfil = `perfil/${userID}`

    function handleClick(event) {
        logout();
        navigate('/login')
    }

    return (
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to={perfil}>Perfil</NavLink></li>
            <li><button onClick={handleClick}>Sair</button></li>
        </ul>
    )
}