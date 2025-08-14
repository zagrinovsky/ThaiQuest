import React from "react";
import { StyleSheet, View, Text } from "react-native";
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { PHUKET_QUESTS } from "../data/phuket_quests";
import type { Quest } from "../types/models";

type RootStackParamList = {
  Map: undefined;
  QuestDetails: { quest: Quest };
};

export const MapScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const initialRegion = {
    latitude: 7.889,
    longitude: 98.392,
    latitudeDelta: 0.2,
    longitudeDelta: 0.2,
  };
  return (
    <View style={styles.container}>
      <MapView style={StyleSheet.absoluteFill} provider={PROVIDER_GOOGLE} initialRegion={initialRegion}>
        {PHUKET_QUESTS.map((q) => (
          <Marker key={q.id} coordinate={{ latitude: q.geo_center.lat, longitude: q.geo_center.lng }}
            title={q.title} description={q.description}
            onPress={() => navigation.navigate("QuestDetails", { quest: q })}
          >
            <Callout onPress={() => navigation.navigate("QuestDetails", { quest: q })}>
              <View style={{ maxWidth: 220 }}>
                <Text style={{ fontWeight: "600", marginBottom: 4 }}>{q.title}</Text>
                <Text numberOfLines={3} style={{ color: "#555" }}>{q.description}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({ container: { flex: 1 } });

export default MapScreen;


