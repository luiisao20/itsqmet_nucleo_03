import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
  Text,
} from "react-native";
import { MonoText } from "@/components/StyledText";
import ButtonComponent from "@/components/ButtonComponent";
import { router } from "expo-router";
import ThemedInput from "@/components/ThemedInput";

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={{ gap: 20 }}>
            <MonoText style={styles.title}>Inicia sesión</MonoText>
            <ThemedInput
              inputMode="text"
              autoCapitalize="none"
              placeholder="Nombre de usuario"
            />
            <ThemedInput
              inputMode="text"
              autoCapitalize="none"
              secureTextEntry
              placeholder="Contraseña"
            />
            <Pressable
              onPress={() => router.push("/auth/register")}
              style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
            >
              <MonoText style={{ color: "white" }}>
                ¿No posees una cuenta? Regístrate aquí
              </MonoText>
            </Pressable>
          </View>
          <ButtonComponent text="Continuar" action={() => router.push('/dashboard/home')} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 100,
  },
  title: {
    fontSize: 28,
    textAlign: "center",
  },
});
