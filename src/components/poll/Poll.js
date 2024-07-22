import { useState } from 'react';
import './Poll.css'

export default function Poll ({ title }) {

    const [ isSubmit, setIsSubmit ] = useState( false );

    return (

        <div className="custom-poll">
            { !isSubmit ?
            <form className='space-y-8 poll-container'>
                { title ?
                    <legend className='poll-title'>
                        { title }
                    </legend>
                : null }
                <div className='poll-option'>
                    <input type="radio" id="jazz" name="genre"/>
                    <label htmlFor="jazz">
                        Hip Hop
                    </label>
                </div>
                <div className='poll-option'>
                    <input type="radio" id="k-pop" name="genre"/>
                    <label htmlFor="k-pop">
                        K-pop
                    </label>
                </div>
                <div className='poll-option'>
                    <input type="radio" id="c-pop" name="genre"/>
                    <label htmlFor="c-pop">
                        C-pop
                    </label>
                </div>
                <div className='poll-option'>
                    <input type="radio" id="r&b" name="genre"/>
                    <label htmlFor="r&b">
                        R&B
                    </label>
                </div>
                <button 
                    type="submit" 
                    onClick={ ( event ) => {
                        event.preventDefault();
                        setIsSubmit( true )
                    } }>
                    Submit
                </button>
            </form>
            : null }
            { isSubmit ?
            <div className='poll-container space-y-8'>
                <h2 className='poll-title'>
                    { title }
                </h2>
                <div className='poll-option poll-result'>
                    <div className='poll-result-text-container'>
                        <p>
                            Hip Hop
                        </p>
                        <p>
                            15%
                        </p>
                    </div>
                    <div className='poll-statistic poll-statistic-1'/>
                </div>
                <div className='poll-option poll-result'>
                    <div className='poll-result-text-container'>
                        <p>
                            K-pop
                        </p>
                        <p>
                            55%
                        </p>
                    </div>
                    <div className='poll-statistic poll-statistic-2'/>
                </div>
                <div className='poll-option poll-result'>
                    <div className='poll-result-text-container'>
                        <p>
                            C-pop
                        </p>
                        <p>
                            15%
                        </p>
                    </div>
                    <div className='poll-statistic poll-statistic-3'/>
                </div>
                <div className='poll-option poll-result'>
                    <div className='poll-result-text-container'>
                        <p>
                            R&B
                        </p>
                        <p>
                            15%
                        </p>
                    </div>
                    <div className='poll-statistic poll-statistic-4'/>
                </div>
            </div> 
            : null }
        </div>
    );

}