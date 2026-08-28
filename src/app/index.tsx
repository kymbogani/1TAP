import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6 py-12 items-center justify-between max-w-lg mx-auto w-full">
        {/* --- TOP: Logo & Tagline --- */}
        <View className="items-center mt-8">
          <View className="flex-row items-center">
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
        {/* Added my-12 to create substantial space above and below the SOS button */}
        <View className="items-center justify-center w-full my-12 flex-1">
          <View className="w-40 h-40 rounded-full bg-red-100 items-center justify-center">
            <View className="w-32 h-32 rounded-full bg-red-600 items-center justify-center shadow-xl shadow-red-500/50">
              <Text className="text-white text-4xl font-bold">SOS</Text>
            </View>
          </View>
        </View>

        {/* --- BOTTOM: Actions & Social Login --- */}
        <View className="w-full mb-4">
          <TouchableOpacity
            onPress={() => router.push("/auth/login")}
            className="bg-red-600 rounded-2xl py-4 items-center mb-4"
          >
            <Text className="text-white font-bold text-lg">Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/auth/register")}
            className="bg-white border border-gray-300 rounded-2xl py-4 items-center mb-10"
          >
            <Text className="text-gray-900 font-bold text-lg">Sign Up</Text>
          </TouchableOpacity>

          <View className="items-center">
            <View className="flex-row items-center mb-6 w-4/5">
              <View className="flex-1 h-[1px] bg-gray-200" />
              <Text className="px-4 text-gray-400 text-sm">
                or continue with
              </Text>
              <View className="flex-1 h-[1px] bg-gray-200" />
            </View>

            <View className="flex-row justify-center space-x-6 w-full">
              <TouchableOpacity className="w-16 h-16 rounded-2xl border border-gray-200 items-center justify-center bg-white shadow-sm mx-3">
                <FontAwesome5 name="google" size={24} color="#DB4437" />
              </TouchableOpacity>
              <TouchableOpacity className="w-16 h-16 rounded-2xl border border-gray-200 items-center justify-center bg-white shadow-sm mx-3">
                <FontAwesome5 name="facebook" size={24} color="#4267B2" />
              </TouchableOpacity>
              <TouchableOpacity className="w-16 h-16 rounded-2xl border border-gray-200 items-center justify-center bg-white shadow-sm mx-3">
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
