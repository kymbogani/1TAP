import { useRouter } from "expo-router";
import { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { authService } from "../../services/AuthService";

export default function LoginScreen() {
  const router = useRouter();
  const [role, setRole] = useState<"USER" | "RESPONDER">("USER");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const account = await authService.login(identifier, role);
      console.log("Logged in successfully:", account);

      // Navigate based on role
      if (role === "USER") {
        router.replace("/user/home");
      } else {
        router.replace("/responder/home");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white p-6">
      {/* Role Toggle */}
      <View className="flex-row bg-gray-100 rounded-lg p-1 mb-8">
        <TouchableOpacity
          className={`flex-1 py-3 rounded-md items-center ${role === "USER" ? "bg-white shadow-sm" : ""}`}
          onPress={() => setRole("USER")}
        >
          <Text
            className={`font-bold ${role === "USER" ? "text-red-600" : "text-gray-500"}`}
          >
            Citizen
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`flex-1 py-3 rounded-md items-center ${role === "RESPONDER" ? "bg-white shadow-sm" : ""}`}
          onPress={() => setRole("RESPONDER")}
        >
          <Text
            className={`font-bold ${role === "RESPONDER" ? "text-red-600" : "text-gray-500"}`}
          >
            Rescue Unit
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="text-2xl font-bold text-gray-900 mb-6">
        Welcome back!
      </Text>

      <View className="space-y-4">
        <TextInput
          className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-base"
          placeholder={
            role === "USER" ? "Email address" : "Responder ID / Phone"
          }
          value={identifier}
          onChangeText={setIdentifier}
          autoCapitalize="none"
        />
        <TextInput
          className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-base"
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity
        onPress={handleLogin}
        className="bg-red-600 rounded-full py-4 items-center mt-8"
      >
        <Text className="text-white font-bold text-base">Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/auth/register")}
        className="mt-4 items-center"
      >
        <Text className="text-red-600 font-bold">Create an account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
