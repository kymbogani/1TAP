import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white space-y-4">
      <Text className="text-3xl text-black font-bold mb-4">
        OneTap Emergency
      </Text>

      {/* This link perfectly routes to your auth/login.tsx file */}
      <Link
        href="/auth/login"
        className="bg-red-600 px-6 py-3 rounded-full overflow-hidden text-center"
      >
        <Text className="text-white font-bold text-lg">Go to Login Screen</Text>
      </Link>
    </View>
  );
}
