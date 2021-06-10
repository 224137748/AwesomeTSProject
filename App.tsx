/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { store } from './src/app/store';
// 在应用的根元素之后添加兄弟元素，可以用来创建Modal组件
import { RootSiblingParent } from 'react-native-root-siblings';
import RootScreen from './src/routers/RootScreen';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <RootSiblingParent>
        <RootScreen />
      </RootSiblingParent>
    </Provider>
  );
};

export default App;
