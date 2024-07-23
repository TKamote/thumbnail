import React, { useState } from "react";
import { Link } from "expo-router";
import styles from "../../globalStyles";
import { View, Text } from "react-native";
import Checkbox from "expo-checkbox";

const fc01 = () => {
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);
  const [isChecked4, setChecked4] = useState(false);

  const handleCheckboxChange1 = (value: boolean) => {
    setChecked1(value);
    if (value) {
      setChecked2(false);
    }
  };
  const handleCheckboxChange2 = (value: boolean) => {
    setChecked2(value);
    if (value) {
      setChecked1(false);
    }
  };
  const handleCheckboxChange3 = (value: boolean) => {
    setChecked3(value);
    if (value) {
      setChecked4(false);
    }
  };
  const handleCheckboxChange4 = (value: boolean) => {
    setChecked4(value);
    if (value) {
      setChecked3(false);
    }
  };

  const totalItems = 2;
  const sum = [
    isChecked1,
    isChecked2,
    isChecked3,
    isChecked4, 
  ].filter((isChecked) => isChecked).length;
  const percentage = Math.round((sum / totalItems) * 100);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>FC 01 - PETTY CASH MANAGEMENT</Text>
      <View style={styles.text80text20}>
        <View style={styles.text75}>
          <Text style={styles.yesNA}>Description</Text>
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
            value={isChecked1}
            onValueChange={handleCheckboxChange1}
            style={styles.checkbox}
          />
          <Checkbox
            value={isChecked2}
            onValueChange={handleCheckboxChange2}
            style={styles.checkbox}
          />
        </View>
      </View>
      <View style={styles.text80text20}>
        <View style={styles.text80}>
          <Text style={styles.subtitle}>
            Is the time keeping records maintained regularly?
          </Text>
        </View>

        <View style={styles.text20}>
          <Checkbox
            value={isChecked3}
            onValueChange={handleCheckboxChange3}
            style={styles.checkbox}
          />
          <Checkbox
            value={isChecked4}
            onValueChange={handleCheckboxChange4}
            style={styles.checkbox}
          />
        </View>
      </View><View style={styles.progressBarContainer}>
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

export default fc01;
