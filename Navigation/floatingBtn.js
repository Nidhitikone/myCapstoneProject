import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet,Modal } from 'react-native';

const FloatingButton = () => {
  const [isModalVisible,setModalVisible]=useState(false);

  const toggleModal= ()=>{
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={toggleModal} style={styles.button}>
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>This is your modal content.</Text>
      
            <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
              <Text style={styles.buttonText}>Close Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'blue',
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 30,
  },
});

export default FloatingButton;
