import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image
          source={require("./assets/expo-image.png")}
          style={styles.image}
        />
        <Text style={styles.title}>Workshops</Text>
        <Text style={styles.subtitle}>Expo React Native</Text>
      </View>
      <View style={styles.button}>
        <Button
          title="Sample Button"
          onPress={() => {
            console.log("No i czego klikasz, jak to nic nie robi");
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 25,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "black",
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
    marginBottom: 20,
  },
  button: {
    marginTop: "auto",
  },
});
