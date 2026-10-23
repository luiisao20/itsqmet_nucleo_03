import {
  View,
  Alert,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Pressable,
} from "react-native";
import { MonoText } from "@/components/StyledText";
import { useEffect, useState } from "react";
import { Booking } from "@/interfaces/models";
import { useAuthStore } from "@/lib/authStore";
import { getUsersBookings } from "@/actions/get-users-bookings.action";
import { SafeAreaView } from "react-native-safe-area-context";
import BookingCard from "@/components/BookingCard";
import { deleteBooking } from "@/actions/delete-booking.action";

const TabTwo = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuthStore();

  const loadBookings = async () => {
    setLoading(true);
    try {
      const data = await getUsersBookings(user?.id!);
      setBookings(data);
    } catch (error) {
      Alert.alert("Error", `${error}`);
    } finally {
      setLoading(false);
    }
  };

  const deleteBook = async (id: number) => {
    try {
      await deleteBooking(id);
      await loadBookings();
    } catch (error) {
      Alert.alert("Error", `${error}`);
    }
  };

  const handleDelete = (id: number) => {
    Alert.alert("Confirmar", "¿Estás seguro de borrar la reservación?", [
      {
        text: "Sí",
        onPress: () => deleteBook(id),
      },
    ]);
  };

  useEffect(() => {
    loadBookings();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color="white" size={32} />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <MonoText style={styles.title}>
              Hola {user?.firstName}, aquí encontrarás tus reservaciones
            </MonoText>
            <MonoText>
              Revisa las reservaciones, puedes editarlas o cancelarlas hasta una
              semana antes de la fecha escogida
            </MonoText>
          </View>
        )}
        ListEmptyComponent={() => (
          <View>
            <MonoText>
              No existen datos aún{" "}
              <Pressable
                style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
              >
                <MonoText style={{ fontWeight: 900, color: "#3480ea" }}>
                  haz una reserva aquí.
                </MonoText>
              </Pressable>
            </MonoText>
          </View>
        )}
        data={bookings}
        renderItem={({ item }) => (
          <BookingCard data={item} onDelete={(id) => handleDelete(id)} />
        )}
        keyExtractor={(item) => String(item.id)}
        refreshing={loading}
        onRefresh={() => loadBookings()}
      />
    </SafeAreaView>
  );
};

export default TabTwo;

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    textAlign: "center",
    fontWeight: 900,
  },
  header: { padding: 10, gap: 10 },
});
