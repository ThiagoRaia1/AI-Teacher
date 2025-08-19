import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { getGlobalStyles } from "../../globalStyles";

export default function Login() {
  const globalStyles = getGlobalStyles("light");

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    console.log("Login:", email, senha);
  };

  return (
    <LinearGradient
      colors={["#6a11cb", "#2575fc"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={globalStyles.container}
    >
      <View style={styles.card}>
        <Text style={styles.title}>Bem-vindo</Text>
        <Text style={styles.subtitle}>Faça login para continuar</Text>

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.registerText} selectable={false}>
          Não tem conta?{" "}
          <TouchableOpacity
            onPress={() => {
              router.push("/register");
            }}
          >
            <Text style={styles.registerLink}>Cadastre-se</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    maxWidth: 1000,
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: 20,
    borderRadius: 20,
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.8)",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#ddd",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 12,
    padding: 14,
    marginBottom: 16,
    color: "#fff",
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
  registerLink: {
    fontWeight: "bold",
    color: "#fff",
    textDecorationLine: "underline",
  },
});
