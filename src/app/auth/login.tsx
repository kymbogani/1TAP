import AsyncStorage from "@react-native-async-storage/async-storage";
import NetInfo from "@react-native-community/netinfo";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import FormSheet from "../../components/FormSheet";
import HeroHeader from "../../components/HeroHeader";
import { supabase } from "../lib/supabase";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Auto-redirect if a valid offline session exists
  useEffect(() => {
    checkExistingSession();
  }, []);

  const checkExistingSession = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (session) {
      router.replace("/dashboard");
    }
  };

  const handleLoginPress = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    }

    setLoading(true);

    try {
      // Check network status
      const netState = await NetInfo.fetch();

      if (!netState.isConnected) {
        // OFFLINE LOGIN FALLBACK: Verify against cached credentials
        const cachedUser = await AsyncStorage.getItem(
          "offline_user_credentials",
        );

        if (cachedUser) {
          const { cachedEmail, cachedPassword } = JSON.parse(cachedUser);
          if (
            email.toLowerCase() === cachedEmail.toLowerCase() &&
            password === cachedPassword
          ) {
            Alert.alert("Offline Mode", "Logged in using cached credentials.");
            router.replace("/dashboard");
            return;
          }
        }

        Alert.alert(
          "Offline Mode",
          "No internet connection found and no matching offline session exists. Please connect to log in for the first time.",
        );
        return;
      }

      // ONLINE LOGIN: Authenticate with Supabase
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error) {
        Alert.alert("Login Failed", error.message);
        return;
      }

      if (data.session) {
        // Cache credentials and session for offline access
        await AsyncStorage.setItem(
          "offline_user_credentials",
          JSON.stringify({
            cachedEmail: email.trim(),
            cachedPassword: password,
          }),
        );
        await AsyncStorage.setItem("user_profile", JSON.stringify(data.user));

        router.replace("/dashboard");
      }
    } catch (err: any) {
      Alert.alert("An error occurred", err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

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
          keyboardShouldPersistTaps="handled"
        >
          <HeroHeader />
          <FormSheet
            emailValue={email}
            passwordValue={password}
            onEmailChange={setEmail}
            onPasswordChange={setPassword}
            onLoginPress={handleLoginPress}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FCFCFC" },
  keyboardAvoid: { flex: 1 },
  scrollContent: { flexGrow: 1, paddingBottom: 40 },
});
