import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { Link } from "expo-router";
import styles from "../globalStyles";

const opsControl = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>OPERATIONS CONTROL (OC)</Text>
        </View>
        <View>
          <Link
            style={[styles.title, { color: "#0078D4" }]}
            href="/ims/opsControl/oc01"
          >
            OC 01 - CUSTOMER REQUEST SYSTEM
          </Link>
          <Link
            style={[styles.title, { color: "#0078D4" }]}
            href="/ims/opsControl/oc02"
          >
            OC 02 - MAINTENANCE OF PLANT AND EQUIPMENT
          </Link>
          <Link
            style={[styles.title, { color: "#0078D4" }]}
            href="/ims/opsControl/oc03"
          >
            OC 03 - REGULAR AUDIT OF BUILDING FACILITIES AND GROUNDS
          </Link>
          <Link
            style={[styles.title, { color: "#0078D4" }]}
            href="/ims/opsControl/oc04"
          >
            OC 04 – PROPERTY ASSET REGISTER
          </Link>
          <Link
            style={[styles.title, { color: "#0078D4" }]}
            href="/ims/opsControl/oc05"
          >
            OC 05 - EMERGENCY PREPAREDNESS & RESPONSE
          </Link>
          <Link
            style={[styles.title, { color: "#0078D4" }]}
            href="/ims/opsControl/oc06"
          >
            OC 06 – PROCUREMENT
          </Link>
          <Link
            style={[styles.title, { color: "#0078D4" }]}
            href="/ims/opsControl/oc07"
          >
            OC 07 - HEALTH & SAFETY
          </Link>
          <Link
            style={[styles.title, { color: "#0078D4" }]}
            href="/ims/opsControl/oc08"
          >
            OC 08 – PUBLIC RELATIONS – INCIDENT REPORT
          </Link>
          <Link
            style={[styles.title, { color: "#0078D4" }]}
            href="/ims/opsControl/oc09"
          >
            OC 09 – MANAGEMENT OF SERVICE PROVIDERS
          </Link>
          <Link
            style={[styles.title, { color: "#0078D4" }]}
            href="/ims/opsControl/oc10"
          >
            OC 10 - RENOVATION WORKS
          </Link>
          <Link
            style={[styles.title, { color: "#0078D4" }]}
            href="/ims/opsControl/oc11"
          >
            OC 11 - MANAGEMENT OFFICE ACCESS
          </Link>
          <Link
            style={[styles.title, { color: "#0078D4" }]}
            href="/ims/opsControl/oc12"
          >
            OC 12 – SERVICE PROVIDERS MOVEMENT
          </Link>
          <Link
            style={[styles.title, { color: "#0078D4" }]}
            href="/ims/opsControl/oc13"
          >
            OC 13 – LICENSES AND WARRANTIES
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default opsControl;
