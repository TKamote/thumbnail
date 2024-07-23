import React, { useState } from "react";
import { Link } from "expo-router";
import styles from "../../globalStyles";
import { View, Text } from "react-native";
import Checkbox from "expo-checkbox";

const oc11 = () => {
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);
  const [isChecked4, setChecked4] = useState(false);
  const [isChecked5, setChecked5] = useState(false);
  const [isChecked6, setChecked6] = useState(false);
  const [isChecked7, setChecked7] = useState(false);
  const [isChecked8, setChecked8] = useState(false);

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
  const handleCheckbox7Change = (value: boolean) => {
    setChecked7(value);
    if (value) {
      setChecked8(false);
    }
  };
  const handleCheckbox8Change = (value: boolean) => {
    setChecked8(value);
    if (value) {
      setChecked7(false);
    }
  };

  const totalItems = 4;
  const sum = [
    isChecked1,
    isChecked2,
    isChecked3,
    isChecked4,
    isChecked5,
    isChecked6,
    isChecked7,
    isChecked8,
  ].filter((isChecked) => isChecked).length;
  const percentage = Math.round((sum / totalItems) * 100);

  //   Are all affected personnel (incl. Security) aware of the process?
  // Is a sealed envelope containing management office key given to the guard for access to essential services such as DB, Fire Alarm Panel?
  // Is the daily check conducted to ascertain been used?
  // Is usage recorded and noted in Occurrence Book?

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OC 11 - MANAGEMENT OFFICE ACCESS</Text>
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
            Are all affected personnel (incl. Security) aware of the process?
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
            Is a sealed envelope containing management office key given to the
            guard for access to essential services such as DB, Fire Alarm Panel?
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
            Is the daily check conducted to ascertain been used?
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

      <View style={styles.text80text20}>
        <View style={styles.text80}>
          <Text style={styles.subtitle}>
            Is usage recorded and noted in Occurrence Book?
          </Text>
        </View>

        <View style={styles.text20}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked7}
            onValueChange={handleCheckbox7Change}
          />
          <Checkbox
            style={styles.checkbox}
            value={isChecked8}
            onValueChange={handleCheckbox8Change}
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

export default oc11;
