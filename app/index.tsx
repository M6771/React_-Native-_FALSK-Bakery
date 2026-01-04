import { Image } from "expo-image";
import { ScrollView, StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedView style={styles.content}>
        <ThemedText type="title" style={styles.title}>
          FALSK Bakery
        </ThemedText>

        <ThemedText style={styles.description}>
          Welcome to FALSK Bakery, where tradition meets innovation. We bake
          fresh, artisanal breads and pastries daily using the finest
          ingredients. Experience the warmth of homemade goodness in every bite.
        </ThemedText>

        <Image
          source={require("@/assets/images/icon.png")}
          style={styles.image}
          contentFit="contain"
        />
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  content: {
    width: "100%",
    maxWidth: 600,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#8B4513",
  },
  description: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: "center",
    marginBottom: 30,
    paddingHorizontal: 10,
    color: "#555",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 20,
    marginTop: 20,
  },
});
