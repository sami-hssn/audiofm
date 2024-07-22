import './ProjectCard.css';

export default function ProjectCard ({ img, alt, profileText, profileDescription }) {

    return( 

        <div className='project-card'>
            <div className='upper-project-card-container'>
                <div>
                    <img src={ img } className='project-profile-img' alt= 'Profile Icon' />
                </div>
                <div className='project-profile-text'>
                    <p>
                        { profileText }
                    </p>
                    <p>
                        <b>
                        { profileDescription }
                        </b>
                    </p>
                </div>
            </div>
            <div>
                <img className='project-img' src={ img } alt={ alt } />
            </div>
        </div>
        
    );

}