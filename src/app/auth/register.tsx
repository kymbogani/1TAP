import { useRouter } from "expo-router";
import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { authService } from "../../services/AuthService";

export default function RegisterScreen() {
  const router = useRouter();
  const [role, setRole] = useState<"USER" | "RESPONDER">("USER");

  // Shared States
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  // Specific States
  const [email, setEmail] = useState("");
  const [responderType, setResponderType] = useState<
    "POLICE" | "FIRE" | "MEDICAL" | "RESCUE"
  >("RESCUE");

  const handleRegister = async () => {
    try {
      if (role === "USER") {
        await authService.registerUser(name, email, phone);
        router.replace("/user/home");
      } else {
        await authService.registerResponder(name, responderType, phone);
        router.replace("/responder/home");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ padding: 24, paddingTop: 40 }}>
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
          Create Account
        </Text>

        <View className="space-y-4">
          <TextInput
            className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-base mb-4"
            placeholder={role === "USER" ? "Full Name" : "Team/Unit Name"}
            value={name}
            onChangeText={setName}
          />

          {role === "USER" && (
            <TextInput
              className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-base mb-4"
              placeholder="Email Address"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          )}

          <TextInput
            className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-base mb-4"
            placeholder="Phone Number (09XXXXXXXXX)"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
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
          onPress={handleRegister}
          className="bg-red-600 rounded-full py-4 items-center mt-8"
        >
          <Text className="text-white font-bold text-base">Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/auth/login")}
          className="mt-4 items-center"
        >
          <Text className="text-gray-600 font-bold">
            Already have an account? Login
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
