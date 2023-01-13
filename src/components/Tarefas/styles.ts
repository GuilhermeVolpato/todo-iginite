import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    flexDirection: 'row', // alinhar em linha, se stiver em column, alinhado em coluna
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    color: "#FFF",
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
  },
  buttomText: {
    color: "#FFF",
    fontSize: 15,
  },
  buttom: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#E23C44",
    alignItems: "center",
    justifyContent: "center",
  },
});