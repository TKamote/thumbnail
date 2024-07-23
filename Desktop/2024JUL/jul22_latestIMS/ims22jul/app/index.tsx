import { Link } from "expo-router";
import { StyleSheet, Text, StatusBar, View } from "react-native";
import React from "react";

export default function Page() {
  return (
    <View style={styles.container}>
        <Text style={[styles.title, { color: COLORS.red }]}>INTEGRATED MANAGEMENT SYSTEM</Text>
        <Link style={[styles.subtitle, { lineHeight: 40 }]} href="/ims">
        AUDIT CHECKLIST ⏩️
        </Link>
    </View>
  );
}


const COLORS = {
  midnight: '#131E29',
  space: '#003E51',
  sand: '#EOC6AD',
  red: '#E30613',
  ocean: '#BCDEE6',
  white: '#fff',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    padding: 2,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",  
    marginHorizontal: "auto",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "#E30613",
  },
  subtitle: {
    fontSize: 18,
    color: "#131E29",
    textAlign: "center",
    fontWeight: "bold",
  },
});
