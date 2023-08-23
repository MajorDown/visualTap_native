import { StyleSheet } from "react-native";
import chart from "./chart";

const styles = StyleSheet.create({
  app: {
    width: "100%",
    height: "100%",
    backgroundColor: chart.colorBack,
    paddingTop: 30,
    alignItems: "center",
  },
  appText: {
    color: chart.colorFont,
    fontFamily: chart.fontApp,
  },
  title: {
    textAlign: "center",
    color: chart.colorTitle,
    fontFamily: chart.fontTitle,
  },
  tapButton: {
    width: "30%",
    backgroundColor: chart.colorFont,
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  tapButtonText: {
    color: chart.colorBack,
    fontFamily: chart.fontApp,
  },
  tempoMaker: {
    backgroundColor: chart.colorFont,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    padding: 5,
    margin: 5,
  },
});

export default styles;
