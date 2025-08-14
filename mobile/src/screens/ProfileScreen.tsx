import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const ProfileScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text>XP: 0</Text>
      <Text>Coins: 0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 8 },
  title: { fontSize: 18, fontWeight: "600" },
});

export default ProfileScreen;


