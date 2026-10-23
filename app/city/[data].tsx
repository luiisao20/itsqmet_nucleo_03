import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { MonoText } from "@/components/StyledText";
import { City } from "@/interfaces/models";
import { router, Stack } from "expo-router";
import { SymbolView } from "expo-symbols";
import ButtonComponent from "@/components/ButtonComponent";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { saveBookingAction } from "@/actions/save-booking.action";
import { useAuthStore } from "@/lib/authStore";

const CityScreen = () => {
  const { data } = useLocalSearchParams<{ data: string }>();
  const { height } = useWindowDimensions();
  const [date, setDate] = useState<Date>();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [loading, setLoading] = useState(false);

  const city: City = JSON.parse(data);
  const { user } = useAuthStore();

  const handleBooking = async () => {
    if (!date) {
      Alert.alert("Error", "Debes escoger una fecha para realizar la reserva");
      return;
    }
    setLoading(true);
    try {
      // await saveBookingAction({
      //   userId: user?.id!,
      //   cityId: city.id,
      //   date: date?.toISOString(),
      // });
      router.push("/city/success");
    } catch (error) {
      Alert.alert("Error", `Ha ocurrido un error ${error}`);
    } finally {
      setLoading(false);
    }
  };
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
            <SymbolView name={{ android: "map" }} tintColor="#fff" size={32} />
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
        {showDatePicker && (
          <DateTimePicker
            mode="date"
            value={new Date()}
            minimumDate={new Date()}
            onValueChange={(_, date) => {
              setDate(date);
              setShowDatePicker(false);
            }}
          />
        )}
        {date && (
          <>
            <MonoText>Fecha de reservación:</MonoText>
            <View style={styles.inner}>
              <SymbolView
                name={{ android: "calendar_check" }}
                tintColor="#fff"
                size={20}
              />
              <MonoText>{date.toLocaleDateString()}</MonoText>
            </View>
          </>
        )}
        <ButtonComponent
          text="Seleccionar fecha"
          action={() => setShowDatePicker(true)}
        />
        <ButtonComponent
          loading={loading}
          text="Guardar reserva"
          action={handleBooking}
          color="#7fcd2cb2"
        />
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
