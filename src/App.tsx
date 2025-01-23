import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const vegetable = "Potatoes";
const types = ["russet", "red", "white", "yellow"];

const App = () => {
  return (
    <View style={styles.container}>
      <Text>
        Hello {vegetable} with {types.length} types:{" "}
        {types.map((type, index) =>
          index != types.length - 1 ? type + ", " : "and " + type + "."
        )}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
});

export default App;
