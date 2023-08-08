

import Dashboard from './Login/dashboard';
import Signup from './Login/signup';
import Login from './Login/login';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#466672',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
          
        },
      }}>
        <Stack.Screen 
        name="Signup" 
        component={Signup} 
        options={{ title: 'Signup' }}
      />  
        <Stack.Screen 
        name="Login" 
        component={Login} 
        options={
          {title: 'Login',
          headerLeft: null}
        }
      />
           
      
       <Stack.Screen 
       name="Dashboard" 
       component={Dashboard} 
       options={
         { title: 'Pet Paws',
         headerLeft: null}
       }
      /> 
    </Stack.Navigator>
  );
}

const App = () => {

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );

}

 export default App;
