import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TopMenu from "./components/TopMenu";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { getGlobalStyles } from "../globalStyles";

export default function PaginaInicial() {
  const { width, height } = useWindowDimensions();
  const globalStyles = getGlobalStyles("light");

  return (
    <>
      <TopMenu />
      <ScrollView>
        <View
          style={[
            styles.container,
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

            <Text style={{ fontSize: 25, fontWeight: 500 }}>
              Mapeie seus estudos e registre sua evolução!
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
            <Text
              style={{
                color: "black",
                fontSize: 20,
                padding: 20,
              }}
            >
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
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
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
