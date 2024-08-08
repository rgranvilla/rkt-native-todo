import { Image, StyleSheet, Text, View } from "react-native";

export const Empty = () => {
  return (
    <View style={styles.todoEmpty}>
      <Image source={require("@/assets/clipboard.png")} />
      <View>
        <Text style={styles.todoEmptyTextBold}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.todoEmptyText}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todoEmpty: {
    borderTopWidth: 1,
    borderColor: "#333333",
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  todoEmptyTextBold: {
    color: "#808080",
    fontSize: 14,
    fontFamily: "Inter_700Bold",
    lineHeight: 20,
  },
  todoEmptyText: {
    color: "#808080",
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    lineHeight: 20,
  },
});
