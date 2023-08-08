import React, { useState } from 'react';
import { View,Text,TouchableOpacity, TextInput, Button, StyleSheet, Alert } from 'react-native';


const AdoptionForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
 
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit =  () => {
    if (!name || !email || !phoneNumber || !address) {
      Alert.alert("Missing Information", "Please fill in all fields", [{ text: "OK" }]);
      return;
    }

       Alert.alert(
      "Adoption Request Submitted",
      "Thank you for your interest! We will review your request.",
      [{ text: "OK" }]
    );
    setName("");
    setEmail("");
    setPhoneNumber("");
    setAddress("");
    }

          
    


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adoption Form 🐾</Text>


      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
       <TextInput
        style={styles.input}
        placeholder="Contact Number"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        keyboardType="phone-pad"
      />

      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Address"
        value={address}
        multiline
        onChangeText={(text) => setAddress(text)}
      />
            
      <TouchableOpacity
        style={[styles.button, { backgroundColor: loader ? "#ccc" : "#58808F" }]}
        onPress={handleSubmit}
        disabled={loader}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

    </View>
      
   
  );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
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


export default AdoptionForm;
