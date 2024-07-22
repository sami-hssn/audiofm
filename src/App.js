import { useState } from "react";
import { AppContext } from "./components/contexts/AppContext";

function App({...props}) {

  const [ prefLang, setPrefLang ] = useState( localStorage.getItem( 'language' ) );

  const Wrapper = ({ children }) => {
  
    return <>{children}</>;

  }

  return (

    <div className="App">
      { props.children ?

        <AppContext.Provider value={{ prefLang, setPrefLang }}>
          {
            props.children.map(( component, i ) => {
              return <Wrapper key={ i }> { component} </Wrapper>
            })
          }
        </AppContext.Provider>

      : null

      }
    </div>
  );

}

export default App;
