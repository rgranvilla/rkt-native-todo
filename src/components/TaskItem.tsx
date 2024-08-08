import { StyleSheet, Text, View } from "react-native";
import { Checkbox } from "./Checkbox";
import { DeleteButton } from "./DeleteButton";

interface Task {
  id: number;
  title: string;
  done: boolean;
}

interface TaskItemProps {
  task: Task;
  handleCompleteTask: (id: number) => void;
  handleDeleteTask: (id: number) => void;
}

export const TaskItem = ({
  task,
  handleCompleteTask,
  handleDeleteTask,
}: TaskItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.checkbox}>
        <Checkbox
          checked={task.done}
          onChange={() => handleCompleteTask(task.id)}
        />
      </View>
      <View style={styles.taskContent}>
        <Text style={styles.taskText}>{task.title}</Text>
      </View>
      <DeleteButton onPress={() => handleDeleteTask(task.id)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#262626",
    borderRadius: 8,
    minHeight: 64,
  },
  checkbox: {
    width: 24,
    height: 24,
  },
  taskContent: {
    flex: 1,
  },
  taskText: {
    textAlign: "left",
    color: "#f2f2f2",
    fontSize: 14,
    lineHeight: 20,
  },
});
