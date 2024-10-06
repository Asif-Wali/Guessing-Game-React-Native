import { Text, View, Image, StyleSheet } from "react-native";
import Title from "../components/UI/Title";
import colors from "../constants/Colors";
import PrimaryButton from "../components/UI/PrimaryButton";
function GameOverScreen({roundsNumber, userNumber, startNewGame}) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyle}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summary}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to
        guess <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onClick={startNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  imageStyle: {
    height: "100%",
    width: "100%",
  },
  summary: {
    fontFamily: "open-sans",
    fontSize: 24,
    marginVertical: 24,
    textAlign: "center",
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: colors.primary500,
  },
});
export default GameOverScreen;
