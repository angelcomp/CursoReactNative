
import { Image, View, StyleSheet, Dimensions } from "react-native";
import Texto from "../../components/Texto";

const width = Dimensions.get('screen').width;

export default function Copyright( {copyright, imagem} ) {
    return <>
        <Image style={styles.bg} source={imagem}></Image>
        <Texto style={styles.titulo}> {copyright} </Texto>
    </>
}

const styles = StyleSheet.create({
    titulo:{
        position:"absolute",
        paddingVertical: 20,
        textAlign: "center",
        width: "100%",
        fontSize: 11,
        fontWeight: "bold",
    },
    bg:{
        width:"100%",
        height: 80
    },
})
