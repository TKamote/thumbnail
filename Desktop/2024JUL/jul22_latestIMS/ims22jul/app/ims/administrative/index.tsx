import React, { useState } from "react";
import { Link } from "expo-router";
import styles from "../globalStyles";
import { View, Text, ScrollView } from "react-native";

const administrative = () => {
  const [isChecked1, setChecked1] = useState(false);
  const links = [
    {
      href: "/ims/administrative/admin01",
      text: "AC 01 – FILING SYSTEM FOR SITE AND HEAD OFFICE",
    },
    {
      href: "/ims/administrative/admin02",
      text: "AC 02 – CORRESPONDENCE MANAGEMENT",
    },
    {
      href: "/ims/administrative/admin03",
      text: "AC 03 – COUNCIL & EXECUTIVE COMMITTEE MEETINGS – NOTICE, AGENDA AND MINUTES",
    },
    { href: "/ims/administrative/admin04", text: "AC 04 – PROPERTY GUIDE" },
    { href: "/ims/administrative/admin05", text: "AC 05 – STRATA ROLL" },
    {
      href: "/ims/administrative/admin06",
      text: "AC 06 – PROVISION OF INFORMATION – S47(1)(A) OF BMSMA",
    },
    {
      href: "/ims/administrative/admin07",
      text: "AC 07 – PROVISION OF INFORMATION – S47(1)(B) OF BMSMA",
    },
    {
      href: "/ims/administrative/admin08",
      text: "AC 08 – ANNUAL GENERAL MEETING (AGM)",
    },
    {
      href: "/ims/administrative/admin09",
      text: "AC 09 – PREPARATION FOR GENERAL MEETING",
    },
    {
      href: "/ims/administrative/admin10",
      text: "AC 10 – POST GENERAL MEETING",
    },
  ];

  return (
    <View style={styles.container}>
      <Link href={links[0].href}>
        {links[0].text}
      </Link>
      <Text style={styles.title}>ADMINISTRATIVE CONTROL</Text>
      {links.slice(1).map((link, index) => (
        <Link
          key={index}
          style={[
            styles.title,
            {
              color: "#0078D4",
              backgroundColor: "#fff",
              margin: 5,
              padding: 5,
              marginRight: 10,
              borderRadius: 15,
            },
          ]}
          href={link.href}
        >
          {link.text}
        </Link>
      ))}
    </View>
  );
};

export default administrative;
