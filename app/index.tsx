import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { router } from "expo-router";
import ButtonComponent from "@/components/ButtonComponent";

const IndexScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={{
          uri: "https://i.pinimg.com/236x/70/b1/89/70b189fc328d1492fdcb926d4577af09.jpg",
        }}
        style={{ position: "absolute", width: "100%", height: "100%" }}
      />
      <View
        style={{
          width: "100%",
          flex: 1,
          justifyContent: "space-between",
          padding: 30,
        }}
      >
        <Text style={styles.title}>Bienvenido a TravelWire</Text>
        <View style={{ gap: 10 }}>
          <ButtonComponent
            text="Iniciar sesión"
            action={() => router.push("/auth/login")}
          />
          <ButtonComponent
            text="Registrarse"
            color="rgb(46, 121, 224)"
            action={() => router.push("/auth/login")}
          />
        </View>
      </View>
    </View>
  );
};

export default IndexScreen;

export const styles = StyleSheet.create({
  title: {
    color: "white",
    fontWeight: 900,
    fontSize: 24,
    textAlign: "center",
  },
});
