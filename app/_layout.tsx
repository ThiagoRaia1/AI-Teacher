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

  const pathnames = {
    main: {
      pathname: "index",
      drawerLabelAndTitle: "Menu Inicial",
    },
    pages: {
      mainMenu: {
        pathname: "pages/mainMenu/index",
        drawerLabelAndTitle: "Menu Principal",
      },
    },
    login: {
      pathname: "login/index",
      drawerLabelAndTitle: "Login",
    },
    register: {
      pathname: "register/index",
      drawerLabelAndTitle: "Cadastrar-se",
    },
  };

  // Array para não exibir os itens definidos no drawer. Componentes devem ser adicionados aqui.
  const ignorableComponents = ["ContactCard", "components/TopMenu"];

  // Se a largura for maior que 768px, o drawer não é renderizado
  // e exibe o menu em components/TopMenu no lugar
  if (width < breakpoints.mobile) {
    switch (pathname) {
      case pageNames.main:
      case pageNames.login:
      case pageNames.register: {
        return (
          <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
              screenOptions={{
                drawerActiveTintColor: "#4C1FD7",
              }}
            >
              <Drawer.Screen
                name={pathnames.main.pathname}
                options={{
                  drawerLabel: pathnames.main.drawerLabelAndTitle,
                  title: pathnames.main.drawerLabelAndTitle,
                  drawerIcon: ({ color, size }) => (
                    <Ionicons name="home" size={size} color={color} />
                  ),
                }}
              />
              <Drawer.Screen
                name={pathnames.login.pathname}
                options={{
                  drawerLabel: pathnames.login.drawerLabelAndTitle,
                  title: pathnames.login.drawerLabelAndTitle,
                  drawerIcon: ({ color, size }) => (
                    <Ionicons name="log-in" size={size} color={color} />
                  ),
                }}
              />
              <Drawer.Screen
                name={pathnames.register.pathname}
                options={{
                  drawerLabel: pathnames.register.drawerLabelAndTitle,
                  title: pathnames.register.drawerLabelAndTitle,
                  drawerIcon: ({ color, size }) => (
                    <Ionicons name="person-add" size={size} color={color} />
                  ),
                }}
              />

              {/* Nao aparecem no drawer */}

              {/* Percorre o array ignorableComponents, todo pathname que for 
              adicionado nesse array não aparecerá em nenhum drawer */}
              {ignorableComponents.map((componentName) => (
                <Drawer.Screen
                  key={componentName}
                  name={componentName}
                  options={{
                    drawerItemStyle: { display: "none" },
                  }}
                />
              ))}

              <Drawer.Screen
                name={pathnames.pages.mainMenu.pathname}
                options={{
                  drawerItemStyle: {
                    display: "none",
                  },
                }}
              />
            </Drawer>
          </GestureHandlerRootView>
        );
      }
      case pageNames.pages.mainMenu: {
        return (
          <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
              screenOptions={{
                drawerActiveTintColor: "#4C1FD7",
              }}
            >
              <Drawer.Screen
                name={pathnames.pages.mainMenu.pathname}
                options={{
                  drawerLabel: pathnames.pages.mainMenu.drawerLabelAndTitle,
                  title: pathnames.pages.mainMenu.drawerLabelAndTitle,
                  drawerIcon: ({ color, size }) => (
                    <Ionicons name="home" size={size} color={color} />
                  ),
                }}
              />

              <Drawer.Screen
                name={pathnames.main.pathname}
                options={{
                  drawerLabel: "Logout",
                  title: "Logout",
                  drawerIcon: ({ color, size }) => (
                    <Ionicons name="log-out" size={size} color={color} />
                  ),
                }}
              />

              {/* Percorre o array ignorableComponents, todo pathname que for 
              adicionado nesse array não aparecerá em nenhum drawer */}
              {ignorableComponents.map((componentName) => (
                <Drawer.Screen
                  key={componentName}
                  name={componentName}
                  options={{
                    drawerItemStyle: { display: "none" },
                  }}
                />
              ))}

              <Drawer.Screen
                name={pathnames.login.pathname}
                options={{
                  drawerItemStyle: {
                    display: "none",
                  },
                }}
              />

              <Drawer.Screen
                name={pathnames.register.pathname}
                options={{
                  drawerItemStyle: {
                    display: "none",
                  },
                }}
              />
            </Drawer>
          </GestureHandlerRootView>
        );
      }
      default:
        return (
          <>
            {console.log("Página não encontrada")}
            <Slot />;
          </>
        );
    }
  } else {
    return <Slot />;
  }
}
