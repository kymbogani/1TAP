import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6 py-8 items-center justify-between">
        {/* --- TOP: Logo & Tagline --- */}
        <View className="items-center mt-12">
          <View className="flex-row items-center">
            {/* Hand tap icon */}
            <MaterialCommunityIcons
              name="gesture-tap"
              size={48}
              color="#dc2626"
            />
            <View className="ml-2">
              <Text className="text-4xl font-black text-red-600 tracking-tighter">
                1-TAP
              </Text>
              <Text className="text-xl font-bold text-gray-900 tracking-widest">
                EMERGENCY
              </Text>
            </View>
          </View>
          <Text className="text-gray-500 mt-4 text-base">
            One Tap. Help is on the way.
          </Text>
        </View>

        {/* --- MIDDLE: Illustration Placeholder --- */}
        {/* If you have the exact image from your design, you can replace this View with an <Image /> component */}
        <View className="items-center justify-center w-full flex-1">
          {/* Decorative SOS Button representing the center of the illustration */}
          <View className="w-40 h-40 rounded-full bg-red-100 items-center justify-center">
            <View className="w-32 h-32 rounded-full bg-red-600 items-center justify-center shadow-xl shadow-red-500/50">
              <Text className="text-white text-4xl font-bold">SOS</Text>
            </View>
          </View>
        </View>

        {/* --- BOTTOM: Actions & Social Login --- */}
        <View className="w-full">
          {/* Login Button */}
          <TouchableOpacity
            onPress={() => router.push("/auth/login")}
            className="bg-red-600 rounded-2xl py-4 items-center mb-4"
          >
            <Text className="text-white font-bold text-lg">Login</Text>
          </TouchableOpacity>

          {/* Sign Up Button */}
          <TouchableOpacity
            onPress={() => router.push("/auth/register")}
            className="bg-white border border-gray-300 rounded-2xl py-4 items-center mb-8"
          >
            <Text className="text-gray-900 font-bold text-lg">Sign Up</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View className="items-center">
            <View className="flex-row items-center mb-6 w-4/5">
              <View className="flex-1 h-[1px] bg-gray-200" />
              <Text className="px-4 text-gray-400 text-sm">
                or continue with
              </Text>
              <View className="flex-1 h-[1px] bg-gray-200" />
            </View>

            {/* Social Icons */}
            <View className="flex-row space-x-6">
              <TouchableOpacity className="w-16 h-16 rounded-2xl border border-gray-200 items-center justify-center bg-white shadow-sm">
                <FontAwesome5 name="google" size={24} color="#DB4437" />
              </TouchableOpacity>
              <TouchableOpacity className="w-16 h-16 rounded-2xl border border-gray-200 items-center justify-center bg-white shadow-sm">
                <FontAwesome5 name="facebook" size={24} color="#4267B2" />
              </TouchableOpacity>
              <TouchableOpacity className="w-16 h-16 rounded-2xl border border-gray-200 items-center justify-center bg-white shadow-sm">
                <MaterialCommunityIcons
                  name="email-outline"
                  size={26}
                  color="#4B5563"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
