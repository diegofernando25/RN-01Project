import { Text, View } from "react-native";

export default function LoginPage() {
  return (
    <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
      <Text style={{ fontSize: 20 }}>
        Please, provide your account information
      </Text>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text>Nombres</Text>
        <Text>Apellidos</Text>
      </View>
    </View>
  );
}
