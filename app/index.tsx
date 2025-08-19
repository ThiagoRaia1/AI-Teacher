import React, { useState } from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TopMenu from "./components/TopMenu";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { getGlobalStyles } from "../globalStyles";
import { Ionicons } from "@expo/vector-icons";
import * as Linking from "expo-linking";

export default function PaginaInicial() {
  const { width, height } = useWindowDimensions();
  const globalStyles = getGlobalStyles("light");
  const contactIconSize = 90;

  const handleContact = (url: string) => {
    if (Platform.OS === "web") {
      window.open(url, "_blank"); // abre nova aba no navegador
    } else {
      Linking.openURL(url); // abre navegador externo ou app de e-mail no celular
    }
  };

  return (
    <>
      <TopMenu />
      <ScrollView>
        <View
          style={[
            globalStyles.container,
            {
              backgroundColor: "#eee",
            },
          ]}
        >
          <View
            style={{
              flex: 1,
              gap: 40,
              alignItems: "center",
              justifyContent: "flex-start",
              width: "100%",
            }}
          >
            <LinearGradient
              colors={["#254cfcff", "#5811cbff"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={globalStyles.card}
            >
              <FontAwesome5 name="brain" size={100} color="white" />
              <View style={{}}>
                <Text style={globalStyles.title}>AI TEACHER</Text>
                <Text style={globalStyles.subtitle}>
                  Seu auxílio aos estudos!
                </Text>
              </View>
            </LinearGradient>

            <Text
              style={{ fontSize: 25, fontWeight: 500, textAlign: "center" }}
            >
              Mapeie seus estudos e registre sua evolução!
            </Text>
            <Text style={styles.defaultText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              interdum lorem fringilla, iaculis dolor sed, porttitor mauris.
              Aliquam erat volutpat. Curabitur non turpis non velit commodo
              porttitor non sed ex. Maecenas ex magna, convallis vitae diam
              rhoncus, molestie placerat lacus. Nulla ultrices interdum lacus,
              sed mattis augue rutrum id. Proin metus leo, fringilla elementum
              magna in, lobortis posuere ante. Mauris semper, neque id varius
              interdum, mauris mi tempor purus, ac maximus risus lectus vel
              tortor. Integer ac justo ac elit viverra semper. In fringilla arcu
              erat, at semper nunc vestibulum eget.
            </Text>

            <View style={globalStyles.divider} />

            <LinearGradient
              colors={["#254cfcff", "#5811cbff"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={globalStyles.card}
            >
              <Text style={globalStyles.title}>Sobre nós</Text>
            </LinearGradient>

            <Text style={styles.defaultText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              interdum lorem fringilla, iaculis dolor sed, porttitor mauris.
              Aliquam erat volutpat. Curabitur non turpis non velit commodo
              porttitor non sed ex. Maecenas ex magna, convallis vitae diam
              rhoncus, molestie placerat lacus. Nulla ultrices interdum lacus,
              sed mattis augue rutrum id. Proin metus leo, fringilla elementum
              magna in, lobortis posuere ante. Mauris semper, neque id varius
              interdum, mauris mi tempor purus, ac maximus risus lectus vel
              tortor. Integer ac justo ac elit viverra semper. In fringilla arcu
              erat, at semper nunc vestibulum eget.
            </Text>

            <View style={globalStyles.divider} />

            <LinearGradient
              colors={["#254cfcff", "#5811cbff"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={globalStyles.card}
            >
              <Text style={globalStyles.title}>Contate-nos!</Text>
            </LinearGradient>

            <View style={styles.contactSection}>
              <View style={styles.contactRow}>
                <TouchableOpacity
                  onPress={() =>
                    handleContact(
                      "mailto:thiagoraia2004@gmail.com?subject=Contato&body=Olá"
                    )
                  }
                >
                  <Ionicons name="mail-outline" size={120} color="red" />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() =>
                    handleContact(
                      "https://br.linkedin.com/in/thiago-raia-de-moura-014058362"
                    )
                  }
                >
                  <Ionicons name="logo-linkedin" size={93} color="blue" />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() =>
                    handleContact("https://github.com/ThiagoRaia1")
                  }
                >
                  <Ionicons name="logo-github" size={100} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            height: 100,
            width: "100%",
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={globalStyles.subtitle}>Thiago Raia</Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
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
  defaultText: {
    color: "black",
    fontSize: 14,
    paddingHorizontal: 20,
    textAlign: "justify",
  },
  contactSection: {
    gap: 10,
  },
  contactRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  contactText: {
    color: "black",
    fontSize: 20,
    textAlign: "justify",
  },
});
