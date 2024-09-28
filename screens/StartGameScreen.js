import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen({onPickNumber}) {
  const [enteredNumber, setEnteredNumber]= useState("");
  function numberInputHandler(enteredText){
    setEnteredNumber(enteredText);
  }
  function resetInputHandler(){
    setEnteredNumber("");
  }
  function confirmInputHandler(){
    if(!enteredNumber){
      Alert.alert("Number can't be empty!", "Try again after entering a number.",
        [{text:'Okay', style: 'destructive', onPress: resetInputHandler}]
      )
      return;
    }
    const ChosenNumber= parseInt(enteredNumber);
    if(isNaN(ChosenNumber) || ChosenNumber<=0 || ChosenNumber >99){
      Alert.alert("Invalid Number!", "Number has to be a number between 0 and 99",
        [{text:'Okay', style: 'destructive', onPress: resetInputHandler}]
      )
      return;
    }
    onPickNumber(ChosenNumber);
  }
  return (
    <View style={styles.inputContainer}>
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
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#4e0329",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
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