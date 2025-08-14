import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { Quest, Task } from "../types/models";
import * as Location from "expo-location";
import { CameraView, useCameraPermissions } from "expo-camera";

type RootStackParamList = {
  Map: undefined;
  QuestDetails: { quest: Quest };
  TaskRunner: { quest: Quest };
};

type Props = NativeStackScreenProps<RootStackParamList, "TaskRunner">;

const TaskRunnerScreen: React.FC<Props> = ({ route, navigation }) => {
  const { quest } = route.params;
  const [stepIndex, setStepIndex] = useState<number>(0);
  const task: Task | undefined = quest.tasks[stepIndex];
  const [camPerm, requestCam] = useCameraPermissions();

  const ensurePerms = async () => {
    if (!camPerm?.granted) await requestCam();
    await Location.requestForegroundPermissionsAsync();
  };

  const submit = async () => {
    try {
      await Location.getCurrentPositionAsync({});
    } catch {}
    setTimeout(() => {
      if (stepIndex + 1 < quest.tasks.length) setStepIndex(stepIndex + 1);
      else {
        Alert.alert("Success", "Quest completed!", [{ text: "OK", onPress: () => navigation.navigate("Map") }]);
      }
    }, 800);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{quest.title}</Text>
      <Text style={styles.meta}>Step {stepIndex + 1} / {quest.tasks.length}</Text>
      <Text style={styles.instruction}>{task?.instruction}</Text>
      <View style={styles.cameraBox}>
        {camPerm?.granted ? (
          <CameraView style={{ flex: 1 }} facing="back" />
        ) : (
          <View style={styles.center}>
            <Text style={{ marginBottom: 8 }}>Camera permission required</Text>
            <Button title="Grant permissions" onPress={ensurePerms} />
          </View>
        )}
      </View>
      <Button title="Submit" onPress={submit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 12 },
  title: { fontSize: 18, fontWeight: "600" },
  meta: { color: "#666" },
  instruction: { marginBottom: 8 },
  cameraBox: { height: 280, borderRadius: 8, overflow: "hidden", backgroundColor: "#000" },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
});

export default TaskRunnerScreen;


