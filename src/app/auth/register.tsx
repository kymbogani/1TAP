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

  const handleDobChange = (text: string) => {
    // 1. Allow backspacing to work smoothly
    if (text.length < dob.length) {
      setDob(text);
      return;
    }

    // 2. Remove any non-numeric characters
    let cleaned = text.replace(/[^0-9]/g, "");

    // 3. Smart Month Auto-Correct
    if (cleaned.length === 1 && parseInt(cleaned) > 1) {
      cleaned = "0" + cleaned;
    }

    // 4. Smart Day Auto-Correct
    if (cleaned.length === 3 && parseInt(cleaned.charAt(2)) > 3) {
      cleaned = cleaned.slice(0, 2) + "0" + cleaned.slice(2);
    }

    // 5. Auto-insert the slashes
    let formatted = cleaned;
    if (cleaned.length >= 3) {
      formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
    }
    if (cleaned.length >= 5) {
      formatted = `${formatted.slice(0, 5)}/${cleaned.slice(4, 8)}`;
    }

    setDob(formatted);
  };

  const handleRegister = async () => {
    if (!agreed) {
      alert("Please agree to the Terms and Privacy Policy.");
      return;
    }

    // Ensure the mobile number is exactly 11 digits
    if (mobileNumber.length !== 11) {
      alert(
        "Please enter a valid 11-digit Philippine mobile number (e.g., 09123456789).",
      );
      return;
    }

    console.log("Registering as:", role);
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
            placeholder="Mobile Number (e.g., 09123456789)"
            value={mobileNumber}
            onChangeText={(text) =>
              setMobileNumber(text.replace(/[^0-9]/g, ""))
            }
            keyboardType="number-pad"
            maxLength={11}
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
                placeholder="Date of Birth (MM/DD/YYYY)"
                value={dob}
                onChangeText={handleDobChange}
                keyboardType="number-pad"
                maxLength={10}
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
