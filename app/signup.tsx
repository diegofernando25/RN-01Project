import { Text, TextInput, View } from "react-native";

export default function SignupPage() {
  return (
    <View
      style={{
        paddingVertical: 12,
        paddingHorizontal: 12,
      }}
    >
      <Text style={{ fontSize: 20, textAlign: "center" }}>
        Hiya, it seems you're currently not have an account, please sign up
      </Text>
      <View style={{ padding: 16 }}>
        {/* Etiqueta */}
        <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 8 }}>
          Email
        </Text>

        {/* Rectángulo / Input */}
        <TextInput
          placeholder="Please, provide your email"
          placeholderTextColor="#6b7280"
          style={{
            borderWidth: 1,
            borderColor: "#9ca3af",
            backgroundColor: "white",
            paddingHorizontal: 12,
            paddingVertical: 10,
            borderRadius: 10,
            fontSize: 16,
          }}
        />
      </View>
    </View>
  );
}
