import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Title from "../components/Title";

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>GameScreen</Title>
    </View>
  );
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding: 40
    }

})
export default GameScreen;
