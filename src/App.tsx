import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.appContainer}>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Your goal" style={styles.textInput} />
          <Button title="Add goal" />
        </View>
        <View></View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    padding: 16,
  },
  inputContainer: {
    flexDirection: "row",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "gray",
    flex: 1,
    marginEnd: 16,
  },
});

export default App;
