import * as React from 'react';
import * as RN from 'react-native'
import { auth, database } from '../../firebase'

export default function Ejercicio({
    id,
    ejercicio1,
    series1,
    repeticiones1,
    ejercicio2,
    series2,
    repeticiones2,
    ejercicio3,
    series3,
    repeticiones3,
    ejercicio4,
    series4,
    repeticiones4,
    ejercicio5,
    series5,
    repeticiones5,
    ejercicio6,
    series6,
    repeticiones6
}) {
    return(
        <RN.View style={styles.ejercicioContainer}>
            <RN.Text style={styles.ejercicio1}>{ejercicio1}</RN.Text>
            <RN.Text style={styles.series1}>{series1} X {repeticiones1}</RN.Text>
            <RN.Text></RN.Text>

            <RN.Text style={styles.ejercicio1}>{ejercicio2}</RN.Text>
            <RN.Text style={styles.series1}>{series2} X {repeticiones2}</RN.Text>
            <RN.Text></RN.Text>

            <RN.Text style={styles.ejercicio1}>{ejercicio3}</RN.Text>
            <RN.Text style={styles.series1}>{series3} X {repeticiones3}</RN.Text>
            <RN.Text></RN.Text>
            
            <RN.Text style={styles.ejercicio1}>{ejercicio4}</RN.Text>
            <RN.Text style={styles.series1}>{series4} X {repeticiones4}</RN.Text>
            <RN.Text></RN.Text>
            
            <RN.Text style={styles.ejercicio1}>{ejercicio5}</RN.Text>
            <RN.Text style={styles.series1}>{series5} X {repeticiones5}</RN.Text>
            <RN.Text></RN.Text>
            
            <RN.Text style={styles.ejercicio1}>{ejercicio6}</RN.Text>
            <RN.Text style={styles.series1}>{series6} X {repeticiones6}</RN.Text>
            <RN.Text></RN.Text>
        </RN.View>
    )
}

const styles = RN.StyleSheet.create({
    ejercicioContainer: {
        padding: 16,
        backgroundColor: '#fff',
        margin: 16,
        borderRadius: 8,
    },
    ejercicio1: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    series1: {
        fontSize: 25
    },
    repeticiones1: {
        fontSize: 25
    }
})