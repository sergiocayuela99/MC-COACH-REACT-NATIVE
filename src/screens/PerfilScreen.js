import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'

import { signOut } from 'firebase/auth'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { async } from '@firebase/util'
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
 import Perfil from '../components/Perfil';

const HorarioScreen = () => {

    const navigation = useNavigation()
    
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        if (!fontsLoaded) {
            loadFonts();
        }
    });

    const loadFonts = async () => {
        await Font.loadAsync({
            'roboto-bold': require('../../assets/fonts/Roboto-Bold.ttf'),
        });

        setFontsLoaded(true);
    }

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("LoginScreen")
      })
      .catch(error => alert(error.message))
  };


  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{
            marginRight: 10
          }}
          onPress={handleSignOut}
        >
          <MaterialCommunityIcons name="logout" size={26} color="#FFFFFF" style={{marginRight: 10}}/>
        </TouchableOpacity>
      )
    });
  }, [navigation]);



  const [perfiles, setPerfiles] = React.useState ([]);

  React.useEffect(() => {
    const collectionRef = collection(database, 'users');
    const q = query(collectionRef, where("email", "==", auth.currentUser.email))


    const unsuscribe = onSnapshot(q, querySnapshot => {
      setPerfiles(
        querySnapshot.docs.map(doc => ({
          id: doc.id,
          nombreusuario: doc.data().nombreusuario,
          nombreapellido: doc.data().nombreapellido,
          email: doc.data().email,
          telefono: doc.data().telefono,
          
        })
        )
      )})
      return unsuscribe;
  }, [])
  


  return (
    <ScrollView>
      <View style={styles.container}>

        <TouchableOpacity 
            style={{ marginRight: 10 }}
            onPress={handleSignOut}>
        </TouchableOpacity>

        <View>
        {perfiles.map(perfil => <Perfil key={perfil.id} {...perfil}/>)}
        </View>

        <Image style={styles.imagen}
        source={{uri: 'https://firebasestorage.googleapis.com/v0/b/gym-mc-51f29.appspot.com/o/logo.png?alt=media&token=43d87915-2a04-44fa-9702-0382fad682e2'}}
        />

      </View>

    </ScrollView>
  )
}

export default HorarioScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      //alignItems: 'center',
    },
    imagen: {
      flex: 1,
      justifyContent: 'center',
      alignSelf: 'center',
      width: 250, 
      height: 250, 
      marginBottom: 30, 
      marginTop: 10
    },
    header: {
        fontFamily: 'roboto-Bold',
        fontSize: 50,
        fontWeight: 'bold'
      },
    body: {
        fontSize: 80
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
  