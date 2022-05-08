import react from "react";
import { Image, View, StyleSheet } from "react-native";
import Texto from "../../components/Texto";

export default function Item( {item:{nome, imagem}}) {
    return <>
        <View style={styles.item} key={nome}>
            <Texto style={styles.nome}> {nome} </Texto>
            <Image style={styles.imagem} source={ imagem }/>
        </View> 
    </>
}

const styles = StyleSheet.create({
    item:{
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ececec',
        paddingVertical: 15,
        alignItems: 'center'
    },
    imagem:{
        width: 80,
        height: 80
    },
    nome:{
        
    },
})