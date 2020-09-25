import React from 'react';
import {StatusBar} from 'react-native';
import Home from './src/Home';

import { ThemeProvider } from 'styled-components';

const cores = {
  bg:'#191a24',
  color:'#999'
}

const App = () => {
  return (
    <ThemeProvider theme={cores}>
      <StatusBar backgroundColor={cores.bg} barStyle="light-content"/>
      <Home />
    </ThemeProvider>
  )
}

export default App;