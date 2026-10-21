import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableWithoutFeedback,
  Pressable,
  Keyboard,
  ScrollView,
} from "react-native";
import { MonoText } from "@/components/StyledText";
import { router } from "expo-router";
import ButtonComponent from "@/components/ButtonComponent";
import ThemedInput from "@/components/ThemedInput";

const RegisterScreen = () => {
  return (
    <KeyboardAvoidingView behavior="padding">
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <MonoText style={styles.title}>Crea una nueva cuenta</MonoText>
            <ThemedInput
              inputMode="text"
              autoCapitalize="words"
              placeholder="Nombres"
            />
            <ThemedInput
              inputMode="text"
              autoCapitalize="words"
              placeholder="Apellidos"
            />
            <ThemedInput
              inputMode="email"
              autoCapitalize="none"
              placeholder="Correo Electrónico"
            />
            <ThemedInput
              inputMode="text"
              autoCapitalize="none"
              placeholder="Nombre de Usuario"
            />
            <ThemedInput
              inputMode="email"
              autoCapitalize="none"
              placeholder="Contraseña"
              secureTextEntry
            />
            <ThemedInput
              inputMode="text"
              autoCapitalize="none"
              placeholder="Confirmar contraseña"
              secureTextEntry
            />
            <Pressable
              onPress={() => router.push("/auth/login")}
              style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
            >
              <MonoText style={{ color: "white" }}>
                ¿Ya posees una cuenta? Inicia sesión aquí
              </MonoText>
            </Pressable>
            <ButtonComponent text="Continuar" action={() => {}} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 100,
    gap: 20,
  },
  title: {
    fontSize: 28,
    textAlign: "center",
  },
});
