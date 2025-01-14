import { useContext } from "react";
import { AppContext } from "../components/contexts/AppContext";
import NavBar from "../components/navbar/NavBar";
import { LargeBunny } from "../components/svg";
import '../styles/index.css'
import Footer from "../components/footer/Footer";

function HomePage(){

    const { prefLang } = useContext(AppContext);

    return(
        <div className="page home-page">
            <div className="wrapper">
                <NavBar title="Home"/>
                <div className="secondary-wrapper">
                    <div className="inner-wrapper">
                        <h2 className="text-center">
                            audio.fm
                        </h2>
                        <p className="text-center text-bold text-secondary">
                            { prefLang === 'e' || prefLang === null || prefLang === ''  ?
                                'For artists. By artists.' : 'Pour les artistes. Par des artistes.'
                            }
                        </p>
                        <p className="text-center">
                            { prefLang === 'e' || prefLang === null || prefLang === '' ?
                                'A collaborative online platform for musicians, producers, and music enthusiasts to create, share, and discover music together.' : 'Une plateforme collaborative en ligne permettant aux musiciens, producteurs et passionnés de musique de créer, partager et découvrir de la musique ensemble.'
                            }
                        </p>
                        <div className="large-image-container">
                            <LargeBunny />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default HomePage;
