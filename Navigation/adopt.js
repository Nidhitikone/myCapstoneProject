import React, { Component,useEffect,useState } from "react";
import { Button, View, Text,FlatList,StyleSheet, TouchableOpacity,Image,Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, Card } from "react-native-paper";
import CollapsibleCard from "./collapsibleCard";

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
      setspayedNuetured(json.spayedNuetered);
    } )
    .catch((error)=>alert(error))
    .finally(()=> setLoading(false));
 },[]);

 const [isModalVisible, setModalVisible] = useState(false);
 const toggleModal = () => {
  setModalVisible(!isModalVisible);
};

 return (
  
  <SafeAreaView style={styles.container}>
    {loading ? (
      <ActivityIndicator/>
    ) :(
      <View >
        

        
      <FlatList data={data} horizontal={false} keyExtractor={({id},index)=>id}
      renderItem={({item})=>{
        return(
          <View style={{padding:10}}>
            

      <CollapsibleCard 
        
          name={item.name}
          imagesrc={{uri: `${item.image}`}}
          description={item.description}
          age={item.age}
          sex={item.sex}
          vaccinated={item.vaccinated}
          spayed={item.spayedNeutered}
          
        />
        
             
   
  
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
        textAlign: "justify",
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
       
        width:"100%",
        height:"90%",
      
       borderRadius:20,
       backgroundColor:"",
       
      },
      modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 8,
        alignItems: 'center',
      },
    })