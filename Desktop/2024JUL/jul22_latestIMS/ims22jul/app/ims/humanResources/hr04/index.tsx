import React from "react";
import { Link } from "expo-router";
import styles from "../../globalStyles";
import { View, Text, ScrollView } from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";

const hr04 = () => {
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);
  const [isChecked4, setChecked4] = useState(false);
  const [isChecked5, setChecked5] = useState(false);
  const [isChecked6, setChecked6] = useState(false);

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

  const handleCheckbox5Change = (value: boolean) => {
    setChecked5(value);
    if (value) {
      setChecked6(false);
    }
  };
  const handleCheckbox6Change = (value: boolean) => {
    setChecked6(value);
    if (value) {
      setChecked5(false);
    }
  };

  const totalItems = 3;
  const sum = [
    isChecked1,
    isChecked2,
    isChecked3,
    isChecked4,
    isChecked5,
    isChecked6,
  ].filter((isChecked) => isChecked).length;
  const percentage = Math.round((sum / totalItems) * 100);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>HR 04 - ON LINE LEAVE APPLICATION</Text>
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
            Are the leave submission criteria adhered to?
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
      <View style={styles.text80text20}>
        <View style={styles.text80}>
          <Text style={styles.subtitle}>
            For urgent leave, is approval attained from appropriate authority?
            Review process.
          </Text>
        </View>

        <View style={styles.text20}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked5}
            onValueChange={handleCheckbox5Change}
          />
          <Checkbox
            style={styles.checkbox}
            value={isChecked6}
            onValueChange={handleCheckbox6Change}
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
           <Text style={styles.percenText}>
              {percentage}%
            </Text>
        </View>
      </View>
    </View>
  );
};

export default hr04;
