import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import CategoryItem from "./src/components/CategoryItem";
import Header from "./src/components/Header";
import Search from "./src/components/Search";

export default function App() {
  const [term, setTerm] = useState("Burger");
  const commonCategories = [
    {
      name: "Burger",
      imageUrl: require("./assets/images/burger.png"),
    },
    {
      name: "Cake",
      imageUrl: require("./assets/images/cake.png"),
    },
    {
      name: "Pasta",
      imageUrl: require("./assets/images/pasta.png"),
    },
    {
      name: "Pizza",
      imageUrl: require("./assets/images/pizza.png"),
    },
    {
      name: "Drinks",
      imageUrl: require("./assets/images/smoothies.png"),
    },
    {
      name: "Steak",
      imageUrl: require("./assets/images/steak.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <Search setTerm={setTerm} />
      <FlatList
        data={commonCategories}
        renderItem={({ item, index }) => {
          return (
            <CategoryItem
              name={item.name}
              imageUrl={item.imageUrl}
              index={index}
              active={item.name === term}
              handlePress={() => setTerm(item.name)}
            />
          );
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(category) => category.name}
      />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  /* container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }, */
});
