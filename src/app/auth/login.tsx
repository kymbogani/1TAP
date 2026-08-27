import {
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
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

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-[#fff5f5]">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        {/* --- TOP SECTION: Brand & Graphics --- */}
        <View className="items-center pt-12 pb-16 px-6">
          {/* Logo */}
          <View className="flex-row items-center">
            <MaterialCommunityIcons
              name="gesture-tap"
              size={56}
              color="#dc2626"
            />
            <View className="ml-2">
              <Text className="text-5xl font-black text-red-600 tracking-tighter">
                1-TAP
              </Text>
              <Text className="text-xl font-bold text-gray-900 tracking-widest">
                EMERGENCY
              </Text>
            </View>
          </View>

          {/* Subtitle with inline color */}
          <Text className="text-gray-700 mt-2 text-lg">
            One Tap. <Text className="text-red-600 font-medium">Help</Text> is
            on the way.
          </Text>

          {/* SOS Button (Placeholder for the center graphic) */}
          <View className="w-36 h-36 rounded-full bg-red-100 items-center justify-center mt-6 mb-4">
            <View className="w-24 h-24 rounded-full bg-red-600 items-center justify-center shadow-lg shadow-red-500/50">
              <Text className="text-white text-3xl font-bold">SOS</Text>
            </View>
          </View>
        </View>

        {/* --- BOTTOM SECTION: Login Card overlay --- */}
        <View className="flex-1 bg-white rounded-t-[40px] px-6 pt-8 pb-12 shadow-sm">
          <Text className="text-3xl font-bold text-center text-gray-900">
            Welcome Back!
          </Text>
          <Text className="text-center text-gray-500 mt-1 mb-8 text-base">
            Login to continue
          </Text>

          {/* Email Input */}
          <View className="mb-4">
            <Text className="text-gray-900 font-bold mb-2 ml-1">Email</Text>
            <View className="flex-row items-center border border-gray-200 bg-white rounded-xl px-4 py-3.5">
              <Feather name="mail" size={20} color="#dc2626" />
              <TextInput
                className="flex-1 ml-3 text-base text-gray-900"
                placeholder="Enter your email"
                placeholderTextColor="#9ca3af"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>

          {/* Password Input */}
          <View className="mb-2">
            <Text className="text-gray-900 font-bold mb-2 ml-1">Password</Text>
            <View className="flex-row items-center border border-gray-200 bg-white rounded-xl px-4 py-3.5">
              <Feather name="lock" size={20} color="#dc2626" />
              <TextInput
                className="flex-1 ml-3 text-base text-gray-900"
                placeholder="Enter your password"
                placeholderTextColor="#9ca3af"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Feather
                  name={showPassword ? "eye" : "eye-off"}
                  size={20}
                  color="#6b7280"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Forgot Password */}
          <TouchableOpacity className="items-end mb-6">
            <Text className="text-red-600 font-medium">Forgot Password?</Text>
          </TouchableOpacity>

          {/* Login Button */}
          <TouchableOpacity
            onPress={() => router.replace("/user/home")}
            className="bg-red-600 rounded-xl py-4 items-center mb-6"
          >
            <Text className="text-white font-bold text-lg">Login</Text>
          </TouchableOpacity>

          {/* OR Divider */}
          <View className="flex-row items-center mb-6">
            <View className="flex-1 h-[1px] bg-gray-200" />
            <Text className="px-4 text-gray-400 text-sm">OR</Text>
            <View className="flex-1 h-[1px] bg-gray-200" />
          </View>

          {/* Social Logins */}
          <View className="flex-row justify-between space-x-2 mb-8">
            <TouchableOpacity className="flex-1 flex-row items-center justify-center bg-white border border-gray-200 rounded-xl py-3 shadow-sm">
              <FontAwesome5 name="google" size={18} color="#DB4437" />
              <Text className="ml-2 font-medium text-gray-700">Google</Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex-1 flex-row items-center justify-center bg-white border border-gray-200 rounded-xl py-3 shadow-sm">
              <FontAwesome5 name="facebook" size={18} color="#4267B2" />
              <Text className="ml-2 font-medium text-gray-700">Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex-1 flex-row items-center justify-center bg-white border border-gray-200 rounded-xl py-3 shadow-sm">
              <FontAwesome5 name="apple" size={20} color="#000000" />
              <Text className="ml-2 font-medium text-gray-700">Apple</Text>
            </TouchableOpacity>
          </View>

          {/* Sign Up Link */}
          <View className="flex-row justify-center pb-8">
            <Text className="text-gray-500 text-base">
              Don't have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => router.push("/auth/register")}>
              <Text className="text-red-600 font-bold text-base">Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
