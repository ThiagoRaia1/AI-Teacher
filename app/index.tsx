import React, { useRef, useState } from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  findNodeHandle,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TopMenu from "./components/TopMenu";
import { getGlobalStyles } from "../globalStyles";
import { FontAwesome5 } from "@expo/vector-icons";
import ContactCard from "./ContactCard";

export default function PaginaInicial() {
  const { width, height } = useWindowDimensions();
  const globalStyles = getGlobalStyles("light");

  // Altura do TopMenu
  const TOP_MENU_HEIGHT = 70;

  // Entender melhor o funcionamento para scrollar até a seção que desejo

  // Refs
  const scrollRef = useRef<ScrollView>(null);
  const sobreNosRef = useRef<View>(null);

  // Guarda o Y relativo ao conteúdo do ScrollView
  const [sobreNosY, setSobreNosY] = useState(0);
  const scrollToSobreNos = () => {
    // WEB: use o DOM diretamente (nativeID -> id)
    if (Platform.OS === "web") {
      const el = document.getElementById("sobre-nos");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        // Se o TopMenu for “fixo” e cobrir o topo, compense
        window.scrollBy({
          top: -TOP_MENU_HEIGHT,
          left: 0,
          behavior: "instant" as ScrollBehavior,
        });
      }
      return;
    }

    // MOBILE/NATIVE: se já temos o Y salvo, usa direto (+ compensação do header)
    if (scrollRef.current && sobreNosY > 0) {
      scrollRef.current.scrollTo({
        y: Math.max(0, sobreNosY - TOP_MENU_HEIGHT),
        animated: true,
      });
      return;
    }

    // Fallback: mede agora relativo ao ScrollView
    const scrollNode = findNodeHandle(scrollRef.current);
    if (sobreNosRef.current && scrollNode && scrollRef.current) {
      // @ts-ignore - RN expõe measureLayout no host component
      sobreNosRef.current.measureLayout(
        scrollNode,
        (x: number, y: number) => {
          scrollRef.current?.scrollTo({
            y: Math.max(0, y - TOP_MENU_HEIGHT),
            animated: true,
          });
        },
        () => {
          // se der erro de medida, tenta o que temos
          scrollRef.current?.scrollTo({
            y: Math.max(0, sobreNosY - TOP_MENU_HEIGHT),
            animated: true,
          });
        }
      );
    }
  };

  return (
    <>
      <TopMenu onPressSobreNos={scrollToSobreNos} />
      <ScrollView ref={scrollRef}>
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
              style={{ fontSize: 25, fontWeight: "500", textAlign: "center" }}
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

            <View
              ref={sobreNosRef}
              nativeID="sobre-nos" // vira id no DOM (web)
              onLayout={(e) => setSobreNosY(e.nativeEvent.layout.y)}
              style={{ width: "100%", alignItems: "center" }}
            >
              <LinearGradient
                colors={["#254cfcff", "#5811cbff"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={globalStyles.card}
              >
                <Text style={globalStyles.title}>Sobre nós</Text>
              </LinearGradient>
            </View>

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
              <ContactCard
                iconPerfilUri="https://avatars.githubusercontent.com/u/143272411?v=4"
                name="Thiago Raia"
                description={"Desenvolvedor Full Stack.\nCriador do AI Teacher"}
                linkedinUrl="https://br.linkedin.com/in/thiago-raia-de-moura-014058362"
                githubUrl="https://github.com/ThiagoRaia1"
              />
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
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
  },
  bottomContent: {
    height: 50,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
