import { Link } from 'react-router-dom';
import './PostCard.css';
import { RightArrow, Save } from '../svg';
import { useState } from 'react';

export default function PostCard({
    title,
    description,
    linkObj,
    padding,
    img
}) {

    const [ isSaved, setIsSaved ] = useState( false )

    return (

        <div className={ padding ? 'post-card-container first-post-card' : 'post-card-container' }>
            <div>
                <img className='post-card-img' src={ img } />
            </div>
            <div className='post-card-inside-container'>
                { title ?
                <p><b>
                    { title }
                    </b>
                </p>
                : null }
                { description ?
                <p>
                    { description }
                </p>
                : null }
                { linkObj ?
                <div className='post-card-link-container'>
                
                       
                        <div className='post-card-svg-container'>
                            <RightArrow />
                        </div>
                    
                </div>
                : null }
            </div>
            <button
                {
                    ...{
                        className : isSaved ? 'save-btn saved-btn' : 'save-btn',
                        onClick : () => {
                            setIsSaved( !isSaved )
                        }
                    }
                }
            >
                <Save />
            </button>
        </div>
        
    );

}