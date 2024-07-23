import React, { useState } from "react";
import { Link } from "expo-router";
import styles from "../../globalStyles";
import { View, Text, ScrollView } from "react-native";
import Checkbox from "expo-checkbox";

const fc04 = () => {
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
  const [isChecked15, setChecked15] = useState(false);
  const [isChecked16, setChecked16] = useState(false);
  const [isChecked17, setChecked17] = useState(false);
  const [isChecked18, setChecked18] = useState(false);
  const [isChecked19, setChecked19] = useState(false);
  const [isChecked20, setChecked20] = useState(false);
  const [isChecked21, setChecked21] = useState(false);
  const [isChecked22, setChecked22] = useState(false);

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

  const handleCheckboxChange15 = (value: boolean) => {
    setChecked15(value);
    if (value) {
      setChecked16(false);
    }
  };

  const handleCheckboxChange16 = (value: boolean) => {
    setChecked16(value);
    if (value) {
      setChecked15(false);
    }
  };

  const handleCheckboxChange17 = (value: boolean) => {
    setChecked17(value);
    if (value) {
      setChecked18(false);
    }
  };

  const handleCheckboxChange18 = (value: boolean) => {
    setChecked18(value);
    if (value) {
      setChecked17(false);
    }
  };

  const handleCheckboxChange19 = (value: boolean) => {
    setChecked19(value);
    if (value) {
      setChecked20(false);
    }
  };

  const handleCheckboxChange20 = (value: boolean) => {
    setChecked20(value);
    if (value) {
      setChecked19(false);
    }
  };

  const handleCheckboxChange21 = (value: boolean) => {
    setChecked21(value);
    if (value) {
      setChecked22(false);
    }
  };

  const handleCheckboxChange22 = (value: boolean) => {
    setChecked22(value);
    if (value) {
      setChecked21(false);
    }
  };

  const totalItems = 11;
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
    isChecked15,
    isChecked16,
    isChecked17,
    isChecked18,
    isChecked19,
    isChecked20,
    isChecked21,
    isChecked22,
  ].filter((isChecked) => isChecked).length;
  const percentage = Math.round((sum / totalItems) * 100);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>FC 04 - CASH MANAGEMENT</Text>
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
              Are collections from car parking systems collected regularly? (min
              once a week)
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
              Where are the collected monies kept? Is there a safe for the site?
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
        </View>
        <View style={styles.text80text20}>
          <View style={styles.text80}>
            <Text style={styles.subtitle}>
              Are all collected monies (maintenance fee, sinking fund, etc)
              banked in once a week or when the cash reaches $1000.00?
            </Text>
          </View>

          <View style={styles.text20}>
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
              Are receipts issued for deposits, payments for various services?
            </Text>
          </View>

          <View style={styles.text20}>
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
              Is a schedule for receipts of monies submitted to Accounts Officer
              accompanied with the bank in slips and cheques?
            </Text>
          </View>

          <View style={styles.text20}>
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
              Are cash advanced accompanied with written approval? (e.g.
              minutes)
            </Text>
          </View>

          <View style={styles.text20}>
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
              For cash advance, are all receipts submitted to Accounts Officer?
            </Text>
          </View>

          <View style={styles.text20}>
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

        <View style={styles.text80text20}>
          <View style={styles.text80}>
            <Text style={styles.subtitle}>
              Are all deposits recorded into the schedule of deposits form?
            </Text>
          </View>

          <View style={styles.text20}>
            <Checkbox
              value={isChecked15}
              onValueChange={handleCheckboxChange15}
              style={styles.checkbox}
            />
            <Checkbox
              value={isChecked16}
              onValueChange={handleCheckboxChange16}
              style={styles.checkbox}
            />
          </View>
        </View>

        <View style={styles.text80text20}>
          <View style={styles.text80}>
            <Text style={styles.subtitle}>
              Are Receipt Books pre-printed with serial numbers, and bearing JLL
              or Client identification?
            </Text>
          </View>

          <View style={styles.text20}>
            <Checkbox
              value={isChecked17}
              onValueChange={handleCheckboxChange17}
              style={styles.checkbox}
            />
            <Checkbox
              value={isChecked18}
              onValueChange={handleCheckboxChange18}
              style={styles.checkbox}
            />
          </View>
        </View>

        <View style={styles.text80text20}>
          <View style={styles.text80}>
            <Text style={styles.subtitle}>
              Is the AGM or any other request for cash advance requested in
              writing?
            </Text>
          </View>

          <View style={styles.text20}>
            <Checkbox
              value={isChecked19}
              onValueChange={handleCheckboxChange19}
              style={styles.checkbox}
            />
            <Checkbox
              value={isChecked20}
              onValueChange={handleCheckboxChange20}
              style={styles.checkbox}
            />
          </View>
        </View>

        <View style={styles.text80text20}>
          <View style={styles.text80}>
            <Text style={styles.subtitle}>
              Are receipts for cash advancement (e.g. AGM) submitted together
              with a statement?
            </Text>
          </View>

          <View style={styles.text20}>
            <Checkbox
              value={isChecked21}
              onValueChange={handleCheckboxChange21}
              style={styles.checkbox}
            />
            <Checkbox
              value={isChecked22}
              onValueChange={handleCheckboxChange22}
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
    </ScrollView>
  );
};

export default fc04;
