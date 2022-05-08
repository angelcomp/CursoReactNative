import {StyleSheet, Image, Dimensions} from "react-native"
import topo from '../../../assets/topo.png'
import Texto from "../../components/Texto"

const width = Dimensions.get('screen').width;

export function Topo() {
    return <>
      <Image style={styles.topo} source={topo}></Image>
      <Texto style={styles.tituloCarrinho}>Carrinho</Texto>
    </>
}

const styles = StyleSheet.create({
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
      lineHeight: 40,
  },
})