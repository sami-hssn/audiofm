import React, { useContext, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';
import { BunnyIcon, Hamburger, Close, Profile } from '../svg';
import { AppContext } from '../contexts/AppContext';

function NavBar(){

    const location = useLocation();

    const [ isOpen, setIsOpen ] = useState( false );

    const bodyEl = document.querySelector('body');

    const { prefLang } = useContext(AppContext);

    return(

        <header className='nav-wrapper'>
            <div className='upper-nav-container'>
                <Link 
                    to="/" 
                    relative='path' 
                    className='nav-icon'
                >
                    <BunnyIcon />
                </Link>
                <Link to="/" relative='path' className='main-link'>
                    audio.fm
                </Link>

                <div className='nav-cta-container desktop-nav'>
                    <Link to="/login" relative='path'>
                        { prefLang === 'e' || prefLang === null || prefLang === ''  ?
                            'Login' : 'Se connecter'
                        }
                    </Link>
                    <Link to="/signup" relative='path'>
                        { prefLang === 'e' || prefLang === null || prefLang === ''  ?
                            'Sign up' : "S'inscrire"
                        }
                    </Link>
                </div>
                <button 
                    className='hamburger-toggle' 
                    onClick={() => {

                        setIsOpen( !isOpen )
                        bodyEl.style.overflowY = 'hidden'
                    
                    }}
                >
                    <Hamburger stroke="white"/>
                </button>
            </div>
            <Navbar expand='lg' className='desktop-nav'>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link 
                            as={Link} 
                            style={{ textDecoration: 'none' }} 
                            to="/"
                            className={ location.pathname === '/' ? 'current-nav-link' : null}
                        >
                            { prefLang === 'e' || prefLang === null || prefLang === ''  ?
                                "Home": "Accueil"
                            }
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            style={{ textDecoration: 'none' }} 
                            to="/projects"
                            className={ location.pathname === '/projects' ? 'current-nav-link' : null}
                        >
                            { prefLang === 'e' || prefLang === null || prefLang === ''  ?
                                "Projects": "Projets"
                            }
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            style={{ textDecoration: 'none' }} 
                            to="/samples"
                            className={ location.pathname === '/samples' ? 'current-nav-link' : null}
                        >
                            { prefLang === 'e' || prefLang === null || prefLang === ''  ?
                                "Samples": "Extraits"
                            }
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            style={{ textDecoration: 'none' }} 
                            to="/collaborate"
                            className={ location.pathname === '/collaborate' ? 'current-nav-link' : null}
                        >
                            { prefLang === 'e' || prefLang === null || prefLang === ''  ?
                                "Collaborate": "Collaborer"
                            }
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            style={{ textDecoration: 'none' }} 
                            to="/tutorials"
                            className={ location.pathname === '/tutorials' ? 'current-nav-link' : null}
                        >
                            { prefLang === 'e' || prefLang === null || prefLang === ''  ?
                                "Tutorials": "Tutoriels"
                            }
                        </Nav.Link>
                        <Link 
                            to="/profile"
                            relative='path'
                            className='profile-link'
                        >
                            <Profile color="white" />
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            { isOpen ? 

                <div className='dropdown-menu'>
                    <ul>
                        <button 
                            className='close-btn' 
                            onClick={ () => {

                                setIsOpen( !isOpen )
                                bodyEl.style.overflowY = 'scroll'

                            } }
                        >
                            <Close stroke="black"/>
                        </button>
                        <li className='dropdown-main-li'>
                            <Link 
                                to="/"
                                relative='path'
                                onClick={ () => {

                                    setIsOpen( !isOpen )
    
                                } }
                            >
                                { prefLang === 'e' || prefLang === null || prefLang === ''  ?
                                    "Home": "Accueil"
                                }
                            </Link>
                        </li>
                        <li className='dropdown-main-li'>
                            <Link 
                                to="/projects"
                                relative='path'
                                onClick={ () => {

                                    setIsOpen( !isOpen )
    
                                } }
                            >
                                { prefLang === 'e' || prefLang === null || prefLang === ''  ?
                                    "Projects": "Projets"
                                }
                            </Link>
                        </li>
                        <li className='dropdown-main-li'>
                            <Link 
                                to="/samples"
                                relative='path'
                                onClick={ () => {

                                    setIsOpen( !isOpen )
    
                                } }
                            >
                                { prefLang === 'e' || prefLang === null || prefLang === ''  ?
                                    "Samples": "Extraits"
                                }
                            </Link>
                        </li>
                        <li className='dropdown-main-li'>
                            <Link 
                                to="/collaborate"
                                relative='path'
                                onClick={ () => {

                                    setIsOpen( !isOpen )
    
                                } }
                            >
                                { prefLang === 'e' || prefLang === null || prefLang === ''  ?
                                    "Collaborate": "Collaborer"
                                }
                            </Link>
                        </li>
                        <li className='dropdown-main-li'>
                            <Link 
                                to="/tutorials"
                                relative='path'
                                onClick={ () => {

                                    setIsOpen( !isOpen )
    
                                } }
                            >
                                { prefLang === 'e' || prefLang === null || prefLang === ''  ?
                                    "Tutorials": "Tutoriels"
                                }
                            </Link>
                        </li>
                        <div className='dropdown-user-cta'>
                            <li>
                                <Link 
                                    to="/login"
                                    relative='path'
                                    onClick={ () => {
    
                                        setIsOpen( !isOpen )
        
                                    } }
                                >
                                    { prefLang === 'e' || prefLang === null || prefLang === ''  ?
                                        'Login' : 'Se connecter'
                                    }
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/signup"
                                    relative='path'
                                    onClick={ () => {
    
                                        setIsOpen( !isOpen )
        
                                    } }
                                >
                                    { prefLang === 'e' || prefLang === null || prefLang === ''  ?
                                        'Sign up' : "S'inscrire"
                                    }
                                </Link>
                            </li>
                        </div>
                    </ul>
                </div>

            : null }
        </header>
    );
    
}

export default NavBar;