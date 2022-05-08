
import { StyleSheet, View, Image } from "react-native"
import Texto from "../../components/Texto"

import logoVendedor from '../../../assets/logo.png'

export function Detalhes() {
    return <>
        <Texto style={styles.detalhes}>Detalhes do Carrinho</Texto>
        <Texto style={styles.titulo}>Kit IoT</Texto>
        <View style={styles.vendedor}>
            <Image style={styles.logoVendedor} source={logoVendedor} />
            <Texto style={styles.nomeVendedor}>Nuvem's Shopping</Texto>
        </View>
        <Texto style={styles.desc}>Um kit que revoluciona você.</Texto>
        <Texto style={styles.preco}>R$ 99,00</Texto>
    </>
}

const styles = StyleSheet.create({
  detalhes:{
    color: "#000000",
    fontWeight:"bold",
    fontSize:25,
    lineHeight: 35,
    textAlign:"center",
    fontFamily: 'Montserrat_700Bold'
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