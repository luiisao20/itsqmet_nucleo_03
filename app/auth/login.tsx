import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { MonoText } from "@/components/StyledText";
import ButtonComponent from "@/components/ButtonComponent";

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={{ gap: 20 }}>
            <MonoText style={styles.title}>Inicia sesión</MonoText>
            <TextInput
              inputMode="text"
              autoCapitalize="none"
              style={styles.input}
              placeholder="Nombre de usuario"
              placeholderTextColor="white"
              textAlign="center"
            />
            <TextInput
              inputMode="text"
              autoCapitalize="none"
              secureTextEntry
              style={styles.input}
              placeholder="Contraseña"
              placeholderTextColor="white"
              textAlign="center"
            />
          </View>
          <ButtonComponent text="Continuar" action={() => {}} />
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
    justifyContent: 'space-between',
    paddingBottom: 100
  },
  title: {
    fontSize: 28,
    textAlign: "center",
  },
  input: {
    borderColor: "#e8cfcfcb",
    width: "100%",
    borderWidth: 2,
    borderRadius: 9999,
    paddingHorizontal: 4,
    fontSize: 20,
    color: "white",
    fontFamily: "SpaceMono",
  },
});
