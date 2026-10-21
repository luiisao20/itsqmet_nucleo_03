import { City } from "@/interfaces/models";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  useWindowDimensions,
} from "react-native";
import { MonoText } from "./StyledText";
import { SymbolView } from "expo-symbols";
import { router } from "expo-router";

interface Props {
  data: City;
}

const Card = ({ data }: Props) => {
  const { width } = useWindowDimensions();
  return (
    <Pressable
      onPress={() =>
        router.push({ pathname: "/city/[data]", params: { data: JSON.stringify(data) } })
      }
      style={({ pressed }) => [styles.card, { opacity: pressed ? 0.7 : 1 }]}
    >
      <Image source={{ uri: data.image }} style={styles.image} />
      <View style={{ width: width * 0.6 }}>
        <MonoText style={{ fontSize: 20, fontWeight: 900 }}>
          {data.name}
        </MonoText>
        <MonoText style={{ fontSize: 12 }} numberOfLines={2}>
          {data.description}
        </MonoText>
        <View style={styles.inner}>
          <SymbolView
            name={{ android: "thermometer" }}
            tintColor="#fff"
            size={16}
          />
          <MonoText style={styles.text}>{data.weather?.temperature}°C</MonoText>
        </View>
        <View style={styles.inner}>
          <SymbolView
            name={{ android: "wind_power" }}
            tintColor="#fff"
            size={16}
          />
          <MonoText style={styles.text}>
            {data.weather?.speedWind} km/h
          </MonoText>
        </View>
      </View>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    backgroundColor: "#473c3c",
    borderRadius: 10,
    margin: 10,
    padding: 6,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 20,
  },
  text: {
    fontSize: 12,
  },
  inner: {
    flexDirection: "row",
    gap: 4,
  },
});
