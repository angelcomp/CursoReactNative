
import { StyleSheet, Text, View, Image } from "react-native"

import logoVendedor from '../../../assets/logo.png'

export function Detalhes() {
    return <>
        <Text style={styles.detalhes}>Detalhes do Carrinho</Text>
        <Text style={styles.titulo}>Kit IoT</Text>
        <View style={styles.vendedor}>
            <Image style={styles.logoVendedor} source={logoVendedor} />
            <Text style={styles.nomeVendedor}>Nuvem's Shopping</Text>
        </View>
        <Text style={styles.desc}>Um kit que revoluciona você.</Text>
        <Text style={styles.preco}>R$ 99,00</Text>
    </>
}

const styles = StyleSheet.create({
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
})