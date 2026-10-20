import { Text, Pressable, StyleSheet } from "react-native";

interface Props {
  text: string;
  color?: string;
  action: () => void;
}
const ButtonComponent = ({ text, color = "blue", action }: Props) => {
  return (
    <Pressable
      onPress={action}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: color, opacity: pressed ? 0.7 : 1 },
      ]}
    >
      <Text style={styles.buttonText}>{text}</Text>
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
