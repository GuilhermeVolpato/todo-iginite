import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Tarefas } from "../components/Tarefas";
import { styles } from "./styles";
import { useState } from "react";
import { Item } from "react-native-paper/lib/typescript/components/Drawer/Drawer";

interface Tarefa {
  id: number;
  decricao: string;
  isConcluida?: boolean;
}

export default function Home() {
  const [tarefa, setTarefa] = useState<Tarefa[]>([]);
  const [conteudoTarefa, setConteudoTarefa] = useState("");
  const [qtd, setQtd] = useState(0);

  const [concluido, setConcluido] = useState<Boolean>();

  function handleAddTarefa() {
    setTarefa((products) => products.filter((_, index) => index !== 0));
    setTarefa([
      ...tarefa,
      {
        id: new Date().getUTCMilliseconds(),
        decricao: conteudoTarefa,
        isConcluida: false,
      },
    ]);
    setConteudoTarefa("");
  }
  console.log(tarefa);

  function handleParticipantRemove(id: number) {
    Alert.alert(
      "Remover tarefa ",
      ` Deseja remover a seguinte tarefa:  ${id}?`,
      [
        {
          text: "Sim",
          onPress: () => setTarefa(tarefa.filter((tarefa) => tarefa.id !== id)),
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]
    );
  }

  function handleConclusao(id: any, conc: boolean) {
    setTarefa(
      tarefa.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, isConcluida: !tarefa.isConcluida }
          : { ...tarefa }
      )
    );
    
  }
var count
    function handleQtdConclusao() {
      for(var i = 0; i < tarefa.length; ++i){
        if(tarefa.filter(Boolean))
            count++;
      }
    }

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.banner}>
            <Image source={require("../images/rocket.png")} />
            <View style={styles.tituloBanner}>
              <Image source={require("../images/to.png")} />
              <Image source={require("../images/do.png")} />
            </View>
          </View>
        </View>
        <View style={styles.info}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.criadas}>Criadas</Text>
            <View style={styles.circulo}>
              <Text style={{ color: "white" }}>{tarefa.length}</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.concluidas}>Concluidas</Text>
            <View style={styles.circulo}>
              <Text style={{ color: "white" }}>1</Text>
            </View>
          </View>
        </View>
        <View style={styles.listaView}>
          <FlatList
            contentContainerStyle={styles.informacaoTarefa}
            data={tarefa}
            keyExtractor={(item) => item.decricao}
            renderItem={({ item }) => (
              <Tarefas
                key={item.id}
                name={item.decricao}
                onRemove={() => handleParticipantRemove(item.id)}
              />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <View style={{ width: "100%", alignItems: "center" }}>
                <View style={{ width: "100%", paddingBottom: 48 }}>
                  <View style={styles.separador}>
                    <View style={styles.linha}></View>
                  </View>
                </View>
                <Image source={require("../images/Clipboard.png")} />
                <Text style={styles.vazioListaTitulo}>
                  {" "}
                  Você ainda não tem tarefas cadastradas
                </Text>
                <Text style={styles.vazioListaSubTexto}>
                  {" "}
                  Crie tarefas e organize seus itens
                </Text>
              </View>
            )}
          />
        </View>
        <View style={styles.inputTarefa}>
          <TextInput
            style={styles.textInput}
            placeholder="Adicionar uma nova tarefa"
            placeholderTextColor="#6b6b6b"
            onChangeText={setConteudoTarefa}
            value={conteudoTarefa}
          />
          <TouchableOpacity
            style={styles.buttom}
            activeOpacity={0.7}
            onPress={handleAddTarefa}
          >
            <Ionicons name="add-circle-outline" size={24} color="#F2F2F2" />
          </TouchableOpacity>
        </View>
        <StatusBar style="light" />
      </View>
    );
  }

