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
    // Add your registration logic here
    console.log("Registering as:", role);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{
          padding: 24,
          paddingTop: 40,
          paddingBottom: 60,
        }}
      >
        {/* Role Toggle */}
        <View className="flex-row bg-gray-50 border border-gray-200 rounded-lg p-1 mb-8">
          <TouchableOpacity
            className={`flex-1 py-3 rounded-md items-center ${role === "USER" ? "bg-white shadow-sm border border-gray-100" : ""}`}
            onPress={() => setRole("USER")}
          >
            <Text
              className={`font-bold ${role === "USER" ? "text-red-600" : "text-gray-500"}`}
            >
              Citizen
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`flex-1 py-3 rounded-md items-center ${role === "RESPONDER" ? "bg-white shadow-sm border border-gray-100" : ""}`}
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
            className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-base"
            placeholder="Full Name"
            value={fullName}
            onChangeText={setFullName}
          />
          <TextInput
            className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-base"
            placeholder="Mobile Number"
            value={mobileNumber}
            onChangeText={setMobileNumber}
            keyboardType="phone-pad"
          />
          <TextInput
            className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-base"
            placeholder="Email Address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-base"
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-base mb-2"
            placeholder="Confirm Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          {/* Citizen Fields */}
          {role === "USER" && (
            <>
              <TextInput
                className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-base"
                placeholder="Date of Birth (MM / DD / YYYY)"
                value={dob}
                onChangeText={setDob}
              />
              <TextInput
                className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-base"
                placeholder="Home Address"
                value={address}
                onChangeText={setAddress}
              />
              {/* Dropdown Placeholder */}
              <TouchableOpacity className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 flex-row justify-between items-center">
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
                className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-base"
                placeholder="City / Municipality"
                value={city}
                onChangeText={setCity}
              />
              <TextInput
                className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-base"
                placeholder="Province"
                value={province}
                onChangeText={setProvince}
              />
            </>
          )}

          {/* Responder Fields */}
          {role === "RESPONDER" && (
            <>
              {/* Dropdown Placeholder */}
              <TouchableOpacity className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 flex-row justify-between items-center">
                <Text className="text-black text-base">{responderType}</Text>
                <Text className="text-gray-400">▼</Text>
              </TouchableOpacity>

              <TextInput
                className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-base"
                placeholder="Organization / Station"
                value={organization}
                onChangeText={setOrganization}
              />
              <TextInput
                className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-base"
                placeholder="Badge / Employee ID"
                value={badgeId}
                onChangeText={setBadgeId}
              />

              {/* Dropdown Placeholder */}
              <TouchableOpacity className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 flex-row justify-between items-center">
                <Text
                  className={
                    assignedArea ? "text-black" : "text-gray-400 text-base"
                  }
                >
                  {assignedArea || "Select Area"}
                </Text>
                <Text className="text-gray-400">▼</Text>
              </TouchableOpacity>

              {/* Upload Button Placeholder */}
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

        <TouchableOpacity
          onPress={handleRegister}
          className="bg-red-600 rounded-full py-4 items-center mt-6"
        >
          <Text className="text-white font-bold text-base">
            {role === "USER" ? "CREATE ACCOUNT" : "SUBMIT REGISTRATION"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/auth/login")}
          className="mt-6 items-center"
        >
          <Text className="text-gray-600 font-bold">
            Already have an account? Login
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
