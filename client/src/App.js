import React from 'react';
import Text from './Components/Text';
import MovieBrowser from './Components/MovieBrowser'

require('dotenv').config()

class App extends React.Component{
  render(){
    return (
        <>
          <MovieBrowser/>
        </>
    )
  }
}

export default App;
