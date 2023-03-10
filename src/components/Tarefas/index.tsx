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

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onConcluir}>
        <View style={isConcluida ? styles.circuloConcluida : styles.circulo}>
          {isConcluida ? (
            <View>
              <Image
                style={styles.imageVector}
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
          style={styles.imageTrash}
        />
      </TouchableOpacity>
    </View>
  );
}
