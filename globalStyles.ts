import { StyleSheet } from "react-native";

export const getGlobalStyles = (theme: "light" | "dark") =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
    divider: {
      height: 1,
      backgroundColor: "#ccc",
      width: "80%",
      marginVertical: 20,
    },
    card: {
      width: "100%",
      maxWidth: 1000,
      padding: 20,
      borderRadius: 20,
      boxShadow: "0px 10px 10px rgba(48, 72, 206, 1)",
      flexDirection: "row",
      gap: 20,
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
      color: "#fff",
      textAlign: "center",
    },
    subtitle: {
      fontSize: 16,
      color: "#ccc",
      textAlign: "center",
    },
  });
