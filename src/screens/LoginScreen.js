import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Button, Image, Alert, StatusBar, SafeAreaView } from 'react-native'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { ScrollView } from 'react-native-web'
import { auth } from '../../firebase'


export default function LoginScreen () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  const handleLogin = () => {
    auth
      signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logeado con:', user.email);
      })
      .catch(error => alert(error.message))
  }

  
    /*const onHandleLogin = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
      .then(() => console.log("Login correcto"))
      .catch((err) => Alert.alert("Login incorrecto", err.message));
    }
  }*/

  const handleSignUp = () => {
    auth
      createUserWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registrado con:', user.email);
      })
      .catch(error => alert(error.message))
  }
  


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate("TabNavigator") 
      }
    })

    return unsubscribe
  }, [])





  return (

    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
        <Image
          style={{ width: 250, height: 250, marginBottom: 30 }}
          source={{uri: 'https://firebasestorage.googleapis.com/v0/b/gym-mc-51f29.appspot.com/o/logo.png?alt=media&token=43d87915-2a04-44fa-9702-0382fad682e2'}}
        />

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Contraseña"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Registro</Text>
        </TouchableOpacity>        
      </View>
    </KeyboardAvoidingView>
  )
}

/*

*/


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
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
  buttonOutlineText: {
    color: '#E8770D',
    fontWeight: '700',
    fontSize: 16,
  },
})
