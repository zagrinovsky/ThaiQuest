import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapScreen from "../screens/MapScreen";
import QuestDetailsScreen from "../screens/QuestDetailsScreen";
import type { Quest } from "../types/models";

export type RootStackParamList = {
  Map: undefined;
  QuestDetails: { quest: Quest };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Map" component={MapScreen} options={{ title: "ThaiQuest – Phuket" }} />
        <Stack.Screen name="QuestDetails" component={QuestDetailsScreen} options={{ title: "Quest" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;


