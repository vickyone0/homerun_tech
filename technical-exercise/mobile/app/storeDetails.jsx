import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import MapView, { Marker } from "react-native-maps";

export default function StoreDetails() {
  const router = useRouter();
  const { name, id, address, latitude, longitude } = useLocalSearchParams();

  const lat = parseFloat(latitude);
  const lon = parseFloat(longitude);

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      

      <View style={styles.card}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.address}>{address}</Text>

        <MapView
          style={styles.map}
          initialRegion={{
            latitude: lat,
            longitude: lon,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            coordinate={{ latitude: lat, longitude: lon }}
            title={name}
            description={address}
          />
        </MapView> 
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    padding: 20,
    backgroundColor: "#F2F2F2",
    flexGrow: 1,
  },
  backBtn: {
    marginBottom: 10,
  },
  backText: {
    color: "#007AFF",
    fontSize: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
    marginBottom: 8,
  },
  address: {
    fontSize: 16,
    color: "#666",
    marginBottom: 12,
  },
  map: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 20,
  },
});
