import { Text, Pressable, StyleSheet, ActivityIndicator } from "react-native";

interface Props {
  text: string;
  color?: string;
  loading?: boolean;
  action: () => void;
}
const ButtonComponent = ({
  text,
  color = "blue",
  loading = false,
  action,
}: Props) => {
  return (
    <Pressable
      onPress={action}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: color, opacity: pressed ? 0.7 : 1 },
      ]}
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={styles.buttonText}>{text}</Text>
      )}
    </Pressable>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  buttonText: {
    color: "white",
    fontWeight: 600,
    fontSize: 20,
    textAlign: "center",
  },
  button: {
    width: "100%",
    paddingVertical: 18,
    justifyContent: "center",
    borderRadius: 9999,
  },
});
