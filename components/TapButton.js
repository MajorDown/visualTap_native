import { View, Text, Pressable } from "react-native";
import styles from "../styles/styles";

const TapButton = () => {
  const handlePress = () => {
    console.log("tap !");
  };

  return (
    <Pressable style={styles.tapButton} onPress={handlePress}>
      <Text style={styles.tapButtonText}>Tap !</Text>
    </Pressable>
  );
};

export default TapButton;
