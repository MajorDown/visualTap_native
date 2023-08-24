import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { useFonts } from "expo-font";
import styles from "./styles/styles";
import Title from "./components/Title";
import TempoMaker from "./components/TempoMaker";
import { useState } from "react";
import TempoViewer from "./components/TempoViewer";

export default function App() {
  const [tempo, setTempo] = useState(120);

  const handleTempoChange = (newTempo) => {
    setTempo(newTempo);
  };

  const [loadedFont, FontError] = useFonts({
    "Orbitron-Bold": require("./assets/fonts/Orbitron-Bold.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
  });
  if (FontError) return <Text>loading...</Text>;
  if (loadedFont)
    return (
      <View style={styles.app}>
        <StatusBar style="light" />
        <Title style={styles.title}>VisualTap</Title>
        <TempoMaker onTempoChange={handleTempoChange} />
        <TempoViewer appTempo={tempo} />
      </View>
    );
}
