import { StatusBar, StyleSheet, SafeAreaView } from 'react-native';
import { Detalhes } from './src/telas/Carrinho/Detalhes';
import { Topo } from './src/telas/Carrinho/Topo';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Topo/>
      <Detalhes/>

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
