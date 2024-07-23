import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import React from "react";
import { Link } from "expo-router";

const data = [
  {
    id: "1",
    title: "GENERAL",
    href: "./general",
    icon: "📒",
  },
  {
    id: "2",
    title: "OPERATION CONTROL",
    href: "./opsControl",
    icon: "📒",
  },
  {
    id: "3",
    title: "HUMAN RESOURCES CONTROL",
    href: "./humanResources",
    icon: "📒",
  },
  {
    id: "4",
    title: "FINANCIAL CONTROL",
    href: "./financial",
    icon: "📒",
  },
  {
    id: "5",
    title: "MANAGEMENT CONTROL",
    href: "./management",
    icon: "📒",
  },
  {
    id: "6",
    title: "ADMINISTRATIVE CONTROL",
    href: "./administrative",
    icon: "📒",
  },
];

const Index = () => {
  function renderItem({ item }) {
    return (
      <Link style={styles.sectionlink} href={item.href}>
        {item.title}
      </Link>
    );
  }
  return (
    <ScrollView>
      <View style={styles.container}> 
        <Text
          style={[
            styles.sectionlink,
            { color: COLORS.midnight, textAlign: "center", },
          ]}
        >
          INTERNAL AUDIT CHECKLIST
        </Text>

        <View style={styles.prelim}>
          <Text
            style={[
              styles.link,
              { paddingBottom: 23, paddingLeft: 15},
            ]}
          >
            TABLE OF CONTENTS
          </Text>
          <View>
            {data.map((item) => (
              <React.Fragment key={item.id.toString()}>
                <Link
                  style={[styles.link, { color: "#0078D4", paddingBottom: 5 }]}
                  href={item.href}
                >
                  <View
                    style={styles.tableOfContents}
                  >
                    <Text style={[{ fontSize: 18 }]}>{item.title}</Text>
                    <Text style={[{ fontSize: 18 }]}>{item.icon}</Text>
                  </View>
                </Link>
              </React.Fragment>
            ))}
          </View>
        </View>

        
      </View>
    </ScrollView>
  );
};

export default Index;

const COLORS = {
  midnight: "#131E29",
  space: "#003E51",
  sand: "#EOC6AD",
  red: "#E30613",
  ocean: "#BCDEE6",
  white: "#fff",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
    margin: 2,
    width: "100%",
    height: "100%",
    paddingHorizontal: 10,
    paddingVertical: 30,
  },
  prelim: {
    padding: 5,
    paddingBottom: 10,
    paddingTop: 10,
    marginBottom: 1,
  },
  inline: {
    flexDirection: "row",
    marginBottom: 5,
    marginTop: 5,
    justifyContent: "space-between",
    alignItems: "center",
  },
  tableOfContents:  {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
    paddingHorizontal: 15,
    borderWidth: .2,
    borderRadius: 14,
  },
  ims: {
    backgroundColor: COLORS.ocean,
    borderRadius: 4,
    paddingVertical: 5,
    marginVertical: 5,
    width: "40%",
    display: "flex",
    alignSelf: "center",
  },
  imstitle: {
    color: COLORS.red,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Times New Roman",
  },
  sectionlink: {
    marginTop: 2,
    marginBottom: 2,
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.white,
    width: "70%",
    paddingVertical: 20
  },
  link: {
    fontSize: 18,
    color: COLORS.midnight,
    paddingTop: 5,
    fontWeight: "bold",
  },
  applink: {
    color: "blue",
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  section: {
    backgroundColor: COLORS.red,
    paddingTop: 5,
    paddingBottom: 15,
  },

  item: {
    color: COLORS.midnight,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 10,
    marginBottom: 3,
    fontSize: 10,
  },

  input: {
    height: 20,
    width: 140,
    marginHorizontal: 5,
    marginBottom: 5,
    borderWidth: 1,
    borderBottomColor: COLORS.white,
  },
});
