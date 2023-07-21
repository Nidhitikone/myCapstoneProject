import React, { Component,useEffect,useState } from "react";
import { View, Text, StyleSheet,ScrollView } from "react-native";
import { Button, Stack, Surface } from '@react-native-material/core';
import { TextInput, Switch, Portal, Modal, Provider, ActivityIndicator, MD2Colors } from 'react-native-paper';
import { db,storage } from "../firebase-config";
import { onValue, push, remove, ref, update, updateDoc } from 'firebase/database';
export default function AddFeedScreen(props) {
  return (
    
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>AddFeedScreen </Text>
      
    </View>
     
  );
}