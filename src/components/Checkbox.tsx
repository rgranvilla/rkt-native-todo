import { StyleSheet, TouchableOpacity, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
}

export const Checkbox = ({ checked, onChange }: CheckboxProps) => {
  return (
    <TouchableOpacity style={styles.touchableArea} onPress={onChange}>
      <View style={styles.container}>
        <View style={checked ? styles.checked : styles.unchecked}>
          {checked && <Feather name="check" size={16} color="#fff" />}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableArea: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: 24,
    height: 24,
  },
  unchecked: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#4ea8de",
  },
  checked: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#4ea8de",
    backgroundColor: "#4ea8de",
    alignItems: "center",
    justifyContent: "center",
  },
});
