import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Alert,
  Text,
  FlatList,
  useWindowDimensions,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import Title from "../components/UI/Title";
import NumberContainer from "../components/Game/numberContainer";
import PrimaryButton from "../components/UI/PrimaryButton";
import Card from "../components/UI/Card";
import InstructionText from "../components/UI/InstructionText";
import GuessLog from "../components/Game/gameLogItem";
let minBoundary = 1;
let maxBoundary = 100;
function GenerateRandonNumber(min, max, exclude) {
  const Random = Math.floor(Math.random() * (max - min)) + min;
  if (Random === exclude) {
    return GenerateRandonNumber(min, max, exclude);
  } else {
    return Random;
  }
}

function GameScreen({ userNumber, gameOverHandler }) {
  const initialguess = GenerateRandonNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialguess);
  const [guessRounds, setGuessRounds] = useState([initialguess]);
  const { width, height } = useWindowDimensions();

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don,t Lie", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const NewGuess = GenerateRandonNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(NewGuess);
    setGuessRounds((currentGuess) => [NewGuess, ...currentGuess]);
  }
  useEffect(() => {
    if (currentGuess === userNumber) {
      gameOverHandler(guessRounds.length);
    }
  }, [currentGuess, userNumber, gameOverHandler]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);
  const guessRoundsListLength = guessRounds.length;

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onClick={nextGuessHandler.bind(this, "lower")}>
              <Entypo name="minus" size={24} color={"white"} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onClick={nextGuessHandler.bind(this, "greater")}>
              <Entypo name="plus" size={24} color={"white"} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={styles.buttonWrapperLandscape}>
         
            <View style={styles.buttonContainer}>
              <PrimaryButton onClick={nextGuessHandler.bind(this, "lower")}>
                <Entypo name="minus" size={24} color={"white"} />
              </PrimaryButton>
            </View>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View style={styles.buttonContainer}>
              <PrimaryButton onClick={nextGuessHandler.bind(this, "greater")}>
                <Entypo name="plus" size={24} color={"white"} />
              </PrimaryButton>
            </View>
          </View>
      </>
    );
  }
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          keyExtractor={(item) => item}
          renderItem={(itemData) => (
            <GuessLog
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 26,
    marginTop: 20,
    alignItems: "center",
  },
  instructionText: {
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
  buttonWrapperLandscape: {
    flexDirection: "row",
    alignItems: "center",
  },
});
export default GameScreen;
