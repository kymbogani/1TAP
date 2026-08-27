import { Text, View } from "react-native";

export default function ResponderHomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold text-red-600">
        Responder Dashboard
      </Text>
      <Text className="text-gray-500 mt-2">Awaiting emergency pings...</Text>
    </View>
  );
}
