import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { List } from "react-native-paper";
import { Tarefas } from "../components/Tarefas";

export default function Home() {
  const participants = [
 
  ];

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover participante ',` Deseja remover o participante ${name}?`, [
        {
            text: 'Sim',
            onPress: () => Alert.alert("Deletado!")
        },
        {
            text: 'Não',
            style: 'cancel'
        }
    ]);
    console.log(` removeu ${name}`);
  }

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.banner}>
          <Image source={require("../images/rocket.png")} />
          <View style={styles.tituloBanner}>
            <Image source={require("../images/to.png")} />
            <Image source={require("../images/do.png")} />
          </View>
        </View>
      </View>
      <View style={styles.listaView}>
          <FlatList
          contentContainerStyle={styles.informacaoTarefa}
          data={participants}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Tarefas
              key={item}
              name={item}
              onRemove={() => handleParticipantRemove(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
           <>
            <Image source={require("../images/Clipboard.png")} />
            <Text style={styles.vazioListaTitulo}> Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.vazioListaSubTexto}> Crie tarefas e organize seus itens</Text>
          </>
        
          )}
        />
      </View>
      <View style={styles.inputTarefa}>
        <TextInput
          style={styles.textInput}
          placeholder="Adicionar uma nova tarefa"
          placeholderTextColor="#6b6b6b"
        />
        <TouchableOpacity style={styles.buttom} activeOpacity={0.7}>
          <Ionicons name="add-circle-outline" size={24} color="#F2F2F2" />
        </TouchableOpacity>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0D0D0D",
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
    paddingLeft: 50,
    alignItems: "center",
    justifyContent: 'center',
    marginTop: 125,
    flex:1,
    position: 'absolute',
  },
  textInput: {
    height: 56,
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    color: "#FDFCFE",
    padding: 10,
    fontSize: 16,
    flex: 1,
    marginRight: 4,
  },
  buttom: {
    width: 52,
    height: 52,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },
  buttomText: {
    color: "#FFF",
    fontSize: 15,
  },
  listaView: {
    backgroundColor: "#1A1A1A",
    
    flex:1
  },
  informacaoTarefa: {
    paddingTop: 50,
    paddingHorizontal: 10,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column'
    
  },
  textInfo:{
    color: '#4EA8DE',
  },
  emptyList: {
    color: "#fff",
    fontSize: 16,
    textAlign: 'center'
  },
  vazioListaTitulo:{
    fontSize: 14,
    fontWeight: 'bold',
    color: '#808080',
    paddingTop: 16,
  },
  vazioListaSubTexto:{
    fontSize: 14,
    color: '#808080'
  }
});
