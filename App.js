import React from 'react';
import Routes from './routes';
import {View} from 'react-native';

const App = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1}}>
      <Routes />
    </View>
  );
};

export default App;
