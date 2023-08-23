import { useState, useEffect } from "react";
import { TextInput, Text, View } from "react-native";
import styles from "../styles/styles";

const TempoMaker = () => {
  const [tempo, setTempo] = useState("120");
  return (
    <View style={styles.tempoMaker}>
      <Text>Tempo (en bpm) : </Text>
      <TextInput value={tempo} onChangeText={setTempo} keyboardType="numeric" />
    </View>
  );
};

export default TempoMaker;
