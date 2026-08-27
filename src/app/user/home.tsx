import { Text, View } from "react-native";

export default function UserHomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold text-green-600">
        Citizen Home Page
      </Text>
      <Text className="text-gray-500 mt-2">Welcome to OneTap Emergency.</Text>
    </View>
  );
}
