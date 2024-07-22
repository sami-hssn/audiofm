import { useContext, useState, useEffect } from 'react';
import './LanguageSelect.css';
import { AppContext } from '../contexts/AppContext';
import EnglishIcon from "../../media/english-lang-icon.png"
import FrenchIcon from "../../media/french-lang-icon.png"

export default function LanguageSelect (){

    const [ isModalOpen, setIsModalOpen ] = useState( false );

    const [ selectedLang, setSelectedLang ] = useState( '' );

    const { prefLang, setPrefLang } = useContext(AppContext);

    const bodyEl = document.querySelector('body');

    useEffect( () => {

        if ( !prefLang ) {

            setIsModalOpen( true );

            bodyEl.style.overflowY = 'hidden'

        }

    }, [])

    const setLanguage = () => {

        localStorage.setItem( 'language', selectedLang );
        setPrefLang( selectedLang )
        bodyEl.style.overflowY = 'scroll'

    }

    return (

        <>
            { isModalOpen ?
                <>
                    <div className='language-select-modal'>
                        <form>
                            <legend>
                                Select a Language
                            </legend>
                            <div className="space-y-8">
                                <label 
                                    htmlFor='english'
                                    className={ selectedLang === 'e' || selectedLang === null || selectedLang === '' ? 'selected-lang-button lang-button' : 'lang-button' }
                                >
                                    <img className="icon" src={ EnglishIcon } alt='American flag signifying English'/>
                                    English 
                                </label>
                                <input 
                                    type='radio' 
                                    onClick={() => { setSelectedLang( 'e' ) }}
                                    id='english'
                                    name='language'
                                />
                                <label 
                                    htmlFor='french'
                                    className={ selectedLang === 'f' ? 'selected-lang-button lang-button' : 'lang-button' }
                                >
                                    <img className="icon"  src={ FrenchIcon } alt='French flag signifying French'/>
                                    French
                                </label>
                                <input 
                                    type='radio' 
                                    onClick={() => { setSelectedLang( 'f' ) }}
                                    id='french'
                                    name='language'
                                />
                            </div>
                            <button 
                                type="submit"
                                onClick={ ( event ) => {
                                    event.preventDefault();
                                    setLanguage();
                                    setIsModalOpen( false );
                                }}
                            >
                                Save Settings
                            </button>
                        </form>
                    </div>
                    <div 
                        className='language-select-overlay' 
                        onClick={ () => {
                            setIsModalOpen( false );
                        }}
                    />
                </>
            : null
            }
        </>

    );

}