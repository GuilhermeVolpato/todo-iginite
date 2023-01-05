import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";


export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image source={require('../images/rocket/rocket.svg')} />
        <View style={styles.tituloBanner}>
          <Image source={require('../images/to/to.svg')} />
          <Image source={require('../images/do/do.svg')} />
        </View>
      </View>
      <View style={styles.inputTarefa}>
        <TextInput
          style={styles.textInput}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "D0D0D0D",
    alignItems: "center",
  },
  banner: {
    flex:1,
    flexDirection: "row",
    padding: 60,
    justifyContent: "space-around",
  },
  tituloBanner: {
    flexDirection: "row",
    paddingLeft: 10,
    alignItems: "baseline",
  },
  inputTarefa: {
    width: "100%",
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 30,
  },
  textInput: {
    height: 56,
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    color: "#FDFCFE",
    padding: 10,
    fontSize: 16,
    flex: 1,
    marginRight: 10,
  },
});
