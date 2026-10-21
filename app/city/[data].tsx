import {
  Image,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { MonoText } from "@/components/StyledText";
import { City } from "@/interfaces/models";
import { Stack } from "expo-router";
import { SymbolView } from "expo-symbols";
import ButtonComponent from "@/components/ButtonComponent";

const CityScreen = () => {
  const { data } = useLocalSearchParams<{ data: string }>();
  const { height } = useWindowDimensions();

  const city: City = JSON.parse(data);
  return (
    <ScrollView style={{ flex: 1 }}>
      <Stack.Screen options={{ title: city.name }} />
      <View style={styles.container}>
        <Image
          source={{ uri: city.image }}
          style={{ ...styles.image, height: height * 0.25 }}
        />
        <MonoText style={{ fontSize: 16 }}>{city.description}</MonoText>
        <MonoText
          style={{ fontSize: 20, fontWeight: "400", textAlign: "center" }}
        >
          Datos del clima
        </MonoText>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={styles.inner}>
            <SymbolView
              name={{ android: "thermometer" }}
              tintColor="#fff"
              size={32}
            />
            <MonoText style={styles.text}>
              {city.weather?.temperature}°C
            </MonoText>
          </View>
          <View style={styles.inner}>
            <SymbolView
              name={{ android: "wind_power" }}
              tintColor="#fff"
              size={32}
            />
            <MonoText style={styles.text}>
              {city.weather?.speedWind} km/h
            </MonoText>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={styles.inner}>
            <SymbolView
              name={{ android: "map" }}
              tintColor="#fff"
              size={32}
            />
            <MonoText style={styles.text}>
              {((city.weather?.pressure ?? 0) / 1000).toFixed(2)} kPa
            </MonoText>
          </View>
          <View style={styles.inner}>
            <SymbolView
              name={{ android: "humidity_indoor" }}
              tintColor="#fff"
              size={32}
            />
            <MonoText style={styles.text}>{city.weather?.humidity} %</MonoText>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={styles.inner}>
            <SymbolView
              name={{ android: "nest_farsight_weather" }}
              tintColor="#fff"
              size={32}
            />
            <MonoText style={styles.text}>{city.weather?.description}</MonoText>
          </View>
        </View>
        <ButtonComponent text="Booking" action={() => {}} />
      </View>
    </ScrollView>
  );
};

export default CityScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    borderRadius: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 10,
    gap: 10,
    flexDirection: "column",
  },
  inner: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  text: { fontSize: 20 },
});
