import { LinearGradient } from "expo-linear-gradient";
import { router, usePathname } from "expo-router";
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
import { pageNames } from "../../utils/pageNames";

export default function TopMenu() {
  const { width, height } = useWindowDimensions();
  const globalStyles = getGlobalStyles("light");
  const isMobile = width < breakpoints.mobile;
  const pathname = usePathname();

  return (
    <>
      {!isMobile && (
        <View style={styles.topBar}>
          {/* Lado esquerdo */}
          <View
            style={[
              styles.topMenuContent,
              {
                justifyContent: "flex-start",
              },
            ]}
          >
            <TouchableOpacity
              onPress={() => router.push("/")}
              style={styles.topMenuItem}
            >
              <LinearGradient
                colors={["#254cfcff", "#5811cbff"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[
                  styles.topMenuItem,
                  { flexDirection: "row", gap: 10, padding: 15 },
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

          <>
            {/* Lado direito */}
            <View
              style={[
                styles.topMenuContent,
                {
                  justifyContent: "flex-end",
                },
              ]}
            >
              {pathname !== pageNames.login && (
                <>
                  <TouchableOpacity style={styles.topMenuItem}>
                    <Text style={styles.topMenuItemText}>Item 1</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.topMenuItem}>
                    <Text style={styles.topMenuItemText}>Item 2</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.topMenuItem}>
                    <Text style={styles.topMenuItemText}>Sobre nós</Text>
                  </TouchableOpacity>
                </>
              )}
              <TouchableOpacity
                onPress={() => {
                  if (pathname === pageNames.main) router.push(pageNames.login);
                  if (pathname === pageNames.login) router.push(pageNames.main);
                }}
                style={styles.topMenuItem}
              >
                <LinearGradient
                  colors={["#254cfcff", "#5811cbff"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.topMenuItem}
                >
                  <Text style={[styles.topMenuItemText, { color: "white" }]}>
                    {pathname === pageNames.main && "Login"}
                    {pathname === pageNames.login && "Voltar"}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </>
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
    height: 70,
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
    justifyContent: "center",
    alignItems: "center",
    minWidth: 120,
    height: 50,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  topMenuItemText: {
    fontSize: 18,
    fontWeight: 500,
    color: "#6B6B6B",
  },
});
