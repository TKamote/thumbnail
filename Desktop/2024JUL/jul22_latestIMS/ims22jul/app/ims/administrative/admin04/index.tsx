import React from "react";
import { Link } from "expo-router";
import styles from "../../globalStyles";
import { View, Text, ScrollView } from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";

const admin04 = () => {
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);
  const [isChecked4, setChecked4] = useState(false);

  const handleCheckbox1Change = (value: boolean) => {
    setChecked1(value);
    if (value) {
      setChecked2(false);
    }
  };

  const handleCheckbox2Change = (value: boolean) => {
    setChecked2(value);
    if (value) {
      setChecked1(false);
    }
  };

  const handleCheckbox3Change = (value: boolean) => {
    setChecked3(value);
    if (value) {
      setChecked4(false);
    }
  };

  const handleCheckbox4Change = (value: boolean) => {
    setChecked4(value);
    if (value) {
      setChecked3(false);
    }
  };

  const countYes = [isChecked1, isChecked3].filter(
    (isChecked) => isChecked
  ).length;
  const countNo = [isChecked2, isChecked4].filter(
    (isChecked) => isChecked
  ).length;
  const sum = countYes + countNo;

  console.log(countYes, countNo, sum);
  const totalItems = [isChecked1, isChecked3].length;
  const percentage = Math.floor((sum / totalItems) * 100);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AC 04 – PROPERTY GUIDE</Text>

      <View style={styles.text80text20}>
        <View style={styles.text75}>
          <Text style={styles.yesNA}>Descrtiption</Text>
        </View>

        <View style={styles.text25}>
          <Text style={styles.yesNA}>Yes</Text>
          <Text>|</Text>
          <Text style={styles.yesNA}>NA</Text>
        </View>
      </View>

      <View style={styles.text80text20}>
        <View style={styles.text80}>
          <Text style={styles.subtitle}>
            Are all affected personnel aware of the process?
          </Text>
        </View>

        <View style={styles.text20}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked1}
            onValueChange={handleCheckbox1Change}
          />
          <Checkbox
            style={styles.checkbox}
            value={isChecked2}
            onValueChange={handleCheckbox2Change}
          />
        </View>
      </View>
      <View style={styles.text80text20}>
        <View style={styles.text80}>
          <Text style={styles.subtitle}>
          Is the site Property Guide updated in OMS Online?
          </Text>
        </View>

        <View style={styles.text20}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked3}
            onValueChange={handleCheckbox3Change}
          />
          <Checkbox
            style={styles.checkbox}
            value={isChecked4}
            onValueChange={handleCheckbox4Change}
          />
        </View>
      </View>

      <View style={styles.progressBarContainer}>
        <View
          style={[
            styles.progressBar,
            { width: `${(sum / totalItems) * 100}%` },
          ]}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>
            {percentage}%
          </Text>
        </View>
      </View>
    </View>
  );
};

export default admin04;
