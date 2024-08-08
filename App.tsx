import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { Empty } from "./src/components/Empty";
import { TaskItem } from "./src/components/TaskItem";

SplashScreen.preventAutoHideAsync();

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export default function App() {
  const [loaded, error] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  const [tasks, setTasks] = useState<Task[]>([]);

  const [newTask, setNewTask] = useState<string>("");

  const [taskCount, setTaskCount] = useState<number>(0);
  const [completedTaskCount, setCompletedTaskCount] = useState<number>(0);

  const handleCreateTask = () => {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        title: newTask,
        done: false,
      },
    ]);
  };

  const handleCompleteTask = (id: number) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            done: !task.done,
          };
        }

        return task;
      })
    );
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  useEffect(() => {
    setTaskCount(tasks.length);
    setCompletedTaskCount(tasks.filter((task) => task.done).length);
  }, [tasks]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          style={styles.inputText}
          onChangeText={setNewTask}
        />
        <TouchableOpacity onPress={handleCreateTask} style={styles.button}>
          <Feather name="plus-circle" size={24} color="#d0d0d0" />
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <View style={styles.todoHeader}>
          <View style={styles.headerLabel}>
            <Text style={styles.textTodoHeader}>Criadas</Text>
            <Text style={styles.textChip}>{taskCount}</Text>
          </View>
          <View style={styles.headerLabel}>
            <Text style={styles.textTodoHeader}>Concluídas</Text>
            <Text style={styles.textChip}>{completedTaskCount}</Text>
          </View>
        </View>
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <TaskItem
              task={item}
              handleCompleteTask={handleCompleteTask}
              handleDeleteTask={handleDeleteTask}
            />
          )}
          keyExtractor={(task) => String(task.id)}
          ListEmptyComponent={<Empty />}
          contentContainerStyle={styles.todoContent}
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    alignItems: "center",
    fontFamily: "Inter_400Regular",
  },
  header: {
    backgroundColor: "#0D0D0D",
    width: "100%",
    height: 173,
    paddingTop: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    width: "100%",
    transform: [{ translateY: -32 }],
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    gap: 4,
  },
  inputText: {
    backgroundColor: "#262626",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#0D0D0D",
    height: 54,
    flex: 1,
    color: "#f2f2f2",
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  button: {
    width: 52,
    height: 52,
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    width: "100%",
    paddingHorizontal: 24,
    marginBottom: 24,
    flex: 1,
  },
  todoHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  headerLabel: {
    flexDirection: "row",
    gap: 8,
  },
  textTodoHeader: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "Inter_700Bold",
    color: "#4EA8DE",
  },
  textChip: {
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "Inter_700Bold",
    backgroundColor: "#333333",
    color: "#D9D9D9",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
  },
  todoContent: {
    width: "100%",
    gap: 8,
  },
});
