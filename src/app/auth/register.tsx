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

export default function RegisterScreen() {
  const router = useRouter();
  const [role, setRole] = useState<"USER" | "RESPONDER">("USER");

  // Shared States
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);

  // Citizen Specific States
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [barangay, setBarangay] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");

  // Responder Specific States
  const [responderType, setResponderType] = useState("Police");
  const [organization, setOrganization] = useState("");
  const [badgeId, setBadgeId] = useState("");
  const [assignedArea, setAssignedArea] = useState("");

  const handleRegister = async () => {
    if (!agreed) {
      alert("Please agree to the Terms and Privacy Policy.");
      return;
    }
    console.log("Registering as:", role);
    // TODO: Add actual API registration logic here
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          flexGrow: 1,
          padding: 24,
          paddingTop: 40,
          paddingBottom: 100,
        }}
        showsVerticalScrollIndicator={true}
        keyboardShouldPersistTaps="handled"
      >
        {/* Role Toggle */}
        <View className="flex-row bg-gray-50 border border-gray-200 rounded-lg p-1 mb-8">
          <TouchableOpacity
            className={`flex-1 py-3 rounded-md items-center ${role === "USER" ? "bg-white shadow-sm border border-gray-200" : ""}`}
            onPress={() => setRole("USER")}
          >
            <Text
              className={`font-bold ${role === "USER" ? "text-red-600" : "text-gray-500"}`}
            >
              Citizen
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`flex-1 py-3 rounded-md items-center ${role === "RESPONDER" ? "bg-white shadow-sm border border-gray-200" : ""}`}
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
          {/* Shared Fields */}
          <TextInput
            className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-base mb-4"
            placeholder="Full Name"
            value={fullName}
            onChangeText={setFullName}
          />
          <TextInput
            className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-base mb-4"
            placeholder="Mobile Number"
            value={mobileNumber}
            onChangeText={setMobileNumber}
            keyboardType="phone-pad"
          />
          <TextInput
            className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-base mb-4"
            placeholder="Email Address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-base mb-4"
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-base mb-4"
            placeholder="Confirm Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          {/* Citizen Fields */}
          {role === "USER" && (
            <>
              <TextInput
                className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-base mb-4"
                placeholder="Date of Birth (MM / DD / YYYY)"
                value={dob}
                onChangeText={setDob}
              />
              <TextInput
                className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-base mb-4"
                placeholder="Home Address"
                value={address}
                onChangeText={setAddress}
              />
              <TouchableOpacity className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 flex-row justify-between items-center mb-4">
                <Text
                  className={
                    barangay ? "text-black" : "text-gray-400 text-base"
                  }
                >
                  {barangay || "Select Barangay"}
                </Text>
                <Text className="text-gray-400">▼</Text>
              </TouchableOpacity>
              <TextInput
                className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-base mb-4"
                placeholder="City / Municipality"
                value={city}
                onChangeText={setCity}
              />
              <TextInput
                className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-base mb-4"
                placeholder="Province"
                value={province}
                onChangeText={setProvince}
              />
            </>
          )}

          {/* Responder Fields */}
          {role === "RESPONDER" && (
            <>
              <TouchableOpacity className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 flex-row justify-between items-center mb-4">
                <Text className="text-black text-base">{responderType}</Text>
                <Text className="text-gray-400">▼</Text>
              </TouchableOpacity>

              <TextInput
                className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-base mb-4"
                placeholder="Organization / Station"
                value={organization}
                onChangeText={setOrganization}
              />
              <TextInput
                className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-base mb-4"
                placeholder="Badge / Employee ID"
                value={badgeId}
                onChangeText={setBadgeId}
              />

              <TouchableOpacity className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 flex-row justify-between items-center mb-4">
                <Text
                  className={
                    assignedArea ? "text-black" : "text-gray-400 text-base"
                  }
                >
                  {assignedArea || "Select Area"}
                </Text>
                <Text className="text-gray-400">▼</Text>
              </TouchableOpacity>

              <TouchableOpacity className="border border-dashed border-gray-400 rounded-xl px-4 py-4 items-center bg-gray-50 mt-2">
                <Text className="text-gray-600 font-medium">
                  Upload Verification Document
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>

        {/* Terms Checkbox */}
        <TouchableOpacity
          className="flex-row items-center mt-6 mb-2"
          onPress={() => setAgreed(!agreed)}
        >
          <View
            className={`w-6 h-6 border rounded justify-center items-center mr-3 ${agreed ? "bg-red-600 border-red-600" : "border-gray-300 bg-white"}`}
          >
            {agreed && <Text className="text-white font-bold text-xs">✓</Text>}
          </View>
          <Text className="text-gray-700">
            I agree to the Terms and Privacy Policy
          </Text>
        </TouchableOpacity>

        {/* Submit Button */}
        <TouchableOpacity
          onPress={handleRegister}
          activeOpacity={0.8}
          className="bg-red-600 rounded-xl py-4 items-center mt-6 shadow-sm"
        >
          <Text className="text-white font-bold text-lg">
            {role === "USER" ? "Create Account" : "Submit Registration"}
          </Text>
        </TouchableOpacity>

        {/* Back to Login */}
        <TouchableOpacity
          onPress={() => router.push("/auth/login")}
          className="mt-8 items-center pb-8"
        >
          <Text className="text-gray-600 font-bold text-base">
            Already have an account? <Text className="text-red-600">Login</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
