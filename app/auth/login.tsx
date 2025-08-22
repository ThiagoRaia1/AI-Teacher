import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { getGlobalStyles } from "../../globalStyles";
import { supabase } from "../../lib/supabase";
import { pageNames } from "../../utils/pageNames";
import Carregando from "../components/Carregando";
import TopMenu from "../components/TopMenu";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const globalStyles = getGlobalStyles("light");

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error?.status === 400) {
      alert("E-mail ou senha inválidos");
      setLoading(false);
      return;
    }
    setLoading(false);
    router.push(pageNames.pages.mainMenu);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) alert(error.message);
    if (!session) alert("Please check your inbox for email verification!");
    setLoading(false);
  }

  return (
    <>
      <TopMenu />
      <LinearGradient
        colors={["#6a11cb", "#2575fc"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={globalStyles.container}
      >
        <View style={styles.card}>
          <View
            style={{
              width: "100%",
              maxWidth: 1000,
              alignSelf: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.title}>Bem-vindo</Text>
            <Text style={styles.subtitle}>Faça login para continuar</Text>

            <View
              style={{
                alignItems: "center",
                width: "100%",
              }}
            >
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#aaa"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <Text style={styles.label}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#aaa"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => signInWithEmail()}
            >
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <Text style={styles.registerText} selectable={false}>
              {"Não tem um conta? "}
              <TouchableOpacity
                onPress={() => {
                  signUpWithEmail();
                  router.push("/register");
                }}
              >
                <Text style={styles.registerLink}>Cadastre-se</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </LinearGradient>
      {loading && <Carregando />}
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: 20,
    borderRadius: 20,
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.8)",
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
    alignSelf: "flex-start",
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: "100%",
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
