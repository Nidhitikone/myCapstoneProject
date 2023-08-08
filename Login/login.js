import React, { useState } from 'react';
import {
  auth, 
  signInWithEmailAndPassword } from "../firebase-config";
import { 
  Text, 
  View, 
  StyleSheet,  
  TextInput,
 
  ActivityIndicator,
  Alert,
  TouchableOpacity
 } from "react-native";

const Login = ({navigation}) => {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const userLogin = () => {
    if (email === '' || email == null || password === '' || password == null){
      Alert.alert('Enter details to sign in!');
    } else {
      setIsLoading(true);
      signInWithEmailAndPassword(auth, email, password)
      .then((res)=>{
        console.log(res);
        console.log('User logged in successfully');
        setIsLoading(false);
        setEmail(null);
        setPassword(null);
        navigation.navigate('Dashboard')
      })
      .catch((error)=>{
        console.error(error);
      })
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
        onPress={() => userLogin()}
       
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <Text 
        style={styles.loginText}
        onPress={() => navigation.navigate('SignUp')}>
        Don't have account? Click here to signup
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
    color: '#000000',
    marginTop: 25,
    textAlign: 'center'
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

 export default Login;