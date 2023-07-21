import React, { Component,useEffect,useState } from "react";
import { Button, View, Text,FlatList,StyleSheet, TouchableOpacity,Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, Card } from "react-native-paper";
import DogsScreen from "./dogs";
import CatsScreen from "./cats";
 import { NavigationContainer } from '@react-navigation/native';
  import { createStackNavigator } from '@react-navigation/stack';
import { Navigation } from "react-native-navigation";
import ReviewPets from "./reviewpets";
import { ScrollView } from "react-native";

export default function AdoptScreen() {
  const [data,setData]=useState([]);
  const[name,setName]=useState();
  const [loading,setLoading]=useState(true);
  const [imageData,setImageData]=useState(null);
  const[description,setDescription]=useState();
  const[vaccinated,setVaccinated]=useState();
  const[age,setAge]=useState();
  const[spayedNuetured,setspayedNuetured]=useState();
  const[sex,setSex]=useState();

 
  useEffect(() => {
    fetch ("https://nidhitikone.github.io/adoption_pets/adoption_pets.json")
    .then((response)=> response.json())
    .then((json)=> {
      setData(json.pets);
      setName(json.name);
      setImageData(json.url);
      setAge(json.age);
      setName(json.name);
      setVaccinated(json.vaccinated);
      setspayedNuetured(json.spayedNeutered);
    } )
    .catch((error)=>alert(error))
    .finally(()=> setLoading(false));
 },[]);



 return (
  <SafeAreaView style={styles.container}>
    {loading ? (
      <ActivityIndicator/>
    ) :(
      <View >
      
        
      <FlatList data={data} horizontal={true} keyExtractor={({id},index)=>id}
      renderItem={({item})=>{
        return(
          <View style={{padding:10}}>
<TouchableOpacity >
            {/* <TouchableOpacity onPress={()=>navigator.navigate('ReviewPets',item)}> */}
            <Card style={styles.Card} mode="elevated">
              <Card.Actions>
                
                {/* <Modal>
                  <Text>HI there</Text>
                </Modal> */}
              </Card.Actions> 
              <Card.Cover source={{ uri: `${item.image}` }}style={{ width: 350, height: 300 }}>
               
              </Card.Cover>
             
            {/* <Image style={{ width: "100%", height: 200 }} 
      source={{ uri: `${item.url}` }} /> */}
      <Card.Content><Text style={styles.description}>{item.name}</Text>
      <Text>Sex {item.sex}</Text>
      <Text>Age {item.age}</Text>
      <Text>Spayed/Neutered? {item.spayedNuetured}</Text>
      <Text>vaccinated? {item.vaccinated}</Text>
      </Card.Content>
      
      </Card>
      {/* </TouchableOpacity> */}
      </TouchableOpacity>
          </View>
          
          
          // 
        )
      }}
      
      
      />
      
      
    
      </View>
    )}
   
  </SafeAreaView>
 
);
  };

  const styles = StyleSheet.create({
      header: {
         marginHorizontal: 10,
         marginVertical: 10
      },
      description: {
        textAlign: "center",
        fontWeight: "500",
        fontSize:30,
        color: "black",
        textAlign:"left"
      },
      addIcon: {
         position: 'absolute',
        right:10,
        top:80,
       //bottom:'20%',
       // backgroundColor:'black',
         borderRadius:30,
         //left: '45%',
         zIndex:1,
         elevation: 20,
         margin:20,
      },
      container: {
        flex: 1,
        alignItems: "center",
        marginTop:"-12%",
        marginBottom:"-12%",
        
        
      },
      Card:{
        elevation:30,
        padding:10,
        width:"100%",
        height:"90%",
      
       borderRadius:20,
      //  horizontal:true,
       backgroundColor:"#b8e2f2",
       
      },
      
    })