import { StatusBar, StyleSheet, Text, SafeAreaView, View, Image, Dimensions} from 'react-native';
import topo from './assets/topo.png'
import logoVendedor from './assets/logo.png'

const width = Dimensions.get('screen').width;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.topo} source={topo}></Image>
      <Text style={styles.tituloCarrinho}>Carrinho</Text>

      <Text style={styles.detalhes}>Detalhes do Carrinho</Text>
      <Text style={styles.titulo}>Kit IoT</Text>
      <View style={styles.vendedor}>
        <Image style={styles.logoVendedor} source={logoVendedor} />
        <Text style={styles.nomeVendedor}>Nuvem's Shopping</Text>
      </View>
      <Text style={styles.desc}>Um kit que revoluciona você.</Text>
      <Text style={styles.preco}>R$ 99,00</Text>

      <StatusBar/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topo: {
    width:"100%",
    height: 582/772 * width
  },
  tituloCarrinho: {
      position:"absolute",
      paddingVertical: 60,
      textAlign: "center",
      width: "100%",
      fontSize: 20,
      fontWeight: "bold",
      lineHeight: 40
  },
  detalhes:{
    color: "#000000",
    fontWeight:"bold",
    fontSize:25,
    lineHeight: 35,
    textAlign:"center"
  },
  titulo:{
    color: "#ffa500",
    fontWeight:"bold",
    fontSize:25,
    lineHeight: 35,
    textAlign: "center"
  },
  vendedor: {
    flexDirection: "row",
    padding: 10,
  },
  logoVendedor: {
    width: 32,
    height: 32,
  },
  nomeVendedor: {
    color: "#a3a3a3",
    fontSize: 18,
    lineHeight: 26,
    marginLeft: 15
  },
  desc: {
    padding: 10,
    fontSize: 16
  }, 
  preco: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "right",
    paddingHorizontal:10
  }, 
});
