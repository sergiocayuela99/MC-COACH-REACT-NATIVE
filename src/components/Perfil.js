import * as React from 'react';
import * as RN from 'react-native'
import { auth, database } from '../../firebase'

import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Perfil({
    id,
    nombreusuario,
    nombreapellido,
    email,
    telefono
}) {
    return(
        <RN.View style={styles.ejercicioContainer}>
            
            <RN.Text style={styles.titulo}><FontAwesome5 name="user" size={24} color="black" /> Nombre usuario: </RN.Text>
            <RN.Text style={styles.datos}>{nombreusuario}</RN.Text>
            <RN.Text></RN.Text>

            <RN.Text style={styles.titulo}><FontAwesome5 name="user-cog" size={24} color="black" /> Nombre y Apellidos: </RN.Text>
            <RN.Text style={styles.datos}>{nombreapellido}</RN.Text>
            <RN.Text></RN.Text>

            <RN.Text style={styles.titulo}><MaterialIcons name="email" size={24} color="black" /> Email: </RN.Text>
            <RN.Text style={styles.datos}>{email}</RN.Text>
            <RN.Text></RN.Text>

            <RN.Text style={styles.titulo}><Feather name="phone" size={24} color="black" /> Teléfono: </RN.Text>
            <RN.Text style={styles.datos}>{telefono}</RN.Text>
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
    datos: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    titulo: {
        fontSize: 22
    },
    repeticiones1: {
        fontSize: 25
    }
})