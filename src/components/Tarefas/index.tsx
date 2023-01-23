import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

type Props = {
  name: string;
  isConcluida: boolean;
  onRemove: () => void;
  onConcluir: () => void;
};

export function Tarefas({ name, onRemove, onConcluir, isConcluida }: Props) {
  const [concluido, setConcluido] = useState<Boolean>();
  
  function isConcluido() {
    if (concluido) {
      setConcluido(false);
    } else {
      setConcluido(true);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onConcluir}>
        <View style={isConcluida ? styles.circuloConcluida : styles.circulo}>
          {isConcluida ? (
            <View>
              <Image
                style={{ backgroundColor: "#5E60CE", height: 7.31, width: 12.03 }}
                source={require("../../images/Vector.png")}
              />
            </View>
          ) : null}
        </View>
      </TouchableOpacity>
      <Text style={isConcluida ? styles.nameConcluida : styles.name}>
        {name}
      </Text>
      <TouchableOpacity onPress={onRemove}>
        <Image
          source={require("../../images/trash.png")}
          style={{ marginRight: 10, height: 14, width: 12.48 }}
        />
      </TouchableOpacity>
    </View>
  );
}
