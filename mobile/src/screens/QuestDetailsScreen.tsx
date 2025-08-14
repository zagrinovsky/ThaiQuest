import React from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { Quest } from "../types/models";

type RootStackParamList = {
  Map: undefined;
  QuestDetails: { quest: Quest };
  TaskRunner: { quest: Quest };
};

type Props = NativeStackScreenProps<RootStackParamList, "QuestDetails">;

export const QuestDetailsScreen: React.FC<Props> = ({ route, navigation }) => {
  const { quest } = route.params;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{quest.title}</Text>
      <Text style={styles.description}>{quest.description}</Text>
      <Text style={styles.meta}>Difficulty: {quest.difficulty}</Text>
      <Text style={styles.meta}>Duration: {quest.duration_min} min</Text>
      <Text style={styles.meta}>Rewards: {quest.reward_policy.type} +{quest.reward_policy.value}</Text>
      <Text style={styles.section}>Tasks</Text>
      {quest.tasks.map((t) => (
        <View key={t.id} style={styles.task}>
          <Text style={styles.taskTitle}>Step {t.seq}</Text>
          <Text>{t.instruction}</Text>
          <Text style={styles.hint}>Verify: {t.verification_type}</Text>
        </View>
      ))}
      <Button title="Start" onPress={() => navigation.navigate("TaskRunner", { quest })} />
      <Button title="Back to Map" onPress={() => navigation.navigate("Map")} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16, gap: 8 },
  title: { fontSize: 20, fontWeight: "600" },
  description: { color: "#333" },
  meta: { color: "#555" },
  section: { marginTop: 12, fontSize: 16, fontWeight: "600" },
  task: { paddingVertical: 8, borderBottomWidth: StyleSheet.hairlineWidth, borderColor: "#ddd" },
  taskTitle: { fontWeight: "600" },
  hint: { color: "#666", fontSize: 12 },
});

export default QuestDetailsScreen;


