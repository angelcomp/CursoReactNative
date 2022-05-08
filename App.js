import { StatusBar, StyleSheet, SafeAreaView, View } from 'react-native';
import { Detalhes } from './src/telas/Carrinho/Detalhes';
import { Topo } from './src/telas/Carrinho/Topo';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from "@expo-google-fonts/montserrat"
import Mocks from './src/mocks/carrinho';

export default function App() {

let [fontsLoaded] = useFonts({
  Montserrat_400Regular,
  Montserrat_700Bold
})

if (!fontsLoaded) {
  <View/>
}

  return (
    <SafeAreaView style={styles.container}>
      <Topo {...Mocks.topo}/>
      <Detalhes {...Mocks.detalhes}/>

      <StatusBar/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
