import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function NavbarPage() {
  const insets = useSafeAreaInsets();

  return (
    // Contenedor del navbar (fondo + separación por notch/status bar)
    <View
      style={{
        backgroundColor: "#cfd3dc",
        paddingTop: insets.top + 8, // ✅ separa del reloj/batería
        paddingHorizontal: 16,
        paddingBottom: 8,
      }}
    >
      {/* Fila principal */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {/* Izquierda */}
        <Text style={{ color: "black", fontSize: 20, fontWeight: "600" }}>
          PlayCity Casino
        </Text>

        {/* Spacer (empuja el bloque derecho al extremo) */}
        <View style={{ flex: 1 }} />

        {/* Derecha (juntos) */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {/* Botón 1: Log in */}
          <Link href="/login" asChild>
            <Pressable
              style={{
                paddingHorizontal: 12,
                paddingVertical: 8,
                borderRadius: 10,
                backgroundColor: "#d7553e",
              }}
            >
              <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>
                Log in
              </Text>
            </Pressable>
          </Link>

          {/* Separación entre botones */}
          <View style={{ width: 10 }} />

          {/* Botón 2: Sign Up */}
          <Link href="/signup" asChild>
            <Pressable
              style={{
                paddingHorizontal: 12,
                paddingVertical: 8,
                borderRadius: 10,
                backgroundColor: "#d7553e",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>
                Sign Up
              </Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </View>
  );
}
