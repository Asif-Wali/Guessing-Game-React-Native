import { View, Text, StyleSheet } from "react-native";
import colors from "../../constants/Colors";
function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.secondary500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: colors.secondary500,
    fontSize: 36,
    fontFamily: "open-sans-bold",
    // fontWeight: "bold",
  },
});
export default NumberContainer;
