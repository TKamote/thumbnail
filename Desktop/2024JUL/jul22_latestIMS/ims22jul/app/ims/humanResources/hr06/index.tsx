import React, { useState } from "react";
import { Link } from "expo-router";
import styles from "../../globalStyles";
import { View, Text, ScrollView } from "react-native";
import Checkbox from "expo-checkbox";

const hr06 = () => {
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);
  const [isChecked4, setChecked4] = useState(false);
  const [isChecked5, setChecked5] = useState(false);
  const [isChecked6, setChecked6] = useState(false);
  const [isChecked7, setChecked7] = useState(false);
  const [isChecked8, setChecked8] = useState(false);
  const [isChecked9, setChecked9] = useState(false);
  const [isChecked10, setChecked10] = useState(false);
  const [isChecked11, setChecked11] = useState(false);
  const [isChecked12, setChecked12] = useState(false);
  const [isChecked13, setChecked13] = useState(false);
  const [isChecked14, setChecked14] = useState(false);

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
  const handleCheckbox9Change = (value: boolean) => {
    setChecked9(value);
    if (value) {
      setChecked10(false);
    }
  };
  const handleCheckbox10Change = (value: boolean) => {
    setChecked10(value);
    if (value) {
      setChecked9(false);
    }
  };
  const handleCheckbox11Change = (value: boolean) => {
    setChecked11(value);
    if (value) {
      setChecked12(false);
    }
  };
  const handleCheckbox12Change = (value: boolean) => {
    setChecked12(value);
    if (value) {
      setChecked11(false);
    }
  };
  const handleCheckbox13Change = (value: boolean) => {
    setChecked13(value);
    if (value) {
      setChecked14(false);
    }
  };
  const handleCheckbox14Change = (value: boolean) => {
    setChecked14(value);
    if (value) {
      setChecked13(false);
    }
  };
  
  const totalItems = 7;
  const sum = [
    isChecked1,
    isChecked2,
    isChecked3,
    isChecked4,
    isChecked5,
    isChecked6,
    isChecked7,
    isChecked8,
    isChecked9,
    isChecked10,
    isChecked11,
    isChecked12,
    isChecked13,
    isChecked14,
  ].filter((isChecked) => isChecked).length;
  const percentage = Math.round((sum / totalItems) * 100);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HR 06 – NEW EMPLOYEE ORIENTATION PROGRAM</Text>

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
            Is the new employee given induction programme by the site manager?
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
          <Text style={styles.subtitle}>a. Techzone</Text>
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
          <Text style={styles.subtitle}>b. OMS Platform</Text>
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

      <View style={styles.text80text20}>
        <View style={styles.text80}>
          <Text style={styles.subtitle}>c. Site orientation</Text>
        </View>

        <View style={styles.text20}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked9}
            onValueChange={handleCheckbox9Change}
          />
          <Checkbox
            style={styles.checkbox}
            value={isChecked10}
            onValueChange={handleCheckbox10Change}
          />
        </View>
      </View>

      <View style={styles.text80text20}>
        <View style={styles.text80}>
          <Text style={styles.subtitle}>d. Site procedures</Text>
        </View>

        <View style={styles.text20}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked11}
            onValueChange={handleCheckbox11Change}
          />
          <Checkbox
            style={styles.checkbox}
            value={isChecked12}
            onValueChange={handleCheckbox12Change}
          />
        </View>
      </View>
      <View style={styles.text80text20}>
        <View style={styles.text80}>
          <Text style={styles.subtitle}>
            Have you attended regular training including Safety Week, Safety
            Induction, Risk Assessment and Management, etc and provide feedback
            on your training needs?
          </Text>
        </View>

        <View style={styles.text20}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked13}
            onValueChange={handleCheckbox13Change}
          />
          <Checkbox
            style={styles.checkbox}
            value={isChecked14}
            onValueChange={handleCheckbox14Change}
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

export default hr06;
