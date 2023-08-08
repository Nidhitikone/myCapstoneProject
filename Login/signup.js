import React, { useState } from 'react';

import { 
  Text, 
  View, 
  StyleSheet,  
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
  TouchableOpacity
 } from "react-native";

 import {
  auth, 
  createUserWithEmailAndPassword,
  updateProfile } from "../firebase-config";

  

const Signup = ({navigation}) => {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [displayName, setDisplayName ] = useState(null);

  const registerUser = () => {
    // Check if both exist.
    if (email === '' || password === '') {
      Alert.alert('Enter details to signup!');
    } else {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          // Signed In
          updateProfile(auth.currentUser, {
            displayName: displayName
          })
          .then(()=>{console.log('profile updated')})
          .catch((error)=>{console.log(error)});
          setIsLoading(false);
          navigation.navigate("Login");
          console.log('success')
          console.log(res.user);
        })
        .catch((error)=>{
          console.log('error');
          console.log(error.message);
        });
    }
    
  }

  if(isLoading){
    return(
      <View style={styles.preloader}>
        <ActivityIndicator size="large" color="#9E9E9E"/>
      </View>
    )
  }    

  return (
    <View style={styles.container}>  
      <TextInput
        style={styles.inputStyle}
        placeholder="Name"
        value={displayName}
        onChangeText={(val) => setDisplayName(val)}
      />      
      <TextInput
        style={styles.inputStyle}
        placeholder="Email"
        value={email}
        onChangeText={(val) => setEmail(val)}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Password"
        value={password}
        onChangeText={(val) => setPassword(val)}
        maxLength={15}
        secureTextEntry={true}
      />   
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => registerUser()}
       
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text 
        style={styles.loginText}
        onPress={() => navigation.navigate('Login')}>
        Already Registered? Click here to login
      </Text>                          
    </View>
  );
 }

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: 35,
      backgroundColor: '#fff'
    },
    inputStyle: {
      width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    },
    loginText: {
      color:'#000000',
      marginTop: 25,
      textAlign: 'center'
    },
    preloader: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff'
    },
    button: {
      backgroundColor: "#58808F",
      borderRadius: 5,
      padding: 10,
      width: "100%",
      alignItems: "center",
      color:"#58808F"
    },
    buttonText: {
      color: "white",
      fontSize: 16,
      fontWeight:"bold"
    },
  });

export default Signup;