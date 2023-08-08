import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated,Image} from 'react-native';

const CollapsibleCard = ({ name,imagesrc,age,description,sex,spayed,vaccinated }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const animatedHeight = useState(new Animated.Value(0))[0];

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    Animated.timing(animatedHeight, {
      toValue: isCollapsed ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={toggleCollapse} style={styles.cardHeader}>
      <Image source={imagesrc} style={styles.image} resizeMode="cover" />
        <Text style={styles.title}>{name}</Text>
      </TouchableOpacity>

      <Animated.View
        style={{
          height: animatedHeight.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 200],
          }),
          overflow: 'hidden',
          paddingHorizontal: 15,
        }}
      >
        
        <Text style={styles.content}>{description}</Text>
        <Text style={styles.text}>Gender:                          {sex}</Text>
        <Text style={styles.text}>Age:                                {age}</Text>
        <Text style={styles.text}>Is Spayed /Neutered?:   {spayed}</Text>
        <Text style={styles.text}>Vaccinated?                    {vaccinated}</Text>

        <Text></Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#D0DBDF",
    borderRadius: 8,
    elevation: 2,
    marginVertical: 10,
    overflow: 'hidden',
  },
  cardHeader: {
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
   color:"#466672"
  },
  content: {
    fontSize: 16,
    paddingVertical: 10,
    color:"#2A3D44"
   
  },
  image: {
    width: 350,
    height: 350,
  },
  text:{
    fontStyle:"italic",
    fontWeight:"500"
  }
});

export default CollapsibleCard;
