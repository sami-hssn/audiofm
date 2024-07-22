import { Link, useNavigate } from 'react-router-dom';
import './Form.css';

export default function Form ({    
    title,
    fieldsArr,
    link,
    secondaryLink
}){

    const navigate = useNavigate();

    const authenticate = ( event ) => {

        event.preventDefault();
        navigate( '/profile' )

    }

    return (

        <form className='form-container'>
            { title ? 
                <legend>
                    { title }
                </legend>         
            : null }
            { fieldsArr ?
                fieldsArr.map( ( iterator ) => {
                    return (
                        <> 
                            <label htmlFor={ iterator.value }>
                                { iterator.name }
                            </label>
                            <input type="search" id={ iterator.value } />
                        </>
                    )
                })
            : null }
            { secondaryLink ? 
                <Link to={ secondaryLink.link } relative='path' className='secondary-link'>
                    { secondaryLink.title }
                </Link>
            : null }
            { link ?
                <button onClick={ ( event ) => authenticate( event ) }>
                    { link }
                </button>
            : null }
        </form>

    );

}