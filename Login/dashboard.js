
import React, { useState } from 'react';
import {
  auth, 
  signOut,
  
} from "../firebase-config";


import ExploreScreen from '../Navigation/map';

import FeedScreen from '../Navigation/feed';
import AdoptScreen from '../Navigation/adopt';
import CostScreen from '../Navigation/cost';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'






import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AdoptionForm from '../Navigation/adoptionForm';





const Dashboard = ({navigation}) => {
  
  
  const [uid, setuserid] = useState(auth.currentUser.uid);
  const [displayName, setDisplayName] = useState(auth.currentUser.displayName);
  
  const logOut = () => {
    signOut(auth)
    .then(()=>{
      navigation.navigate('Login');
    })
    .catch((error)=>console.error(error));
  }

  
  
  const Tab =createBottomTabNavigator();


  return (
    
        <Tab.Navigator
      initialRouteName=""
      screenOptions={{
        tabBarActiveTintColor: '#58808F',
        headerShown:false,
        
      }}
      
    >
      
  <Tab.Screen
        name="Feed Screen"
        component={FeedScreen}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="newspaper-variant-outline" color={color} size={30} />
          ),
         
        }}
        />
        <Tab.Screen
    name='Waiting Angels'
    component={AdoptScreen}
    options={{
      tabBarLabel: 'Find furry',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="dog" color={color} size={30} />
      ),
      
    }} />
  
  <Tab.Screen name='Chat' component={AdoptionForm}
  options={{
    tabBarLabel: 'Adoption Form',
    tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons name="clipboard-list" color={color} size={30}/>
    ),

  }}></Tab.Screen>
       
      <Tab.Screen

        name='Explore'
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map-marker-outline" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={CostScreen}
        options={{
          tabBarLabel: 'Cost',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="currency-usd" color={color} size={30} />
          ),
        }}
      />
        </Tab.Navigator>
        
    
        )}
    
 export default Dashboard;