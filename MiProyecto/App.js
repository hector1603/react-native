import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const despedirse = () => {
    Alert.alert("Mensaje", "Adios, me voy.")
  }

  return (
    <View style={styles.container}>
      <Text>Hector Ajumado M.</Text>
      <StatusBar style="auto" />
      <Button
        title="Saludar"
        onPress={() => {
          Alert.alert("Mensaje", "Hola buenos días...")
        }}
      />

      <Button
        title="Despedirse"
        onPress={despedirse}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
