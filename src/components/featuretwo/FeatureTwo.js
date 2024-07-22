import { Link } from "react-router-dom";
import './FeatureTwo.css';

export default function FeatureTwo({ featuresArr }){

    return (

        <div className="feature-two">
            { featuresArr ?
                featuresArr.map( ( iterator ) => {

                    return (

                        <Link to={ iterator.link }>
                            <div>
                                <img className="feature-two-img" src={ iterator.img } alt={ iterator.alt } />
                            </div>
                        </Link>

                    )

                }) 
            : null }
        </div>

    );

}