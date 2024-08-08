import { StyleSheet, TouchableOpacity } from "react-native";
import Feather from "react-native-vector-icons/Feather";

interface DeleteButtonProps {
  onPress: () => void;
}

export const DeleteButton = ({ onPress }: DeleteButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Feather name="trash-2" size={16} color="#808080" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 32,
    height: 32,
    backgroundColor: "transparent",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
});
