import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableWithoutFeedback,
  Pressable,
  Keyboard,
  ScrollView,
  Alert,
} from "react-native";
import { MonoText } from "@/components/StyledText";
import { router } from "expo-router";
import ButtonComponent from "@/components/ButtonComponent";
import ThemedInput from "@/components/ThemedInput";
import { useState } from "react";
import { User } from "@/interfaces/supabase-models";
import { registerUser } from "@/actions/register-user.action";
import {PostgrestError} from "@supabase/supabase-js";

const REGEX_EMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const REGEX_NAME = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/;
const REGEX_USERNAME = /^[a-zA-Z0-9]+$/;

const RegisterScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (
      firstName.trim() === "" ||
      !REGEX_NAME.test(firstName) ||
      lastName.trim() === "" ||
      !REGEX_NAME.test(lastName)
    ) {
      Alert.alert(
        "Error",
        "Los nombres o apellidos no existen o está mal formados",
      );
      return;
    }

    if (email.trim() === "" || !REGEX_EMAIL.test(email)) {
      Alert.alert(
        "Error",
        "El correo electrónico no existe o está mal formado",
      );
      return;
    }

    if (username.trim() === "" || !REGEX_USERNAME.test(username)) {
      Alert.alert(
        "Error",
        "El nombre de usuario requiere sólo de letras y números",
      );
      return;
    }

    if (password.trim() === "") {
      Alert.alert("Error", "La contraseña es un campo obligatorio");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Las contraseñas deben ser iguales");
      return;
    }

    const user: User = {
      email,
      firstName,
      lastName,
      username,
      password,
    };

    setLoading(true);
    try {
      await registerUser(user);
      router.push("/auth/login");
    } catch (error) {
      Alert.alert("Error de registro", `${error}`);
    } finally {
      setLoading(false);
    }
  };

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
              onChangeText={(value) => setFirstName(value)}
            />
            <ThemedInput
              inputMode="text"
              autoCapitalize="words"
              placeholder="Apellidos"
              onChangeText={(value) => setLastName(value)}
            />
            <ThemedInput
              inputMode="email"
              autoCapitalize="none"
              placeholder="Correo Electrónico"
              onChangeText={(value) => setEmail(value)}
            />
            <ThemedInput
              inputMode="text"
              autoCapitalize="none"
              placeholder="Nombre de Usuario"
              onChangeText={(value) => setUsername(value)}
            />
            <ThemedInput
              inputMode="text"
              autoCapitalize="none"
              placeholder="Contraseña"
              secureTextEntry
              onChangeText={(value) => setPassword(value)}
            />
            <ThemedInput
              inputMode="text"
              autoCapitalize="none"
              placeholder="Confirmar contraseña"
              secureTextEntry
              onChangeText={(value) => setConfirmPassword(value)}
            />
            <Pressable
              onPress={() => router.push("/auth/login")}
              style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
            >
              <MonoText style={{ color: "white" }}>
                ¿Ya posees una cuenta? Inicia sesión aquí
              </MonoText>
            </Pressable>
            <ButtonComponent
              loading={loading}
              text="Continuar"
              action={handleRegister}
            />
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
