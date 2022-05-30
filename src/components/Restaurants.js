import { View, Text, Stylesheet } from "react-native";
import yelp from "../api/yelp";

export default function Restaurants() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Top Restaurants</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 15,
    flex: 1,
  },
  header: {
    fontWeight: "bold",
    fontSize: 19,
    paddingBottom: 10,
    height: 100,
  },
});
