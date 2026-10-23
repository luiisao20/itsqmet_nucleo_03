import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
  Alert,
} from "react-native";
import { MonoText } from "@/components/StyledText";
import ButtonComponent from "@/components/ButtonComponent";
import { router } from "expo-router";
import ThemedInput from "@/components/ThemedInput";
import { useState } from "react";
import { loginUser } from "@/actions/login-user.action";
import { useAuthStore } from "@/lib/authStore";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const { setUser } = useAuthStore();

  const handleLogin = async () => {
    if (username.trim() === "" || password.trim() === "") {
      Alert.alert("Error", "Nombre de usuario o contraseña vacíos");
      return;
    }

    setLoading(true);
    try {
      const user = await loginUser({ username, password });
      setUser(user);
      router.dismissAll()
      router.replace("/dashboard/home");
    } catch (error) {
      Alert.alert("Error", `Existió un error al momento de loguearse ${error}`);
    } finally {
      setLoading(false);
    }
  };

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
              onChangeText={(value) => setUsername(value)}
            />
            <ThemedInput
              inputMode="text"
              autoCapitalize="none"
              secureTextEntry
              placeholder="Contraseña"
              onChangeText={(value) => setPassword(value)}
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
          <ButtonComponent
            loading={loading}
            text="Continuar"
            action={handleLogin}
          />
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
