
import React, { useState } from 'react';
import {
  auth, 
  signOut,
  
} from "../firebase-config";
import { 
  Text, 
  View, 
  StyleSheet,  
  Button,
 
 } from "react-native";

import ExploreScreen from '../Navigation/map';
import ChatScreen from '../Navigation/chat';
import FeedScreen from '../Navigation/feed';
import AdoptScreen from '../Navigation/adopt';
import AccountScreen from '../Navigation/account';
import AddFeedScreen from '../Navigation/add Feed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'






import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DogsScreen from '../Navigation/dogs';





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
        tabBarActiveTintColor: 'black',
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
  
  <Tab.Screen name='Chat' component={ChatScreen }
  options={{
    tabBarLabel: 'Chat',
    tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons name="chat" color={color} size={30}/>
    ),

  }}></Tab.Screen>
        {/* <Tab.Screen
        name="Add Feed"
        component={AddFeedScreen}
        
        options={{
            
          tabBarLabel: '',
          tabBarIcon: ({ color,size}) => (
            <MaterialCommunityIcons name="plus-thick" color={color} size={30} />
          ),
        }}
      /> */}
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
        component={AccountScreen}
        options={{
          tabBarLabel: 'Cost',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="currency-usd" color={color} size={30} />
          ),
        }}
      />
        </Tab.Navigator>
        
    
        )}
    
//  const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 12
//   },
//   contentContainerStyle: {
//     padding: 24
//   },
//   textInput: {
//     borderWidth: 1,
//     borderColor: '#afafaf',
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginVertical: 20,
//     fontSize: 20,
//   },
//   bonsaiItem: {
//     flexDirection: 'row',
//     marginVertical: 10,
//     alignItems: 'center'
//   },
//   bonsaiText: {
//     paddingHorizontal: 5,
//     fontSize: 16
//   },
//   upload: {
//     marginBottom: 5
//   }
// });

 export default Dashboard;