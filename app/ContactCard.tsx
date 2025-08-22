import { FontAwesome } from "@expo/vector-icons";
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  Linking,
  Platform,
  useWindowDimensions,
} from "react-native";

const handleContact = (url: string) => {
  if (Platform.OS === "web") {
    window.open(url, "_blank"); // abre nova aba no navegador
  } else {
    Linking.openURL(url); // abre navegador externo ou app de e-mail no celular
  }
};

type ContactCardProps = {
  iconPerfilUri: string;
  name: string;
  description: string;
  linkedinUrl: string;
  githubUrl: string;
};

export default function ContactCard({
  iconPerfilUri,
  name,
  description,
  linkedinUrl,
  githubUrl,
}: ContactCardProps) {
  const { width } = useWindowDimensions();
  const contactBaseIconSize = 40;

  const styles = StyleSheet.create({
    contactCard: {
      flexDirection: "row",
      flex: 1,
      minWidth: 490,
      borderRadius: 20,
      borderColor: "#aaa",
      boxShadow: "0px 10px 20px rgba(48, 72, 206, 0.3)",
    },
    contactCardInnerContent: {
      flex: 1,
      alignItems: "center",
      justifyContent: "space-between",
    },
    contactRow: {
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      gap: 10,
      justifyContent: "space-evenly",
    },
    ourTeamImage: {
      width: "40%",
      height: 300,
      borderRadius: 20,
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0,
    },
    dataContainer: {
      flex: 1,
      height: "100%",
      alignSelf: "center",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    name: {
      textAlign: "center",
      fontSize: 40,
      fontWeight: 600,
    },
    description: {
      fontSize: 16,
      textAlign: "center",
    },
  });

  return (
    <View style={styles.contactCard}>
      <Image
        source={{
          uri: iconPerfilUri,
        }}
        style={styles.ourTeamImage}
      />
      <View style={styles.dataContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>

        <View style={styles.contactRow}>
          <TouchableOpacity onPress={() => handleContact(linkedinUrl)}>
            <FontAwesome
              name="linkedin-square"
              size={contactBaseIconSize}
              color="black"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleContact(githubUrl)}>
            <FontAwesome
              name="github-square"
              size={contactBaseIconSize}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
