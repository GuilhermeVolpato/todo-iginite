import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import {useState} from "react";


type Props = {
  name: string;
  onRemove: () => void;
  onPress: () => void;
};

export function Tarefas({ name, onRemove, onPress }: Props) {
  const[concluido, setConcluido] = useState()

  return (
    <View style={styles.container}>
      <TouchableOpacity >
        <View style={styles.circulo}></View>
      </TouchableOpacity>
      <Text style={styles.name}>{name}</Text>
      <Image
      source={require("../../images/trash.png")}
      style={{marginRight: 10, height: 35, width:35}}
      />
    </View>
  )
}