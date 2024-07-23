import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import styles from "../globalStyles";

const humanResources = () => {
  const links = [
    { href: "/ims/humanResources/hr01", text: "HR 01 - PERSONNEL INFORMATION" },
    { href: "/ims/humanResources/hr02", text: "HR 02 - STAFF MOVEMENT RECORD" },
    { href: "/ims/humanResources/hr03", text: "HR 03 - DAY OFF & LEAVE MANAGEMENT" },
    { href: "/ims/humanResources/hr04", text: "HR 04 - ON LINE LEAVE APPLICATION" },
    { href: "/ims/humanResources/hr05", text: "HR 05 – REQUISITION, RECRUITMENT & SELECTION OF NEW STAFF (Applicable to specific projects)" },
    { href: "/ims/humanResources/hr06", text: "HR 06 – NEW EMPLOYEE ORIENTATION PROGRAM" },
    { href: "/ims/humanResources/hr07", text: "HR 07 – JOB DESCRIPTION" },
    { href: "/ims/humanResources/hr08", text: "HR 08 - RESIGNATION" },
    { href: "/ims/humanResources/hr09", text: "HUMAN RESOURCE – OTHERS" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HUMAN RESOURCES CONTROL (HR)</Text>
      {links.slice(1).map((link, index) => (
        <Link key={index} style={[styles.title, { color: "#0078D4", backgroundColor: "#fff", margin: 5, padding: 5, marginRight: 10, borderRadius: 15}]} href={link.href}>{link.text}</Link>
      ))}
    </View>
  );
};
 
export default humanResources;
