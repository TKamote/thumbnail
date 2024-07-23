import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import styles from "../globalStyles";

const management = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MANAGEMENT CONTROL (MC)</Text>
      <Link
        style={[styles.title, { color: "#0078D4" }]}
        href="/ims/management/mc01"
      >
        MC 01 – NON-COMFORMANCE & CORRECTIVE & PREVENTATIVE ACTIONS
      </Link>
      <Link
        style={[styles.title, { color: "#0078D4" }]}
        href="/ims/management/mc02"
      >
        MC 02 – OMS DOCUMENTS AND RECORDS
      </Link>
      <Link
        style={[styles.title, { color: "#0078D4" }]}
        href="/ims/management/mc03"
      >
        MC 03 – TRANSITION / START UP PROCESS
      </Link>
      <Link
        style={[styles.title, { color: "#0078D4" }]}
        href="/ims/management/mc04"
      >
        MC 04 – QUALITY PERFORMANCE AUDITS – INTERNAL & EXTERNAL
      </Link>
      <Link
        style={[styles.title, { color: "#0078D4" }]}
        href="/ims/management/mc05"
      >
        MC 05 – MANAGEMENT TEAM MEETING
      </Link>

      <Link
        style={[styles.title, { color: "#0078D4" }]}
        href="/ims/management/mc06"
      >
        MC 06 – TRANSFER OF RESPONSIBILITIES
      </Link>
    </View>
  );
};

export default management;
