import react from "react";
import { Image, View, StyleSheet } from "react-native";
import { borderBottomColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import Texto from "../../components/Texto";

export default function Itens({titulo, lista}) {
    return <>
        <Texto style={styles.titulo}>
            { titulo }
        </Texto>
        {
            lista.map(({nome, imagem}) => {
                return <View style={styles.item} key={nome}>
                    <Texto style={styles.nome}> {nome} </Texto>
                    <Image style={styles.imagem} source={ imagem }/>
                </View>
            })
        }
    </>
}

const styles = StyleSheet.create({
    titulo:{
        color: '#ffa500',
        marginVertical: 30,
        fontWeight: 'bold',
        fontSize: 25
    },
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