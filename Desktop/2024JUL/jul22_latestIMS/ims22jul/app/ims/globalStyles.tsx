import Checkbox from "expo-checkbox";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    paddingTop: 40,
    marginBottom: 5,
    paddingHorizontal: 4,
    backgroundColor: "#BCDEE6",
    height: "100%",
    position: "relative",
  },
  body: {
    fontFamily: "Source Sans Serif, sans-serif",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
    marginHorizontal: 7,
    paddingVertical: 10,
    padding: 10,
    backgroundColor: "#fff",
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
  },
  little: {
    fontSize: 12,
    marginLeft: 8,
  },
  verlittle: {
    fontSize: 10,
    marginLeft: 12,
  },
  checkboxContainer: {
    // backgroundColor: "#fff",
  },
  checkbox: {
    marginRight: 8,
    // fontSize: 20,
    width: 25,
    height: 25,
  },
  containercheckbox: {
    backgroundColor: "#fff",
    marginBottom: 5,
    marginTop: 5,
    marginLeft: 8,
    width: 340,
  },
  yesNA: {
    fontSize: 15,
    fontWeight: "bold",
  },
  text80text20: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    margin: 5,
    paddingVertical: 10,
    paddingHorizontal: 4,
    justifyContent: "space-between",
  },
  text80: {
    width: "79%",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    paddingLeft: 8,
  },
  text20: {
    flexDirection: "row",
    alignItems: "center",
    width: "21%",
    marginLeft: 8,
  },
  text75: {
    width: "79%",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    paddingLeft: 8,
    fontWeight: "bold",
  },
  text25: {
    flexDirection: "row",
    alignItems: "center",
    width: "21%",
    marginLeft: 5,
  },
  progressBarContainer: {
    width: "97%",
    height: 27,
    backgroundColor: "#BCDEE6",
    borderRadius: 25,
    overflow: "hidden",
    alignSelf: "center",
    position: "absolute",
    top: 8,
    left: 10,
    borderWidth: .4,
   
  },
  progressBar: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E30613",
  },
  checkboxMain: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  percenText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 11,
  },
  
});
