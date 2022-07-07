import "./sidebar.styles.scss"
import { Link, NavLink } from "react-router-dom"
import LogoN from "../../assets/img/logoN.png"
import subLogo from "../../assets/img/logoSub.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faHome, faUser, faLaptop } from "@fortawesome/free-solid-svg-icons"

const Sidebar = () => {
    return( 
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img src={LogoN} alt="Logo" />
                <img className="sub-logo" src={subLogo} alt="Just Nick" />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a 
                        href="https://www.linkedin.com/in/nicolas-salazar-albistur-8b363645/" 
                        target='_blank' 
                        rel='noreferrer'>
                            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                        </a>
                </li>
                <li>
                    <a 
                        href="https://github.com/emosturi" 
                        target='_blank' 
                        rel='noreferrer'>
                            <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                        </a>
                </li>
                <li>
                    <a 
                        href="https://www.codewars.com/users/emosturi" 
                        target='_blank' 
                        rel='noreferrer'>
                            <FontAwesomeIcon icon={faLaptop} color='#4d4d4e' />
                    </a>
                </li>
            </ul>
      </div>
    )
}

export default Sidebar