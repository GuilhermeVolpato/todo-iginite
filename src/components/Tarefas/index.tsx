import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

type Props = {
  name: string;
  onRemove: () => void;
};

export function Tarefas({ name, onRemove }: Props) {
  const [concluido, setConcluido] = useState<Boolean>();
  const [qtdConcluido, setQtdConcluido] = useState(0);

  function isConcluido() {
    if (concluido) {
      setConcluido(false);
    } else {
      setConcluido(true);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={isConcluido}>
        <View style={concluido ? styles.circuloConcluida : styles.circulo}>
          {concluido ? (
            <Image
              style={{ backgroundColor: "#4EA8DE", height: 10 }}
              source={require("../../images/Vector.png")}
            />
          ) : null}
        </View>
      </TouchableOpacity>
      <Text style={!concluido ? styles.name : styles.nameConcluida}>
        {name}
      </Text>
      <TouchableOpacity onPress={onRemove}>
        <Image
          source={require("../../images/trash.png")}
          style={{ marginRight: 10, height: 35, width: 35 }}
        />
      </TouchableOpacity>
    </View>
  );
}
