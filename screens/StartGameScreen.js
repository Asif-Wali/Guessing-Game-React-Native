import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/UI/PrimaryButton";
import Title from "../components/UI/Title";
import Card from "../components/UI/Card";
import colors from "../constants/Colors";
import InstructionText from "../components/UI/InstructionText";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");
  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }
  function resetInputHandler() {
    setEnteredNumber("");
  }
  function confirmInputHandler() {
    if (!enteredNumber) {
      Alert.alert(
        "Number can't be empty!",
        "Try again after entering a number.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    const ChosenNumber = parseInt(enteredNumber);
    if (isNaN(ChosenNumber) || ChosenNumber <= 0 || ChosenNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 0 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(ChosenNumber);
  }
  return (
    <View style={styles.rootContainer}>
    <Title>Guess My Number</Title>
      <Card>
      <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          onChangeText={numberInputHandler}
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onClick={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onClick={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: colors.secondary500,
    borderBottomWidth: 2,
    color: colors.secondary500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
export default StartGameScreen;
