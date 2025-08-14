import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MapScreen from "../screens/MapScreen";
import QuestDetailsScreen from "../screens/QuestDetailsScreen";
import QuestListScreen from "../screens/QuestListScreen";
import ProfileScreen from "../screens/ProfileScreen";
import type { Quest } from "../types/models";

export type RootStackParamList = {
  Map: undefined;
  QuestDetails: { quest: Quest };
};

const ExploreStackNav = createNativeStackNavigator<RootStackParamList>();
const ListStackNav = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const ExploreStack = () => (
  <ExploreStackNav.Navigator>
    <ExploreStackNav.Screen name="Map" component={MapScreen} options={{ title: "ThaiQuest – Phuket" }} />
    <ExploreStackNav.Screen name="QuestDetails" component={QuestDetailsScreen} options={{ title: "Quest" }} />
  </ExploreStackNav.Navigator>
);

const ListStack = () => (
  <ListStackNav.Navigator>
    <ListStackNav.Screen name="QuestList" component={QuestListScreen} options={{ title: "Quests" }} />
    <ListStackNav.Screen name="QuestDetails" component={QuestDetailsScreen} options={{ title: "Quest" }} />
  </ListStackNav.Navigator>
);

export const AppNavigator: React.FC = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Explore" component={ExploreStack} options={{ headerShown: false }} />
      <Tab.Screen name="List" component={ListStack} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigator;


