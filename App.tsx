// App.tsx
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import DrawerContent from './src/navigation/DrawerContent';
import StackNavigator from './src/navigation/StackNavigator';
import TodoScreen from './src/screens/TodoScreen';
import store, {persistor} from './src/redux/store';
import 'react-native-gesture-handler';
import LoginScreen from './src/screens/LoginScreen';

const Drawer = createDrawerNavigator();

const App: React.FC = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication status here
    // For example, you can check if the user has a valid token or session
    // For this example, we're using a simple timeout to simulate authentication
    setTimeout(() => {
      setAuthenticated(true);
    }, 2000);
  }, []);

  if (!authenticated) {
    // Render the login screen if the user is not authenticated
    return <LoginScreen />;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen
              name="HomeDrawer"
              component={StackNavigator}
              options={{headerShown: false}}
            />
            <Drawer.Screen
              name="Todo"
              component={TodoScreen}
              options={{headerShown: false}}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
