import React, { useState } from "react";
import { Link } from "expo-router";
import styles from "../../globalStyles";
import { View, Text, ScrollView } from "react-native";
import Checkbox from "expo-checkbox";

const fc02 = () => {
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
  const [isChecked23, setChecked23] = useState(false);
  const [isChecked24, setChecked24] = useState(false);
  const [isChecked25, setChecked25] = useState(false);
  const [isChecked26, setChecked26] = useState(false);

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

  const handleCheckboxChange23 = (value: boolean) => {
    setChecked23(value);
    if (value) {
      setChecked24(false);
    }
  };

  const handleCheckboxChange24 = (value: boolean) => {
    setChecked24(value);
    if (value) {
      setChecked23(false);
    }
  };
  const handleCheckboxChange25 = (value: boolean) => {
    setChecked25(value);
    if (value) {
      setChecked26(false);
    }
  };
  const handleCheckboxChange26 = (value: boolean) => {
    setChecked26(value);
    if (value) {
      setChecked25(false);
    }
  };
  const totalItems = 13;
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
    isChecked23,
    isChecked24,
    isChecked25,
    isChecked26,
  ].filter((isChecked) => isChecked).length;
  const percentage = Math.round((sum / totalItems) * 100);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>FC 02 – PAYMENT : TERM CONTRACT</Text>
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
              Is a copy of the Summary of Quotation Tender (SQT) / Expense
              Approval (EA) for term contractors forwarded to Trust Account with
              approval from Management Council or a resolution by circulation?
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
              Check work orders? Site not required putting up works order for
              term contractual works
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
              Are credit notes attained from contractors where necessary and
              filed accordingly?
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
              Are the services certified by the site manager and accounts code
              indicated on the Invoice?
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
              Invoices held back – are they communicated in writing to the
              supplier after 45 days?
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
              Does the Accounts Officer accrue monthly into the site’s financial
              statement?
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
              Does the site manager check the invoice for the following items?
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
            <Text style={styles.subtitle}>a. Correct address</Text>
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
              "b. Letter of Deduction (if any)",
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
              c. Service report/Delivery order
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
              d. Credit note from supplier (if there is a deduction)
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
        <View style={styles.text80text20}>
          <View style={styles.text80}>
            <Text style={styles.subtitle}>
              Are payment voucher accompanied with the cheque payment and
              invoice?
            </Text>
          </View>
          <View style={styles.text20}>
            <Checkbox
              value={isChecked23}
              onValueChange={handleCheckboxChange23}
              style={styles.checkbox}
            />
            <Checkbox
              value={isChecked24}
              onValueChange={handleCheckboxChange24}
              style={styles.checkbox}
            />
          </View>
        </View>
        <View style={styles.text80text20}>
          <View style={styles.text80}>
            <Text style={styles.subtitle}>
              Filing performed appropriately. (e.g. payment voucher into payment
              voucher file)
            </Text>
          </View>
          <View style={styles.text20}>
            <Checkbox
              value={isChecked25}
              onValueChange={handleCheckboxChange25}
              style={styles.checkbox}
            />
            <Checkbox
              value={isChecked26}
              onValueChange={handleCheckboxChange26}
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

export default fc02;

// const textItems = [
//   "Is a copy of the Summary of Quotation Tender (SQT) / Expense Approval (EA) for term contractors forwarded to Trust Account with approval from Management Council or a resolution by circulation?",
//   "Check work orders? Site not required putting up works order for term contractual works",
//   "Are credit notes attained from contractors where necessary and filed accordingly?",
//   "Are the services certified by the site manager and accounts code indicated on the Invoice?",
//   "Invoices held back – are they communicated in writing to the supplier after 45 days?",
//   "Does the Accounts Officer accrue monthly into the site’s financial statement?",
//   "Does the site manager check the invoice for the following items?",
//   "a. Correct address",
//   "b. Letter of Deduction (if any)",
//   "c. Service report/Delivery order",
//   "d. Credit note from supplier (if there is a deduction)",
//   "Are payment voucher accompanied with the cheque payment and invoice?",
//   "Filing performed appropriately. (e.g. payment voucher into payment voucher file)",
// ];
