import React, { Component } from "react";
import { Button, View, Text,StyleSheet } from "react-native";
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
    <MapView style={styles.map} 
      initialRegion={{ latitude: 42.983612,
        longitude: -81.249725,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,}}
   
      >
        {/* PetSmart */}
        <Marker
      // key={index}
      // coordinate={marker.latlng}
      // title={"abc"}
      // description={marker.description}
      coordinate={{
        latitude: 42.927400,
        longitude:-81.217300
      }}
    >
      
    </Marker>
    <Marker
      // key={index}
      // coordinate={marker.latlng}
      // title={"abc"}
      // description={marker.description}
      coordinate={{
        latitude: 43.010200,
        longitude:-81.336100
      }}
    >
      
    </Marker>

    {/* Bark & fitz */}
    <Marker
      // key={index}
      // coordinate={marker.latlng}
      // title={"abc"}
      // description={marker.description}
      coordinate={{
        latitude: 43.019700,
        
        longitude:-81.310700
      }}
    >
      
    </Marker>
    {/* Bloomingtails Pet Boutique & Grooming Salon */}
    <Marker
      // key={index}
      // coordinate={marker.latlng}
      // title={"abc"}
      // description={marker.description}
      coordinate={{
        latitude: 42.952120,
        longitude:-81.331780
      }}
    >
      
    </Marker>
    {/* Global Pet Foods */}
    <Marker
      // key={index}
      // coordinate={marker.latlng}
      title={"abc"}
      // description={marker.description}
      coordinate={{
        latitude: 42.927400,
        longitude:-81.217300
      }}
    >
      
    </Marker>

    {/* Little Whiskers */}
    <Marker
      // key={index}
      // coordinate={marker.latlng}
      // title={"abc"}
      // description={marker.description}
      coordinate={{
        latitude: 42.923400,
        longitude:-81.251300
      }}
    />
 {/* Nook & Cranny Pet Supplies */}
<Marker
      // key={index}
     
      // title={"abc"}
      // description={marker.description}
      coordinate={{
        latitude: 42.932800,
        longitude:-81.219400
      }}
    />

 {/* Pet Loot */}
<Marker
      // key={index}
     
      // title={"abc"}
      // description={marker.description}
      coordinate={{
        latitude: 43.011000,
        longitude:-81.241000
      }}
    />
      {/* The RAW Source */}
    <Marker
      // key={index}
     
      // title={"abc"}
      // description={marker.description}
      coordinate={{
        latitude:43.003601,
        longitude:-81.227798
      }}
    />
      
      {/* VETS */}


        {/* Wellington Baseline Animal Hospital */}
      <Marker
      // key={index}
     
      // title={"abc"}
      // description={marker.description}
      coordinate={{
        latitude:42.955100,
        longitude:-81.230300
      }}
      pinColor="blue"
    />

{/* Western Animal Clinic */}


<Marker
      // key={index}
     
      // title={"abc"}
      // description={marker.description}
      coordinate={{
        latitude:42.960370,
        longitude:-81.261520
      }}
      pinColor="blue"
    />

{/* Sears Animal Hospital & Pet Rehabilitation */}

<Marker
      // key={index}
     
      // title={"abc"}
      // description={marker.description}
      coordinate={{
        latitude:42.975500,
        longitude:-81.262500
      }}
      pinColor="blue"
    />
    

    {/* Blue Cross Animal Hospital */}

    <Marker
      // key={index}
     
      // title={"abc"}
      // description={marker.description}
      coordinate={{
        latitude:42.975100,
        longitude:-81.262400
      }}
      pinColor="blue"
    />


  </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});