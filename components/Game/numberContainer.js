import { View, Text, StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/Colors";
function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}
const deviceWidth= Dimensions.get("window").deviceWidth
const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.secondary500,
    padding: deviceWidth > 380 ? 12:24,
    margin: deviceWidth > 380 ? 12:24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: colors.secondary500,
    fontSize: deviceWidth > 380 ? 28:36,
    fontFamily: "open-sans-bold",
    // fontWeight: "bold",
  },
});
export default NumberContainer;
