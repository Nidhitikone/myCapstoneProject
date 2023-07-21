import React from "react";
import { useState,StyleSheet } from "react";
import { Card } from "react-native-paper";

export default function ReviewPets({}){

    const [loading,setLoading]=useState(true);
  const [imageData,setImageData]=useState(null);
  const[description,setDescription]=useState();
  const[vaccinated,setVaccinated]=useState();
  const[age,setAge]=useState();
  const[spayedNuetured,setspayedNuetured]=useState();
  const[sex,setSex]=useState();
  const[name,setName]=useState();

 
  useEffect(() => {
    fetch ("https://nidhitikone.github.io/adoption_pets/adoption_pets.json")
    .then((response)=> response.json())
    .then((json)=> {
      setData(json.pets);
      setDescription(json.description);
      setImageData(json.url);
      setAge(json.age);
      setName(json.name);
      setVaccinated(json.vaccinated);
      //setspayedNuetured(json.spayedNuetured);
    } )
    .catch((error)=>alert(error))
    .finally(()=> setLoading(false));
 },[]);
    return(
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
              <Card.Cover source={{ uri: `${item.image}` }}style={{ width: 350, height: 300 }}>
               
              </Card.Cover>
              <Card.Content>
                <Text>{item.age}</Text>
              </Card.Content>
             
            {/* <Image style={{ width: "100%", height: 200 }} 
      source={{ uri: `${item.url}` }} /> */}
      <Card.Content><Text style={styles.description}>{item.description}</Text>
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

//   const styles = StyleSheet.create({
//       header: {
//          marginHorizontal: 10,
//          marginVertical: 10
//       },
//       description: {
//         textAlign: "center",
//         fontWeight: "500",
//         fontSize:17,
//         color: "black",
//       },
//       addIcon: {
//          position: 'absolute',
//         right:10,
//         top:80,
//        //bottom:'20%',
//        // backgroundColor:'black',
//          borderRadius:30,
//          //left: '45%',
//          zIndex:1,
//          elevation: 20,
//          margin:20,
//       },
//       container: {
//         flex: 1,
//         alignItems: "center",
//         marginTop:"-12%",
//         marginBottom:"-12%",
        
        
//       },
//       Card:{
//         elevation:20,c
//         flex:30,
//        width:"100%",
//        padding:6,
//        borderRadius:20,
//        marginVertical:1,
//        backgroundColor:"#b8e2f2",
//        justifyContent:'space-between'
//       },
      
//     })