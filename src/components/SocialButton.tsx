import { FontAwesome5 } from "@expo/vector-icons";
import { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
  provider: string;
  iconName: string;
  iconColor: string;
}

export default class SocialButton extends Component<Props> {
  render() {
    const { provider, iconName, iconColor } = this.props;
    return (
      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <FontAwesome5
          name={iconName}
          size={18}
          color={iconColor}
          style={styles.icon}
        />
        <Text style={styles.text}>{provider}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E6E6EA",
    borderRadius: 12,
    height: 48,
    marginHorizontal: 4,
  },
  icon: { marginRight: 8 },
  text: { fontSize: 14, fontWeight: "600", color: "#0D1420" },
});
