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
                        <p className="text-center">
                            { prefLang === 'e' || prefLang === null || prefLang === '' ?
                                "Audio.fm is an innovative online platform designed for musicians, producers, and music enthusiasts to collaborate, share, and discover music together. The site offers a suite of tools for collaborative music creation, allowing users to work together in real-time or asynchronously on projects. This seamless integration of creativity and technology fosters a dynamic environment where musical ideas can flourish and evolve. The platform also features a community-driven library of music samples and tracks, providing a rich resource for inspiration and collaboration. Users can upload their own samples and tracks, explore contributions from others, and incorporate these elements into their projects. Additionally, forums for discussions and feedback create a vibrant community space where members can exchange ideas, seek advice, and offer constructive critiques, enhancing the overall experience and growth of its users." : "Audio.fm est une plateforme en ligne innovante conçue pour permettre aux musiciens, producteurs et passionnés de musique de collaborer, de partager et de découvrir la musique ensemble. Le site propose une suite d'outils de création musicale collaborative, permettant aux utilisateurs de travailler ensemble en temps réel ou de manière asynchrone sur des projets. Cette intégration harmonieuse de la créativité et de la technologie favorise un environnement dynamique où les idées musicales peuvent s'épanouir et évoluer. La plate-forme propose également une bibliothèque communautaire d'échantillons et de morceaux de musique, fournissant une riche ressource d'inspiration et de collaboration. Les utilisateurs peuvent télécharger leurs propres échantillons et pistes, explorer les contributions des autres et incorporer ces éléments dans leurs projets. De plus, les forums de discussion et de commentaires créent un espace communautaire dynamique où les membres peuvent échanger des idées, demander des conseils et proposer des critiques constructives, améliorant ainsi l'expérience globale et la croissance de ses utilisateurs."
                            }
                        </p>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default HomePage;