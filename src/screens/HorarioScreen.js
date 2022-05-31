<<<<<<< HEAD
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
=======
import React from 'react';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Button, Image, Alert, StatusBar, SafeAreaView } from 'react-native'

const source = {
  html: `
    <p style='text-align:center;'>
    Hello World!
    </p>

    <div class="calendar">

      <div class="col leftCol">
        <div class="content">
          <h1 class="date">Friday<span>September 12th</span></h1>
          <div class="notes">
            <p>
              <input type="text" value="" placeholder="new note"/>
              <a href="#" title="Add note" class="addNote animate">+</a>
            </p>
            <ul class="noteList">
              <li>Headbutt a lion<a href="#" title="Remove note" class="removeNote animate">x</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col rightCol">
        <div class="content">
          <h2 class="year">2013</h2>
          <ul class="months">
            <li><a href="#" title="Jan" data-value="1">Jan</a></li>
            <li><a href="#" title="Feb" data-value="2">Feb</a></li>
            <li><a href="#" title="Mar" data-value="3">Mar</a></li>
            <li><a href="#" title="Apr" data-value="4">Apr</a></li>
            <li><a href="#" title="May" data-value="5">May</a></li>
            <li><a href="#" title="Jun" data-value="6">Jun</a></li>
            <li><a href="#" title="Jul" data-value="7">Jul</a></li>
            <li><a href="#" title="Aug" data-value="8">Aug</a></li>
            <li><a href="#" title="Sep" data-value="9" class="selected">Sep</a></li>
            <li><a href="#" title="Oct" data-value="10">Oct</a></li>
            <li><a href="#" title="Nov" data-value="11">Nov</a></li>
            <li><a href="#" title="Dec" data-value="12">Dec</a></li>
          </ul>
          <div class="clearfix"></div>
          <ul class="weekday">
            <li><a href="#" title="Mon" data-value="1">Mon</a></li>
            <li><a href="#" title="Tue" data-value="2">Tue</a></li>
            <li><a href="#" title="Wed" data-value="3">Wed</a></li>
            <li><a href="#" title="Thu" data-value="4">Thu</a></li>
            <li><a href="#" title="Fri" data-value="5">Fri</a></li>
            <li><a href="#" title="Say" data-value="6">Sat</a></li>
            <li><a href="#" title="Sun" data-value="7">Sun</a></li>
          </ul>
          <div class="clearfix"></div>
          <ul class="days">
            <script>
              for( var _i = 1; _i <= 31; _i += 1 ){
                var _addClass = '';
                if( _i === 12 ){ _addClass = ' class="selected"'; }
                
                switch( _i ){
                  case 8:
                  case 10:
                  case 27:
                    _addClass = ' class="event"';
                  break;
                }

                document.write( '<li><a href="#" title="'+_i+'" data-value="'+_i+'"'+_addClass+'>'+_i+'</a></li>' );
              }
            </script>
          </ul>
          <div class="clearfix"></div>
        </div>
      </div>

      <div class="clearfix"></div>

    </div>
    
    
    
    `
};

export default function App() {
  const { width } = useWindowDimensions();
  return (
    <RenderHtml
      contentWidth={width}
      source={source}
    />
  );
}

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
  
>>>>>>> 6b65784d893c57aba363bb1be81549723f81e2b1
