import React, { Component,useEffect,useState } from "react";
import { Button, View, Text,FlatList,StyleSheet, TouchableOpacity,Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, Card } from "react-native-paper";

export default function DogsScreen() {
  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(true);
  const [imageData,setImageData]=useState(null);

  useEffect(() => {
      fetch ("https://nidhitikone.github.io/adoption_pets_dogs/adoption_pets_dogs.json")
      .then((response)=> response.json())
      .then((json)=> {
        setData(json.dogs);
        setDiscription(json.description);
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
                      
                      {/* <Modal>
                        <Text>HI there</Text>
                      </Modal> */}
                    </Card.Actions> 
                    <Card.Cover source={{ uri: `${item.image}` }}style={{ width: "100%", height: 200 }}>
                     
                    </Card.Cover>
                   
                  {/* <Image style={{ width: "100%", height: 200 }} 
            source={{ uri: `${item.url}` }} /> */}
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
              color: "black",
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
              elevation:20,
              flex:30,
             
             padding:6,
             borderRadius:20,
             marginVertical:1,
             backgroundColor:"#b8e2f2",
             justifyContent:'space-between'
            },
            rowView: {
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            },
          })