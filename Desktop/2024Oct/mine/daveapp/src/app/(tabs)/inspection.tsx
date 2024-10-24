import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function InspectionScreen() {    
  return (
    <View style={styles.container}>
      <Text>Yeah Really Im in the (tabs) folder inspection.tsx</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})