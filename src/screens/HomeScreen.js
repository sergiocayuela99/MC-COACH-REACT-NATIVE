import { useNavigation } from '@react-navigation/core'
import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { signOut } from 'firebase/auth'
//import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { 
  collection, 
  addDoc, 
  orderBy, 
  query, 
  onSnapshot,
  where
 } from 'firebase/firestore';
 import { auth, database } from '../../firebase'
 import Ejercicio from '../components/Ejercicio';

const HomeScreen = () => {

  const [ejercicios, setEjercicios] = React.useState ([]);

  React.useEffect(() => {
    const collectionRef = collection(database, 'entrenamientos');
    const q = query(collectionRef, where("emailCliente", "==", auth.currentUser.email))


    const unsuscribe = onSnapshot(q, querySnapshot => {
      setEjercicios(
        querySnapshot.docs.map(doc => ({
          id: doc.id,
          ejercicio1: doc.data().ejercicio1,
          series1: doc.data().series1,
          repeticiones1: doc.data().repeticiones1,

          ejercicio2: doc.data().ejercicio2,
          series2: doc.data().series2,
          repeticiones2: doc.data().repeticiones2,

          ejercicio3: doc.data().ejercicio3,
          series3: doc.data().series3,
          repeticiones3: doc.data().repeticiones3,

          ejercicio4: doc.data().ejercicio4,
          series4: doc.data().series4,
          repeticiones4: doc.data().repeticiones4,

          ejercicio5: doc.data().ejercicio5,
          series5: doc.data().series5,
          repeticiones5: doc.data().repeticiones5,

          ejercicio6: doc.data().ejercicio6,
          series6: doc.data().series6,
          repeticiones6: doc.data().repeticiones6,
        })
        )
      )})
      return unsuscribe;
  }, [])


  return (
    <ScrollView>
    <View style = {styles.container}>

    <Text style = {styles.title}> Bienvenido: {auth.currentUser?.email} </Text>


    {ejercicios.map(ejercicio => <Ejercicio key={ejercicio.id} {...ejercicio}/>)}


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
    fontSize: 20,
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
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})
