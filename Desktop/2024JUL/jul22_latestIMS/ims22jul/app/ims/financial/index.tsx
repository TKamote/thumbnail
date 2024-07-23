import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import styles from "../globalStyles";

const financial = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HUMAN RESOURCES CONTROL (HR)</Text>
      <Link style={[styles.title, { color: "#0078D4" }]} href="/ims/financial/fc01">FC 01 - PETTY CASH MANAGEMENT</Link>
      <Link style={[styles.title, { color: "#0078D4" }]} href="/ims/financial/fc02">FC 02 – PAYMENT : TERM CONTRACT</Link>
      <Link style={[styles.title, { color: "#0078D4" }]} href="/ims/financial/fc03">FC 03 – PAYMENT : AD-HOC WORKS</Link>
      <Link style={[styles.title, { color: "#0078D4" }]} href="/ims/financial/fc04">FC 04 - CASH MANAGEMENT</Link>
      <Link style={[styles.title, { color: "#0078D4" }]} href="/ims/financial/fc05">FC 05 - RENOVATION APPLICATION & DEPOSITS</Link>
      <Link style={[styles.title, { color: "#0078D4" }]} href="/ims/financial/fc06">FC 06 - FIXED ASSET</Link>
      <Link style={[styles.title, { color: "#0078D4" }]} href="/ims/financial/fc07">FC 07 - ACCOUNTS RECOVERABLE</Link>
     
    </View>
  );
};

export default financial;
