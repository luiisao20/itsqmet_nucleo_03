import { FlatList, ActivityIndicator, View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { getLocationsWeather } from "@/actions/get-locations-weather.action";
import { cities } from "@/constants/cities";
import { City } from "@/interfaces/models";
import Card from "@/components/Card";
import { SafeAreaView } from "react-native-safe-area-context";
import { MonoText } from "@/components/StyledText";

const HomeScreen = () => {
  const [citiesApi, setCitiesApi] = useState<City[]>([]);
  const [loading, setLoading] = useState(false);
  const loadData = async () => {
    setLoading(true);
    try {
      const data = await getLocationsWeather(cities);
      setCitiesApi(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <ActivityIndicator color="white" size={32} />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <MonoText style={styles.title}>Elige tu próximo destino</MonoText>
            <MonoText>
              Revisa las opciones disponibles, los datos de condiciones
              climáticas son en vivo, entonces ten en cuenta que pueden cambiar.
            </MonoText>
          </View>
        )}
        data={citiesApi}
        renderItem={({ item }) => <Card data={item} />}
        keyExtractor={(item) => item.name}
        refreshing={loading}
        onRefresh={() => loadData()}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    textAlign: "center",
    fontWeight: 900,
  },
  header: { padding: 10, gap: 10 },
});
