import React, { Component, useEffect, useState } from "react";
import { View, Text,FlatList,StyleSheet,Modal,TouchableOpacity,Image } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, Card } from "react-native-paper";


const FeedScreen = () => {

  const [data,setData]=useState([]);
  const [discription,setDiscription]=useState([]);
  const[url,setUrl]=useState([]);
  const [loading,setLoading]=useState(true);

  const handleButtonPress=()=>{
    console.log('Floatting')
  }
   useEffect(() => {
      fetch ("https://nidhitikone.github.io/users-feeds/users_feeds.json")
      .then((response)=> response.json())
      .then((json)=> {
        setData(json.feeds);
        setDiscription(json.discription);
        setUrl(json.url);
      } )
      .catch((error)=>alert(error))
      .finally(()=> setLoading(false));
   },[]);

  return (
    
    
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator/>
      ) :(
       
        <View>
     
        <FlatList data={data} keyExtractor={({id},index)=>id}
        renderItem={({item})=>{
          
         
          return(
           
              
           
            <View style={{padding:15}}>
             
              <Card  style={styles.Card} mode="elevated">
                <Card.Actions>
                
                  
                </Card.Actions> 
                <Card.Cover source={{ uri: `${item.url}` }}style={{ width: "100%", height: 200 }}>
                 
                </Card.Cover>
               
              
        <Card.Content><Text style={styles.description}>{item.discription}</Text>
        </Card.Content>
        
        </Card>
        
        
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
    fontSize:17,
    color: "#2A3D44",
  },
  addIcon: {
     position: 'absolute',
    right:10,
    top:80,
     borderRadius:30,
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
    elevation:20,
    flex:30,
   
   padding:6,
   borderRadius:20,
   marginVertical:1,
   backgroundColor:"#D0DBDF",
   justifyContent:'space-between'
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

export default FeedScreen;