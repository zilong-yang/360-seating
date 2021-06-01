import React from 'react';
import Text from './Components/Text';

class App extends React.Component{
  render(){
    return (
        <>
          <Text name={"Rodrigo"} age={22}/>
          <Text name={"Martin"} age={20}/>
          <Text name={"Z"} age={20}/>
        </>
    )
  }
}

export default App;
