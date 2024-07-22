import { Link } from "react-router-dom";
import './Footer.css'
import { BunnyIcon } from "../svg";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import EnglishIcon from "../../media/english-lang-icon.png"
import FrenchIcon from "../../media/french-lang-icon.png"

export default function Footer () {

    const { setPrefLang, prefLang } = useContext(AppContext);

    const setLanguage = ( language ) => {

        localStorage.setItem( 'language', language );
        setPrefLang( language )

    }

    return (

        <footer>
            <div className="home-link-wrapper">
                <div>
                    <div className="profile-icon-wrapper">
                        <Link 
                            to="/"
                            relative='path'
                        >
                            <BunnyIcon />
                        </Link>
                    </div>
                </div>
                <Link to="/" relative='path' className='footer-main-link'>
                    audio.fm
                </Link>
            </div>
            <nav>
                <ul className="footer-nav space-y-8">
                    <li>
                        <Link 
                            to="/projects"
                            relative='path'
                        >
                            { prefLang === 'e' || prefLang === null || prefLang === ''  ?
                                "Projects": "Projets"
                            }
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/samples"
                            relative='path'
                        >
                            { prefLang === 'e' || prefLang === null || prefLang === ''  ?
                                "Samples": "Extraits"
                            }
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/collaborate"
                            relative='path'
                        >
                            { prefLang === 'e' || prefLang === null || prefLang === ''  ?
                                "Collaborate": "Collaborer"
                            }
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/tutorials"
                            relative='path'
                        >
                            { prefLang === 'e' || prefLang === null || prefLang === ''  ?
                                "Tutorials": "Tutoriels"
                            }
                        </Link>
                    </li>
                </ul>
            </nav>
            <form>
                <legend>
                { prefLang === 'e' || prefLang === null || prefLang === ''  ?
                    "Language Preferance": "Préférence de langue"
                }
                </legend>
                <div className="space-y-8">
                    <label 
                        htmlFor='english'
                        className={ prefLang === 'e' || prefLang === null || prefLang === '' ? 'selected-lang-button lang-button' : 'lang-button' }
                        onClick={ () => { setLanguage( 'e' )}}
                    >
                        <img className="icon" src={ EnglishIcon }/>
                            { prefLang === 'e' || prefLang === null || prefLang === ''  ?
                                "English": "Anglais"
                            }
                    </label>
                    <input 
                        type='radio' 
                        id='english'
                        name='language'
                    />
                    <label 
                        htmlFor='french'
                        className={ prefLang === 'f' ? 'selected-lang-button lang-button' : 'lang-button' }
                        onClick={ () => { setLanguage( 'f' )}}
                    >
                        <img className="icon"  src={ FrenchIcon }/>
                        { prefLang === 'e' || prefLang === null || prefLang === ''  ?
                            "French": "Français"
                        }
                    </label>
                    <input 
                        type='radio' 
                        id='french'
                        name='language'
                    />
                </div>
            </form>
        </footer>

    );

}