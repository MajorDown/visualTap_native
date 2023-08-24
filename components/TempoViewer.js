import { View, Text, Pressable } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import styles from "../styles/styles";
import chart from "../styles/chart";
import { useState } from "react";

const TempoViewer = ({ appTempo }) => {
  const [metronomColor, setMetronomColor] = useState(chart.colorBack);
  const [chosenColor, setChosenColor] = useState("red");
  const [isTapping, setIsTapping] = useState(false);

  const startMetronome = () => {
    const time = 60000 / parseInt(appTempo);
    return setInterval(() => {
      setMetronomColor(chosenColor);
      setTimeout(() => {
        setMetronomColor(chart.colorBack);
      }, 100);
    }, time);
  };

  const handlePress = () => {
    if (isTapping) {
      clearInterval(interval);
      setMetronomColor(chart.colorBack);
      setIsTapping(false);
    } else {
      setIsTapping(true);
      interval = startMetronome();
    }
  };

  return (
    <View style={styles.tempoViewer}>
      <View style={styles.tempoMaker}>
        <Text style={styles.appText}>couleur du métronome : </Text>
        <View style={styles.tempoMakerInputBorder}>
          <SelectDropdown
            data={["blue", "yellow", "green", "red"]}
            onSelect={(selected) => setChosenColor(selected)}
            defaultValue={chosenColor}
            buttonStyle={styles.tempoViewerSelect}
            buttonTextStyle={styles.tempoViewerSelectText}
            dropdownStyle={styles.tempoViewerSelectOption}
            rowTextStyle={styles.tempoViewerText}
          />
        </View>
      </View>
      <Pressable style={styles.tempoViewerButton} onPress={handlePress}>
        <Text style={styles.tempoViewerText}>
          {isTapping ? "Stop" : "Démarrer"}
        </Text>
      </Pressable>
      <View
        style={[{ backgroundColor: `${metronomColor}` }, styles.visualTempo]}
      ></View>
    </View>
  );
};

export default TempoViewer;
