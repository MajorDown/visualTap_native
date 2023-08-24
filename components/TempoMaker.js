import { useState } from "react";
import { TextInput, Text, View } from "react-native";
import styles from "../styles/styles";

const TempoMaker = ({ onTempoChange }) => {
  const [tempo, setTempo] = useState("120");

  const handleTempoChange = (newTempo) => {
    setTempo(newTempo);
    onTempoChange(newTempo); // Émet un événement vers le composant parent
  };

  return (
    <View style={styles.tempoMaker}>
      <Text style={styles.tempoMakerText}>Tempo (en bpm) : </Text>
      <View style={styles.tempoMakerInputBorder}>
        <TextInput
          style={styles.tempoMakerInput}
          value={tempo}
          onChangeText={(e) => handleTempoChange(e)}
          keyboardType="numeric"
        />
      </View>
    </View>
  );
};

export default TempoMaker;
