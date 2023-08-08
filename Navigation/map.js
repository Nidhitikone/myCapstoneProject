import React, { Component } from "react";
import { Button, View, Text,StyleSheet,Image,Dimensions,TouchableOpacity } from "react-native";
import MapView, { Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import {Marker} from 'react-native-maps';
import axios from "axios";
import { GooglePlacesAutocomplete,GooglePlaceDetail } from "react-native-google-places-autocomplete";
import  Constants  from "expo-constants";
import MapViewDirections from "react-native-maps-directions";
import { useRef,useState } from "react";
import FloatingButton from "./floatingBtn";

const { width, height } = Dimensions.get("window")
const ASPECT_RATIO = width / height

const LATITUDE_DELTA = 0.02
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO


function InputAutocomplete({label,placeholder,onPlaceSelected}){
return(
  <>
  <Text>{label}</Text>
  {/* Google Place autocomplete API to autocomplete the google map */}
  <GooglePlacesAutocomplete
  
  styles={{textInput:styles.input}}
  placeholder={placeholder||""}
  fetchDetails
  onPress={(data,details=null)=>{
    console.log(data.details);
    onPlaceSelected(details);
  }}
  query={{
    key:'AIzaSyDLwX70RDDezLD18ekaPf4PmC8qJLFBEw4',
    language:'en',
  }}
  /> 
  </>
)
}


export default function ExploreScreen() {


  const [origin, setOrigin] = useState()
  const [destination, setDestination] = useState()
  const [showDirections, setShowDirections] = useState(false)
  const [distance, setDistance] = useState(0)
  const [duration, setDuration] = useState(0)
  const mapRef = useRef(null)

  // Function to perform animation when location is entered
  const moveTo = async position => {
    const camera = await mapRef.current?.getCamera()
    if (camera) {
      camera.center = position
      mapRef.current?.animateCamera(camera, { duration: 1000 })
    }
  }

  const edgePaddingValue = 70

  const edgePadding = {
    top: edgePaddingValue,
    right: edgePaddingValue,
    bottom: edgePaddingValue,
    left: edgePaddingValue
  };

  
  const traceRouteOnReady = args => {
    if (args) {
      
      setDistance(args.distance);
      setDuration(args.duration);
    }
  }

  const traceRoute = () => {
    if (origin && destination) {
      setShowDirections(true)
      mapRef.current?.fitToCoordinates([origin, destination], { edgePadding })
      
    }
  }

  const onPlaceSelected = (details, flag) => {
    const set = flag === "origin" ? setOrigin : setDestination
    const position = {
      latitude: details?.geometry.location.lat || 0,
      longitude: details?.geometry.location.lng || 0
    }
    set(position)
    moveTo(position)
  }
  return (
    <View style={styles.container}>
    <MapView style={styles.map} 
       initialRegion={{ latitude: 42.983612,
         longitude: -81.249725,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,}}
      ref={mapRef}
        provider={PROVIDER_GOOGLE}
   
      >
      
       
    

    {/* Bark & fitz */}
    <Marker
     
      coordinate={{
        latitude: 43.019700,
        
        longitude:-81.310700
      }}
    >
      <Callout tooltip>
        <View>
          <View style={styles.bubble}>
          <Text style={styles.name}>Bark & Fitz</Text>
          <Image style={styles.image}
          source={require('../assets/bark.jpg')}/>
          </View>
          <View style={styles.arrowBorder} />
                <View style={styles.arrow} />
        </View>
      </Callout>
      
    </Marker>
    {/* Bloomingtails Pet Boutique & Grooming Salon */}
    <Marker
     
      coordinate={{
        latitude: 42.952120,
        longitude:-81.331780
      }}
    >
      <Callout tooltip>
        <View>
          <View style={styles.bubble}>
          <Text style={styles.name}>Bloomingtails Pet Boutique</Text>
          <Image style={styles.image}
          source={require('../assets/bloomingTails.jpg')}/>
          </View>
          <View style={styles.arrowBorder} />
                <View style={styles.arrow} />
        </View>
      </Callout>
    </Marker>
    {/* Global Pet Foods */}
    <Marker
     
      coordinate={{
        latitude: 42.927400,
        longitude:-81.217300
      }}
    >
      <Callout tooltip>
        <View>
          <View style={styles.bubble}>
          <Text style={styles.name}>Global Pet Foods</Text>
          <Image style={styles.image}
          source={require('../assets/globalPetFoods.jpg')}/>
          </View>
          <View style={styles.arrowBorder} />
                <View style={styles.arrow} />
        </View>
      </Callout>
      
    </Marker>

    {/* Little Whiskers */}
    <Marker
      coordinate={{
        latitude: 42.923400,
        longitude:-81.251300
      }}
    >
      <Callout tooltip>
        <View>
           <View style={styles.bubble}>
          <Text style={styles.name}>Little Whiskers</Text>
          <Image style={styles.image}
          source={require('../assets/little.jpg')}/>
          </View>
          <View style={styles.arrowBorder} />
          <View style={styles.arrow} />
        </View>
      </Callout>
  </Marker>

 {/* Nook & Cranny Pet Supplies */}
<Marker
      coordinate={{
        latitude: 42.932800,
        longitude:-81.219400
      }}
    >
      <Callout tooltip>
              <View>
            <View style={styles.bubble}>
          <Text style={styles.name}>Nook & Cranny Pet Supplies</Text>
          <Image style={styles.image}
          source={require('../assets/nooks.jpg')}/>
          </View>
          <View style={styles.arrowBorder} />
          <View style={styles.arrow} />
        </View>
      </Callout>
   </Marker>

      
      {/* VETS */}


        {/* Wellington Baseline Animal Hospital */}
      <Marker
     
      coordinate={{
        latitude:42.955100,
        longitude:-81.230300
      }}
      pinColor="blue"
    >
       <Callout tooltip>
              <View>
            <View style={styles.bubble}>
          <Text style={styles.name}>Wellington Baseline Animal Hospital</Text>
          <Image style={styles.image}
          source={require('../assets/baseline.jpg')}/>
          </View>
          <View style={styles.arrowBorder} />
          <View style={styles.arrow} />
        </View>
      </Callout>
    </Marker>



{/* Sears Animal Hospital & Pet Rehabilitation */}

  <Marker
      
      coordinate={{
        latitude:42.975500,
        longitude:-81.262500
      }}
      pinColor="blue"
  >
    <Callout tooltip>
              <View>
            <View style={styles.bubble}>
          <Text style={styles.name}>Sears Animal Hospital & Pet Rehabilitation</Text>
          <Image style={styles.image}
          source={require('../assets/sears.jpg')}/>
          </View>
          <View style={styles.arrowBorder} />
          <View style={styles.arrow} />
        </View>
      </Callout>
  </Marker>

    

                      {/* Track the route when button is clicked */}

        {origin && <Marker coordinate={origin} pinColor="black" />}
        {destination && <Marker coordinate={destination} pinColor="black"/>}
        {showDirections && origin && destination && (
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={'AIzaSyDLwX70RDDezLD18ekaPf4PmC8qJLFBEw4'}
            strokeColor="darkblue"
            strokeWidth={6}
            onReady={traceRouteOnReady}
          />
        )}
</MapView>
      <View style={styles.searchContainer}>
                     

        <InputAutocomplete
          label="Origin"
          onPlaceSelected={details => {
            onPlaceSelected(details, "origin")
          }}
        />
        <InputAutocomplete
          label="Destination"
          onPlaceSelected={details => {
            onPlaceSelected(details, "destination")
          }}
        />
        <TouchableOpacity style={styles.button} onPress={traceRoute}>
          <Text style={styles.buttonText}>Trace route</Text>
        </TouchableOpacity>
        {distance && duration ? (
          <View>
            <Text>Distance: {distance.toFixed(2)}Miles</Text>
            <Text>Duration: {Math.ceil(duration)} min</Text>
          </View>
        ) : null}
      
  </View>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
  },
  map: {
    width: '100%',
    height: '100%',
  },
  input:{
borderColor: "#888",
borderWidth:1,

  },
  searchContainer:{
    position:"absolute",
    width:"90%",

    backgroundColor:"white",
    shadowColor:"black",
    shadowOffset:{width:2,height:2},
    shadowOpacity:0.5,
    shadowRadius:4,
    elevation:4,
    padding:8,
    borderRadius:8,
    top:Constants.statusBarHeight,
    alignContent:"center"
  },
  bubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
    // marginBottom: -15
  },
  name: {
    fontSize: 16,
    marginBottom: 5,
  },
  image: {
    width: "100%",
    height: 80,
  },
  button: {
    backgroundColor: "#466672",
    paddingVertical: 12,
    marginTop: 16,
    borderRadius: 4,
    
  },
  buttonText: {
    textAlign: "center",
    color:"white",
    fontWeight:"bold"
  }
});