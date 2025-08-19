import { Ionicons } from "@expo/vector-icons";
import { Slot, usePathname } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { useWindowDimensions } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { breakpoints } from "../utils/breakpoints";
import { pageNames } from "../utils/pageNames";

export default function Layout() {
  const { width } = useWindowDimensions();
  const pathname = usePathname();

  const showDrawer =
    width < breakpoints.mobile &&
    pathname !== pageNames.login &&
    pathname !== pageNames.register;

  return (
    <>
      {width < breakpoints.mobile ? (
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Drawer
            screenOptions={{
              drawerActiveTintColor: "#4C1FD7",
            }}
          >
            <Drawer.Screen
              name="index"
              options={{
                drawerLabel: "Menu inicial",
                title: "Menu inicial",
                drawerIcon: ({ color, size }) => (
                  <Ionicons name="home" size={size} color={color} />
                ),
              }}
            />
            <Drawer.Screen
              name="login/index"
              options={{
                drawerLabel: "Login",
                title: "Login",
                drawerIcon: ({ color, size }) => (
                  <Ionicons name="log-in" size={size} color={color} />
                ),
              }}
            />
            <Drawer.Screen
              name="register/index"
              options={{
                drawerLabel: "Cadastrar-se",
                title: "Cadastrar-se",
                drawerIcon: ({ color, size }) => (
                  <Ionicons name="person-add" size={size} color={color} />
                ),
              }}
            />
            <Drawer.Screen
              name="components/TopMenu"
              options={{
                drawerItemStyle: {
                  display: "none",
                },
              }}
            />
          </Drawer>
        </GestureHandlerRootView>
      ) : (
        <Slot />
      )}
    </>
  );
}
