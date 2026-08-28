import { Feather } from "@expo/vector-icons";
import { Component } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

interface Props {
  label: string;
  iconName: keyof typeof Feather.glyphMap;
  placeholder: string;
  isPassword?: boolean;
  value: string;
  onChangeText: (text: string) => void;
}

interface State {
  isPasswordVisible: boolean;
}

export default class CustomTextInput extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isPasswordVisible: false,
    };
  }

  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      isPasswordVisible: !prevState.isPasswordVisible,
    }));
  };

  render() {
    const { label, iconName, placeholder, isPassword, value, onChangeText } =
      this.props;
    const { isPasswordVisible } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.inputWrapper}>
          <Feather
            name={iconName}
            size={20}
            color="#E4181E"
            style={styles.leftIcon}
          />
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor="#A9AEB6"
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={isPassword && !isPasswordVisible}
            autoCapitalize="none"
          />
          {isPassword && (
            <TouchableOpacity
              onPress={this.togglePasswordVisibility}
              style={styles.rightIcon}
            >
              <Feather
                name={isPasswordVisible ? "eye" : "eye-off"}
                size={20}
                color="#90959D"
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { marginBottom: 16 },
  label: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#0D1420",
    marginBottom: 8,
    marginLeft: 4,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E6E6EA",
    borderRadius: 14,
    height: 54,
    paddingHorizontal: 16,
  },
  leftIcon: { marginRight: 12 },
  input: { flex: 1, fontSize: 14, color: "#0D1420", height: "100%" },
  rightIcon: { padding: 4 },
});
