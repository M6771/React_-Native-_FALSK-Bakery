import { Image } from "expo-image";
import { ScrollView, StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { products } from "@/data/products";

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

        <ThemedView style={styles.productsContainer}>
          {products.map((product, index) => (
            <ThemedView key={index} style={styles.product}>
              <Image
                source={product.image}
                style={styles.productImage}
                contentFit="contain"
              />
              <ThemedText style={styles.productName}>{product.name}</ThemedText>
              <ThemedText style={styles.productPrice}>
                ${product.price.toFixed(2)}
              </ThemedText>
            </ThemedView>
          ))}
        </ThemedView>
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
  productsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 30,
    width: "100%",
  },
  product: {
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 20,
    minWidth: 150,
  },
  productImage: {
    width: 120,
    height: 120,
    borderRadius: 15,
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
    color: "#8B4513",
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2E7D32",
  },
});
