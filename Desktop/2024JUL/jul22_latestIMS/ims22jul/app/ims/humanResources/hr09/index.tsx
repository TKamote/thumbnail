import React from "react";
import { Link } from "expo-router";
import styles from "../../globalStyles";
import { View, Text, ScrollView } from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";

const hr09 = () => {
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);

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

  const totalItems = 1;
  const sum = [isChecked1, isChecked2].filter((isChecked) => isChecked).length;
  const percentage = Math.round((sum / totalItems) * 100);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HUMAN RESOURCE – OTHERS</Text>
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
            Do all employees aware of the existence on the Employee Handbook in
            Tech Zone? Review.
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

      <View style={styles.progressBarContainer}>
        <View
          style={[
            styles.progressBar,
            { width: `${(sum / totalItems) * 100}%` },
          ]}
        >
           <Text style={styles.percenText}>{percentage}%</Text>
        </View>
      </View>
    </View>
  );
};

export default hr09;
