import ButtonComponent from "@/components/ButtonComponent";
import { MonoText } from "@/components/StyledText";
import { router, Stack } from "expo-router";
import { SymbolView } from "expo-symbols";
import { View, StyleSheet } from "react-native";

const SucccessScreen = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <SymbolView
        name={{ android: "check_circle" }}
        tintColor="white"
        size={60}
      />
      <MonoText style={{ fontSize: 24, textAlign: "center" }}>
        ¡Has logrado realizar una reservación con éxito!
      </MonoText>
      <ButtonComponent
        text="Regresar"
        action={() => {
          router.dismissAll();
          router.replace("/dashboard/home");
        }}
      />
    </View>
  );
};

export default SucccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    gap: 20,
  },
});
