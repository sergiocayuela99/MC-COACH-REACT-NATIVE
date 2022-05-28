import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { auth } from '../../firebase'
import { signOut } from 'firebase/auth'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { async } from '@firebase/util'

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

  return (
    <View style={styles.container}>

    <TouchableOpacity 
        style={{ marginRight: 10 }}
        onPress={handleSignOut}>
    </TouchableOpacity>

        <View style={styles.header}>
            <Text>Alguna información relevante de su perfil:</Text>
        </View>

        <View style={styles.body}>
            <Text>Email: {auth.currentUser?.email} </Text>
        </View>

        <Image
            style={{ width: 250, height: 250, marginBottom: 30, marginTop: 30 }}
            source={{uri: 'https://firebasestorage.googleapis.com/v0/b/gym-mc-51f29.appspot.com/o/logo.png?alt=media&token=43d87915-2a04-44fa-9702-0382fad682e2'}}
            />
  </View>
  )
}

export default HorarioScreen

const styles = StyleSheet.create({
    container: {
      fontFamily: 'roboto-Bold',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
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
  