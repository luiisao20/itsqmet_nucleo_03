import { StyleSheet, TextInput, TextInputProps } from "react-native";

interface Props extends TextInputProps {}

const ThemedInput = ({ ...rest }: Props) => {
  return (
    <TextInput
      {...rest}
      style={styles.input}
      placeholderTextColor="white"
      textAlign="center"
    />
  );
};

export default ThemedInput;

const styles = StyleSheet.create({
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
