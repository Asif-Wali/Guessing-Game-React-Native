import { Text, StyleSheet, Platform } from "react-native";
function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}
const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    // borderWidth: 2,
    // borderWidth: Platform.OS === "android" ? 2: 0,  ist way of writing platform specific code,
    borderWidth: Platform.select({ios:0 , android:2}),
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
    width: 300,
    
  },
});
export default Title;
