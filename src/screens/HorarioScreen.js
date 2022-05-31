import { useNavigation } from '@react-navigation/core'
import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { signOut } from 'firebase/auth'
//import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler'
import { 
  collection, 
  addDoc, 
  orderBy, 
  query, 
  onSnapshot,
  where,
  doc
 } from 'firebase/firestore';
 import { auth, database } from '../../firebase'
import { Button } from 'react-native-paper';
import { async } from '@firebase/util';

const HomeScreen = () => {

  
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')


    const anadirCita = async (e) => {

        try{
            await addDoc(collection(database, "citas"), {
                nombre: nombre,
                email: auth.currentUser.email,
                fecha: fecha
            })

        } catch(e) {
            console

        } finally {
            setNombre('')
            setEmail('')
            setFecha('')
        }
    }
    

  return (
    <ScrollView>

        <View>
            <Text style = {styles.title}>Introduzca la cita que desea reservar:</Text>
            <Text style = {styles.text}>Nombre:</Text>
            <TextInput 
                placeholder = "Nombre"
                value = { nombre }
                onChangeText = { text => setNombre(text) }
                style = { styles.input }
            />

            <Text style = {styles.text}>Email:</Text>
            <TextInput 
                placeholder = {auth.currentUser.email}
                value = { email }
                onChangeText = { text => setEmail(text) }
                style = { styles.input }
                autoCapitalize = { false }
            />

            <Text style = {styles.text}>Fecha y hora:</Text>
            <TextInput 
                placeholder = "Fecha y hora"
                value = { fecha }
                onChangeText = { text => setFecha(text) }
                style = { styles.input }
            />
            
        </View>


        <View style={styles.buttonContainer}>
            <TouchableOpacity 
                onPress={anadirCita}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Añadir Cita</Text>
            </TouchableOpacity>
        </View>


    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 16,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 16,
  },
   button: {
    backgroundColor: '#FF8C11',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
    alignContent: 'center'
  },
  input: {
      backgroundColor: '#C1C1C1',
      borderRadius: 15,
      marginBottom: 10,
      marginTop: 0,
      margin: 16,
      padding: 10,
      alignItems: 'center',
      color: 'white',
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#E8770D',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#E8770D',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})