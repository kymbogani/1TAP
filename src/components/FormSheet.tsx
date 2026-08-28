import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomTextInput from "./CustomTextInput";
import PrimaryButton from "./PrimaryButton";
import SocialButton from "./SocialButton";

interface Props {
  emailValue: string;
  passwordValue: string;
  onEmailChange: (text: string) => void;
  onPasswordChange: (text: string) => void;
  onLoginPress: () => void;
}

export default function FormSheet({
  emailValue,
  passwordValue,
  onEmailChange,
  onPasswordChange,
  onLoginPress,
}: Props) {
  const router = useRouter();

  return (
    <View style={styles.sheetContainer}>
      <Text style={styles.welcomeText}>Welcome Back!</Text>
      <Text style={styles.subtitleText}>Login to continue</Text>

      <CustomTextInput
        label="Email"
        iconName="mail"
        placeholder="Enter your email"
        value={emailValue}
        onChangeText={onEmailChange}
        isPassword={false}
      />

      <CustomTextInput
        label="Password"
        iconName="lock"
        placeholder="Enter your password"
        value={passwordValue}
        onChangeText={onPasswordChange}
        isPassword={true}
      />

      <TouchableOpacity
        style={styles.forgotPasswordContainer}
        activeOpacity={0.7}
      >
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      <PrimaryButton title="Login" onPress={onLoginPress} />

      <View style={styles.dividerRow}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.dividerLine} />
      </View>

      <View style={styles.socialRow}>
        <SocialButton provider="Google" iconName="google" iconColor="#DB4437" />
        <SocialButton
          provider="Facebook"
          iconName="facebook-f"
          iconColor="#4267B2"
        />
        <SocialButton provider="Apple" iconName="apple" iconColor="#000000" />
      </View>

      <View style={styles.footerRow}>
        <Text style={styles.footerText}>Don't have an account? </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => router.push("/auth/register")}
        >
          <Text style={styles.footerAction}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sheetContainer: {
    flex: 1,
    backgroundColor: "#FCFCFC",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 24,
    paddingTop: 32,
    marginTop: -32,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 10,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0D1420",
    textAlign: "center",
  },
  subtitleText: {
    fontSize: 15,
    color: "#90959D",
    textAlign: "center",
    marginTop: 4,
    marginBottom: 32,
  },
  forgotPasswordContainer: { alignSelf: "flex-end", marginBottom: 16 },
  forgotPasswordText: { color: "#E4181E", fontSize: 13, fontWeight: "600" },
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
  },
  dividerLine: { flex: 1, height: 1, backgroundColor: "#E6E6EA" },
  dividerText: { color: "#90959D", paddingHorizontal: 16, fontSize: 13 },
  socialRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 40,
  },
  footerText: { color: "#90959D", fontSize: 14 },
  footerAction: { color: "#E4181E", fontSize: 14, fontWeight: "bold" },
});
