import { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
  title: string;
  onPress: () => void;
}

export default class PrimaryButton extends Component<Props> {
  render() {
    const { title, onPress } = this.props;
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#E4181E",
    borderRadius: 14,
    height: 54,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },
  text: { color: "#FFFFFF", fontWeight: "bold", fontSize: 17 },
});
