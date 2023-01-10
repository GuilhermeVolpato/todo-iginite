import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput,TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image source={require('../images/rocket.png')} />
        <View style={styles.tituloBanner}>
          <Image source={require('../images/to.png')} />
          <Image source={require('../images/do.png')} />
        </View>
      </View>
      <View style={styles.inputTarefa}>
        <TextInput
          style={styles.textInput}
          placeholder="Adicionar uma nova tarefa"
          placeholderTextColor="#6b6b6b"
        />
        <TouchableOpacity
            style={styles.buttom}
            activeOpacity={0.7}
          >
            <Ionicons name="add-circle-outline" size={24} color="#F2F2F2"/>
          </TouchableOpacity>
      </View>
      <View style={styles.areaTarefa}>
        <Text style={styles.criada}>Criadas</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0D0D0D',
    alignItems: "center",
  },
  banner: {
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
    width: "90%",
    flexDirection: "row",
    alignItems: 'center',
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
  areaTarefa: {
    flex: 1,
    backgroundColor: '#454545'
  },
  buttom: {
    width: 52,
    height: 52,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },
  buttomText:{
    color: "#FFF",
    fontSize: 15,
  },
  criada:{
    color: "#fff",
    fontSize: 15,
  }
});
