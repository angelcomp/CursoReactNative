import Texto from "../../components/Texto";
import { View, StyleSheet } from "react-native";
import react from "react";

export default function Footer( {item:{endereco, cidade}} ) {
    return <View style={styles.v}>
        <Texto style={styles.endereco}> {endereco} </Texto>
        <Texto style={styles.cidade} > {cidade} </Texto>
    </View>
}

const styles = StyleSheet.create({
    endereco: {
        textAlign: "center",
        fontSize: 11,
        fontWeight: "bold",
    },
    cidade: {
        textAlign: "center",
    },
    v:{
        margin: 10
    }
})