import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
  name: string;
  onRemove: () => void;
};

export function Tarefas({ name, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity
        style={styles.buttom}
        activeOpacity={0.7}
        onPress={onRemove}
      >
        <Text style={styles.buttomText}>
          -
        </Text>
      </TouchableOpacity>
    </View>
  )
}