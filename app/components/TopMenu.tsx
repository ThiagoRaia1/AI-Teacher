import { router } from "expo-router";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function TopMenu() {
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        backgroundColor: "#6A2CCB",
        width: "100%",
        height: 50,
        flexDirection: "row",
      }}
    >
      <View
        style={[
          styles.topMenuContent,
          {
            justifyContent: "flex-start",
            paddingLeft: 20,
          },
        ]}
      >
        <TouchableOpacity style={styles.topMenuItem}>
          <Text>Esquerda</Text>
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.topMenuContent,
          {
            justifyContent: "flex-end",
            paddingRight: 20,
          },
        ]}
      >
        <TouchableOpacity style={styles.topMenuItem}>
          <Text>Direita</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.topMenuItem}
          onPress={() => {
            router.push("/login");
          }}
        >
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "85%",
    maxWidth: 1000,
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: 24,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#ddd",
    marginBottom: 20,
    textAlign: "center",
  },
  topMenuContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  topMenuItem: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  button: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#2575fc",
    fontWeight: "bold",
    fontSize: 16,
  },
  registerText: {
    marginTop: 16,
    textAlign: "center",
    color: "#fff",
  },
});
