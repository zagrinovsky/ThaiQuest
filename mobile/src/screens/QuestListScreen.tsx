import React from "react";
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from "react-native";
import { PHUKET_QUESTS } from "../data/phuket_quests";
import type { Quest } from "../types/models";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  QuestList: undefined;
  QuestDetails: { quest: Quest };
};

type Props = NativeStackScreenProps<RootStackParamList, "QuestList">;

export const QuestListScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={PHUKET_QUESTS}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("QuestDetails", { quest: item })}>
            <Text style={styles.title}>{item.title}</Text>
            <Text numberOfLines={2} style={styles.desc}>{item.description}</Text>
            <Text style={styles.meta}>{item.difficulty} • {item.duration_min} min</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  card: { backgroundColor: "#fff", borderRadius: 10, padding: 12, borderWidth: StyleSheet.hairlineWidth, borderColor: "#ddd" },
  title: { fontWeight: "600", marginBottom: 4 },
  desc: { color: "#444" },
  meta: { marginTop: 6, color: "#666", fontSize: 12 },
});

export default QuestListScreen;


