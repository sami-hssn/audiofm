import { Profile } from '../svg';
import './ProfileSection.css';

export default function ProfileSection () {

    return (

        <div className='profile-section'>
            <div className='profile-svg-wrapper'>
                <Profile color="black" />
            </div>
            <p className='profile-name'>
                AlexSmith
            </p>
            <p className='profile-description'>
                professional beat maker
            </p>
        </div>

    );

}