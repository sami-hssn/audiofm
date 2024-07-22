import './Feature.css';

export default function Feature ({ img, alt }) {

    return (

        <div className="feature">
            <div>
                <img className="feature-img" src={ img } alt={ alt } />
            </div>
        </div>

    );

}