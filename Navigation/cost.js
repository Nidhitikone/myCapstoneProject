import React, { useState } from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import { BarChart } from "react-native-chart-kit";
import RNPickerSelect from "react-native-picker-select";

import { ScrollView } from "react-native-gesture-handler";

const BarChartComponent = ({ data, labels }) => {
  const chartConfig = {
    backgroundColor: "#466672",
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };

  const barChartStyle = {
    marginVertical: 8,
    borderRadius: 8,
  };  


  return (
    <View styles={pickerSelectStyles.container}>

      <BarChart 
        data={{
          labels,
          datasets: [
            {
              data,
            },
          ],
        }}
        width={Dimensions.get('window').width}
        height={250}
        chartConfig={chartConfig}
        style={{backgroundColor:"#D0DBDF"}}
        withInnerLines={false} // Remove inner grid lines for cleaner look
      />
    </View>
  );
};

export default function CostScreen() {
  const [selectedData, setSelectedData] = useState("data1");

  const dataOptions = [
    { label: "Dog", value: "data0", des:"1235465" },
    { label: "Labrador retriever", value: "data1" },
    { label: "French bulldog", value: "data2" },
    { label: "Golden retriever", value: "data3" },
    { label: "German Shepherd", value: "data4" },
    { label: "Poodle", value: "data5" },
     
    { label: "Cat", value: "data10" },
    { label: "Domestic Shorthair", value: "data11" },
    { label: "American Shorthair", value: "data12" },
    { label: "Domestic Longhair", value: "data13" },
    { label: "Siamese", value: "data14" },
    { label: "Ragdoll", value: "data15" },

    // Add more data options here as needed

    /*
    French bulldog
    Golden retriever
    German Shepherd
    Poodle
   
*/


  ];

  const dataMap = {
    data0: [0, 0, 0, 0, 0, 0],
    data1: [750, 500, 150, 300, 150, 250],
    data2: [450, 450, 150, 400, 150, 300],
    data3: [600, 600, 150, 500, 150, 250],
    data4: [900, 750, 150, 650, 150, 300],
    data5: [600, 600, 150, 500, 150, 250],


    data10: [0, 0, 0, 0, 0, 0],
    data11: [325, 200, 50, 300, 100, 250],
    data12: [275, 200, 100,400, 70, 300],
    data13: [375, 200, 80, 200, 75, 250],
    data14: [280, 200, 70, 290, 100, 300],
    data15: [340, 200, 50, 325, 90, 250],


  };

  const labels = ['Food', 'Insurance','Treats' ,'Vet', 'Teeth care', 'Other'];


  const handleDataChange = (value) => {
    setSelectedData(value);
  };

  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center",top:5 }}>
      
    <Text style={{
      alignSelf: 'center',
      fontSize: 32,
      fontWeight: 700,
      marginTop: 0, 
    }}>

    What is the cost of owning a Pet in Canada in 2023?
    </Text> 
 
    <Image source={{uri: 'https://assets-global.website-files.com/5e3ca6c435ea8d7e0aaa12c2/61d7a292a2dc744c21b4e2a7_money-dog_2.gif'}} 
    style={{width:Dimensions.get('window').width, height: 250}} />      

      <RNPickerSelect 
        onValueChange={(value) => handleDataChange(value)}
        items={dataOptions}
        value={selectedData}
        style={pickerSelectStyles}
      />
      <BarChartComponent data={dataMap[selectedData]} labels={labels} />
      
    </View>
    </ScrollView>
  );
}


const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 20,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "white",
    paddingRight: 30,
    backgroundColor: "#466672",
    textAlign: "center", // Center the text inside the picker
  },
  inputAndroid: {
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    color: "white",
    paddingRight: 30,
    backgroundColor: "#466672",
    textAlign: "center", // Center the text inside the picker
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginTop:"-12%",
    marginBottom:"-12%",
    
}});