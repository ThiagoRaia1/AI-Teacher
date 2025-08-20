import React, { useState } from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TopMenu from "./components/TopMenu";
import { getGlobalStyles } from "../globalStyles";
import { FontAwesome5 } from "@expo/vector-icons";
import * as Linking from "expo-linking";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function PaginaInicial() {
  const { width, height } = useWindowDimensions();
  const globalStyles = getGlobalStyles("light");
  const contactBaseIconSize = 150;

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
              <Text style={globalStyles.title}>Equipe</Text>
            </LinearGradient>

            <View style={styles.contactSection}>
              <View style={styles.contactRow}>
                <Image
                  source={{
                    uri: "https://avatars.githubusercontent.com/u/143272411?v=4",
                  }}
                  style={styles.ourTeamImage}
                />
                <View style={{ alignItems: "center", gap: 10 }}>
                  <Text style={{ fontSize: 60, fontWeight: 600 }}>
                    Thiago Raia
                  </Text>
                  <Text style={{ fontSize: 20, textAlign: "center" }}>
                    {"Desenvolvedor Fullstack,\ncriador do AI Teacher."}
                  </Text>
                  <View style={styles.contactRow}>
                    <TouchableOpacity
                      onPress={() =>
                        handleContact(
                          "https://br.linkedin.com/in/thiago-raia-de-moura-014058362"
                        )
                      }
                    >
                      <FontAwesome
                        name="linkedin-square"
                        size={contactBaseIconSize}
                        color="black"
                      />
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() =>
                        handleContact("https://github.com/ThiagoRaia1")
                      }
                    >
                      <FontAwesome
                        name="github-square"
                        size={contactBaseIconSize}
                        color="black"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>

            <View style={globalStyles.divider} />
          </View>
        </View>

        <View style={styles.bottomContent}>
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
    fontSize: 26,
    paddingHorizontal: 20,
    textAlign: "justify",
  },
  contactSection: {
    flex: 1,
    width: 500,
    padding: 20,
    gap: 40,
    borderRadius: 20,
    borderColor: "#aaa",
    boxShadow: "0px 10px 20px rgba(48, 72, 206, 0.3)",
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 10,
    justifyContent: "space-evenly",
  },
  ourTeamImage: {
    width: 300,
    height: 300,
    borderRadius: 300,
  },
  bottomContent: {
    height: 50,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
