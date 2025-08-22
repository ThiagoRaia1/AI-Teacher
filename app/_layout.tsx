import { Ionicons } from "@expo/vector-icons";
import { Slot, usePathname } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { Platform, useWindowDimensions } from "react-native";
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
      main: {
        pathname: "(pages)/index",
        drawerLabelAndTitle: "Pages",
      },
      mainMenu: {
        pathname: "(pages)/mainMenu",
        drawerLabelAndTitle: "Menu Principal",
      },
      roadmap: {
        pathname: "(pages)/roadmap/index",
        drawerLabelAndTitle: "Roadmap",
      },
      meusRoadmaps: {
        pathname: "(pages)/meusRoadmaps/index",
        drawerLabelAndTitle: "Meus Roadmaps",
      },
    },
    login: {
      pathname: "auth/login",
      drawerLabelAndTitle: "Login",
    },
    logout: {
      pathname: "auth/logout",
      drawerLabelAndTitle: "Logout",
    },
    register: {
      pathname: "auth/register",
      drawerLabelAndTitle: "Cadastrar-se",
    },
  };

  // Array para não exibir os itens definidos no drawer. Componentes devem ser adicionados aqui.
  const ignorableComponents = [
    "ContactCard",
    "components/TopMenu",
    "components/Carregando",
  ];

  // Se for web, o drawer não é renderizado
  // e exibe o menu em components/TopMenu no lugar
  if (width < 768) {
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
              adicionado nesse array não aparecerá no drawer */}
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

              <Drawer.Screen
                name={pathnames.logout.pathname}
                options={{
                  drawerItemStyle: {
                    display: "none",
                  },
                }}
              />

              <Drawer.Screen
                name={pathnames.pages.main.pathname}
                options={{
                  drawerItemStyle: {
                    display: "none",
                  },
                }}
              />

              <Drawer.Screen
                name={pathnames.pages.roadmap.pathname}
                options={{
                  drawerItemStyle: {
                    display: "none",
                  },
                }}
              />

              <Drawer.Screen
                name={pathnames.pages.meusRoadmaps.pathname}
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
                name={pathnames.logout.pathname}
                options={{
                  drawerLabel: pathnames.logout.drawerLabelAndTitle,
                  title: pathnames.logout.drawerLabelAndTitle,
                  drawerIcon: ({ color, size }) => (
                    <Ionicons name="log-out" size={size} color={color} />
                  ),
                }}
              />

              {/* Percorre o array ignorableComponents, todo pathname que for 
              adicionado nesse array não aparecerá no drawer */}
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
                name={pathnames.main.pathname}
                options={{
                  drawerItemStyle: {
                    display: "none",
                  },
                }}
              />

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
