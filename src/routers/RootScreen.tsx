import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef, navigate, goBack } from '../utils/navigationService';
import { View, Text, TextInput, Button } from 'react-native';
import { RootState, AppDispatch } from '../app/store';
import { setGlobalState } from '../app/globalSlice';

const { Navigator, Screen } = createStackNavigator();

function LoginScreen() {
  const name = useSelector(
    (state: RootState) => state.global.name,
    shallowEqual,
  );

  const [text, settext] = useState('');

  const handleChangeName = useCallback(() => {
    navigate('RegisterScreen', { settext });
  }, []);

  return (
    <View>
      <Text>123151321323</Text>
      <Text>{name}</Text>
      <Text>test 啊哈哈哈{text}</Text>
      <Button
        onPress={handleChangeName}
        title="改名字"
        accessibilityLabel="dsadasdsa"
      />
    </View>
  );
}

function RegisterScreen() {
  const dispatch = useDispatch<AppDispatch>();
  const [inputVal, setinputVal] = useState('');
  const handlePress = () => {
    dispatch(setGlobalState({ path: 'name', value: inputVal }));
    goBack();
  };

  return (
    <View>
      <TextInput value={inputVal} onChangeText={setinputVal} />
      <Button
        onPress={handlePress}
        title="Learn More"
        accessibilityLabel="Learn more about this purple button"
        color="#841584"
      />
    </View>
  );
}

function RootScreen() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator screenOptions={{ headerBackTitle: '返回' }}>
        <Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ title: '注册' }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default RootScreen;
