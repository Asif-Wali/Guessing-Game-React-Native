import { useState, useEffect } from "react";
import { ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { LinearGradient } from "expo-linear-gradient";
import colors from "./constants/Colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds]=useState(0);
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
 
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
 
  if (!fontsLoaded) {
    return null;
  }
  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }
  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds)
  }
  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} gameOverHandler={gameOverHandler} />
    );
  }
  if (gameIsOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} startNewGame={startNewGameHandler}/>;
  }

  return (
    <LinearGradient
      colors={[colors.primary700, colors.secondary500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/riho-kroll-RgLaH00kZOk-unsplash.jpg")}
        style={styles.rootScreen}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
