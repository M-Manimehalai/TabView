/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React ,{useState,useEffect}from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigations/Navigations';
import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
// Redux Part
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Reducer from './src/redux/Index'; // This is a combineReducers path
import AnimatedSplash from "react-native-animated-splash-screen";
import CommonColors from './src/utils/constants/colors/CommonColors';

// Configure Redux Persist
const persistConfig = {
  key: 'root', // Key for the storage
  storage: AsyncStorage, // Storage engine (AsyncStorage in this case)
};

var persistedReducer = persistReducer(persistConfig, Reducer)

// Create the Redux store
const store = createStore(persistedReducer, applyMiddleware(thunk)); // Apply middleware if needed

// Create a persisted store
const persistor = persistStore(store);

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 5000);
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
    
      <AnimatedSplash
        logoWidht={200}
        logoHeight={70}
        isLoaded={isLoaded}
        backgroundColor={CommonColors.signinBackground}
        logoImage={require("./src/assets/images/png/anandrathi-logo.png")}
      >
        <Navigation />
      </AnimatedSplash>
      </PersistGate>
    </Provider>

  )
}
