import { useState } from 'react';
import { Filter, Search } from '../svg';
import './SearchBar.css';

export default function SearchBar({ title }) {

    const [ isOpen, setIsOpen ] = useState( false )
    
    const familyFilterObj = [
        {
            name: "Bass",
            value: "bass"
        },
        {
            name: "Drums",
            value: "drum"
        },
        {
            name: "Fx",
            value: "fx"
        },
        {
            name: "Key",
            value: "key"
        },
        {
            name: "Synth",
            value: "synth"
        },
        {
            name: "Vocals",
            value: "vocals"
        }
    ]


    return (

        <div className='search-bar'>
            <form className='search-container'>
                <label className='main-label'>
                    { title }
                </label>
                <div className='search-input-container'>
                    <Search />
                    <input type="search" placeholder="Search for a post..." />
                    <button 
                        className='filter-btn'
                        onClick={ ( e ) => {

                            e.preventDefault();
                            
                            setIsOpen( !isOpen )

                        }}
                    >
                        <Filter />
                    </button>
                </div>
            </form>
            { isOpen ?
            
            <form className='filter-form'>
                <fieldset>
                    <legend>
                        Family
                    </legend>
                    <div className='family-filter-container'>
                        {
                            familyFilterObj.map( ( iterator ) => {
                                return ( 

                                    <div className='filter-container green-btn'>
                                        <input 
                                            type="radio" 
                                            id={ iterator.value }
                                            name="family" 
                                            value={ iterator.value }
                                        />
                                        <label 
                                            htmlFor={ iterator.value }
                                        >
                                            { iterator.name }
                                        </label>
                                    </div>

                                )
                            })
                        }
                    </div>
                </fieldset>
                
            </form>
                
            : null }
        </div>

    );

};