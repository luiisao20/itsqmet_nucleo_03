import { Booking } from "@/interfaces/models";
import {
  View,
  StyleSheet,
  Image,
  Pressable,
  useWindowDimensions,
} from "react-native";
import { MonoText } from "./StyledText";
import { SymbolView } from "expo-symbols";
import { router } from "expo-router";

interface Props {
  data: Booking;
  onDelete: (id: number) => void;
}

const BookingCard = ({ data, onDelete }: Props) => {
  const { width } = useWindowDimensions();

  return (
    <Pressable
      onPress={() =>
        router.push({
          pathname: "/city/[data]",
          params: { data: JSON.stringify(data) },
        })
      }
      style={({ pressed }) => [styles.card, { opacity: pressed ? 0.7 : 1 }]}
    >
      <Image source={{ uri: data.image }} style={styles.image} />
      <View style={{ width: width * 0.6 }}>
        <MonoText style={{ fontSize: 20, fontWeight: 900 }}>
          {data.city}
        </MonoText>
        <View style={styles.inner}>
          <SymbolView
            name={{ android: "calendar_today" }}
            tintColor="#fff"
            size={16}
          />
          <MonoText style={styles.text}>{data.date}</MonoText>
        </View>
        <View style={styles.inner}>
          <Pressable onPress={() => onDelete(data.id)} style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}>
            <SymbolView
              name={{ android: "delete" }}
              tintColor="red"
              size={32}
            />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

export default BookingCard;

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
