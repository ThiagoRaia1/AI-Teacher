import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { getGlobalStyles } from "../../globalStyles";
import { breakpoints } from "../../utils/breakpoints";

export default function TopMenu() {
  const { width, height } = useWindowDimensions();
  const globalStyles = getGlobalStyles("light");
  const isMobile = width < breakpoints.mobile;

  return (
    <>
      {!isMobile && (
        <View style={[styles.topBar, { height: !isMobile ? 90 : 50 }]}>
          {/* Lado esquerdo */}
          <View
            style={[
              styles.topMenuContent,
              {
                justifyContent: "flex-start",
              },
            ]}
          >
            <TouchableOpacity onPress={() => router.push("/")}>
              <LinearGradient
                colors={["#254cfcff", "#5811cbff"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[
                  {
                    flexDirection: "row",
                    gap: 10,
                    padding: 15,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 20,
                  },
                ]}
              >
                <FontAwesome5 name="brain" size={30} color="white" />
                <View style={{}}>
                  <Text style={styles.title}>AI TEACHER</Text>
                  <Text style={styles.subtitle}>Seu auxílio aos estudos!</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          {/* Lado direito */}
          <View
            style={[
              styles.topMenuContent,
              {
                justifyContent: "flex-end",
              },
            ]}
          >
            <TouchableOpacity style={styles.topMenuItem}>
              <Text style={styles.topMenuItemText}>Item 1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.topMenuItem}>
              <Text style={styles.topMenuItemText}>Item 2</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.topMenuItem}>
              <Text style={styles.topMenuItemText}>Sobre nós</Text>
            </TouchableOpacity>
            <LinearGradient
              colors={["#254cfcff", "#5811cbff"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={[
                styles.topMenuItem,
                {
                  borderRadius: 10,
                },
              ]}
            >
              <TouchableOpacity
                onPress={() => {
                  router.push("/login");
                }}
              >
                <Text style={[styles.topMenuItemText, { color: "white" }]}>
                  Login
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    top: 0,
    width: "100%",
    padding: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 8,
    color: "#ccc",
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
    paddingHorizontal: 20, // dá espaço lateral
  },
  topMenuItemText: {
    fontSize: 18,
    fontWeight: 500,
    color: "#6B6B6B",
  },
});
