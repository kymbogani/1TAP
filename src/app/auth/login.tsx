import { Component } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import FormSheet from "../../components/FormSheet";
import HeroHeader from "../../components/HeroHeader";

interface State {
  email: string;
  password: string;
}

export default class LoginScreen extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleEmailChange = (text: string) => {
    this.setState({ email: text });
  };

  handlePasswordChange = (text: string) => {
    this.setState({ password: text });
  };

  handleLoginPress = () => {
    console.log("Login Attempt:", this.state);
  };

  render() {
    const { email, password } = this.state;

    return (
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoid}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            bounces={false}
            showsVerticalScrollIndicator={false}
          >
            <HeroHeader />
            <FormSheet
              emailValue={email}
              passwordValue={password}
              onEmailChange={this.handleEmailChange}
              onPasswordChange={this.handlePasswordChange}
              onLoginPress={this.handleLoginPress}
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FCFCFC" },
  keyboardAvoid: { flex: 1 },
  scrollContent: { flexGrow: 1 },
});
