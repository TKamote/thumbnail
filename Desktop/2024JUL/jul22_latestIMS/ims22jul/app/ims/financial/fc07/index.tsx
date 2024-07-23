import React, { useState } from "react";
import { Link } from "expo-router";
import styles from "../../globalStyles";
import { View, Text } from "react-native";
import Checkbox from "expo-checkbox";

const fc07 = () => {
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

  const handleCheckboxChange5 = (value: boolean) => {
    setChecked5(value);
    if (value) {
      setChecked6(false);
    }
  };

  const handleCheckboxChange6 = (value: boolean) => {
    setChecked6(value);
    if (value) {
      setChecked5(false);
    }
  };

  const handleCheckboxChange7 = (value: boolean) => {
    setChecked7(value);
    if (value) {
      setChecked8(false);
    }
  };

  const handleCheckboxChange8 = (value: boolean) => {
    setChecked8(value);
    if (value) {
      setChecked7(false);
    }
  };

  const handleCheckboxChange9 = (value: boolean) => {
    setChecked9(value);
    if (value) {
      setChecked10(false);
    }
  };

  const handleCheckboxChange10 = (value: boolean) => {
    setChecked10(value);
    if (value) {
      setChecked9(false);
    }
  };

  const handleCheckboxChange11 = (value: boolean) => {
    setChecked11(value);
    if (value) {
      setChecked12(false);
    }
  };

  const handleCheckboxChange12 = (value: boolean) => {
    setChecked12(value);
    if (value) {
      setChecked11(false);
    }
  };

  const handleCheckboxChange13 = (value: boolean) => {
    setChecked13(value);
    if (value) {
      setChecked14(false);
    }
  };

  const handleCheckboxChange14 = (value: boolean) => {
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
      <Text style={styles.title}>FC 07 - ACCOUNTS RECOVERABLE</Text>
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
            Is the letter of claims against contractor or invoice submitted to
            Account Officer?
          </Text>
        </View>

        <View style={styles.text25}>
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
            Has the Accounts Officer charged to Recoverable Accounts?
          </Text>
        </View>

        <View style={styles.text25}>
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
      </View>
      <View style={styles.text80text20}>
        <View style={styles.text80}>
          <Text style={styles.subtitle}>
            Are the relevant information updated in the notes to accounts?
          </Text>
        </View>

        <View style={styles.text25}>
          <Checkbox
            value={isChecked5}
            onValueChange={handleCheckboxChange5}
            style={styles.checkbox}
          />
          <Checkbox
            value={isChecked6}
            onValueChange={handleCheckboxChange6}
            style={styles.checkbox}
          />
        </View>
      </View>

      <View style={styles.text80text20}>
        <View style={styles.text80}>
          <Text style={styles.subtitle}>
            Has the Accounts Officer billed the amount to SP?
          </Text>
        </View>

        <View style={styles.text25}>
          <Checkbox
            value={isChecked7}
            onValueChange={handleCheckboxChange7}
            style={styles.checkbox}
          />
          <Checkbox
            value={isChecked8}
            onValueChange={handleCheckboxChange8}
            style={styles.checkbox}
          />
        </View>
      </View>

      <View style={styles.text80text20}>
        <View style={styles.text80}>
          <Text style={styles.subtitle}>
            Is the amount received updated in the recoverable accounts?
          </Text>
        </View>

        <View style={styles.text25}>
          <Checkbox
            value={isChecked9}
            onValueChange={handleCheckboxChange9}
            style={styles.checkbox}
          />
          <Checkbox
            value={isChecked10}
            onValueChange={handleCheckboxChange10}
            style={styles.checkbox}
          />
        </View>
      </View>

      <View style={styles.text80text20}>
        <View style={styles.text80}>
          <Text style={styles.subtitle}>
            For under claim amounts, has site manager obtained approval for
            write off?
          </Text>
        </View>

        <View style={styles.text25}>
          <Checkbox
            value={isChecked11}
            onValueChange={handleCheckboxChange11}
            style={styles.checkbox}
          />
          <Checkbox
            value={isChecked12}
            onValueChange={handleCheckboxChange12}
            style={styles.checkbox}
          />
        </View>
      </View>

      <View style={styles.text80text20}>
        <View style={styles.text80}>
          <Text style={styles.subtitle}>
            Are over claims amounts offset against relevant expenses?
          </Text>
        </View>

        <View style={styles.text25}>
          <Checkbox
            value={isChecked13}
            onValueChange={handleCheckboxChange13}
            style={styles.checkbox}
          />
          <Checkbox
            value={isChecked14}
            onValueChange={handleCheckboxChange14}
            style={styles.checkbox}
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

export default fc07;
