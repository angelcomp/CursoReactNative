import { StatusBar, StyleSheet, SafeAreaView, View, ScrollView, FlatList } from 'react-native';
import { Detalhes } from './src/telas/Carrinho/Detalhes';
import { Topo } from './src/telas/Carrinho/Topo';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from "@expo-google-fonts/montserrat"
import Mocks from './src/mocks/carrinho';
import MockFooter from './src/mocks/footer';
import Item from './src/telas/Carrinho/Item';
import Texto from "./src/components/Texto";
import Footer from './src/telas/Carrinho/Footer';
import Copyright from './src/telas/Carrinho/Copyright';

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
      
      <FlatList
        data={Mocks.itens.lista}
        renderItem={Item}
        keyExtractor={ ({nome}) => nome }
        ListHeaderComponent={
          () => {
            return <>
              <Topo {...Mocks.topo}/>
              <Detalhes {...Mocks.detalhes}/>
              <Texto style={styles.titulo}>
                  { Mocks.itens.titulo }
              </Texto>
            </>
          }
        }
        ListFooterComponent = {
          () => { 
            return <FlatList
            data={MockFooter.itens.lista}
            renderItem={Footer}
            keyExtractor={ ({cidade}) => cidade }
            ListHeaderComponent={
              () => {
                return <>
                  <Copyright {...MockFooter.detalhes}/>
                </>
              }
            }
            />
          }
        }
      />
      <StatusBar/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titulo:{
    color: '#ffa500',
    marginVertical: 30,
    fontWeight: 'bold',
    fontSize: 25
},
});
