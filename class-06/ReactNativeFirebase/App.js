import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const App = () => {

  const signup_handle = () => {
    console.log('signing up');
    // auth().signInWithEmailAndPassword('john@example.com', 'Super12332!')
    //   .then(() => {
    //     console.log('User account created & signed in!')
    //   })
    //   .catch(error => {
    //     console.error(error);
    //     if (error.code === 'auth/email-already-in-use') {
    //       console.log('That email address is already in use!');
    //     }

    //     if (error.code === 'auth/invalid-email') {
    //       console.log('That email address is invalid!');
    //     }

    //   });
    // auth()
  // .signOut()
  // .then(() => console.log('User signed out!'))
  }



  const login_handle = () => {
    // dispatch(set_user_auth({auth:true, data:null}))
    const newReference = database().ref('/users')

    console.log('Auto generated key: ', newReference.key);

    newReference
      .set({
        age: 32,
      })
      .then(() => console.log('Data updated.'));


    // const onChildAdd = database()
    // .ref('/users')
    // .on('value', snapshot => {
    //   console.log('A new node has been added', snapshot.val());
    // });

    // return () => database().ref('/users').off('child_added', onChildAdd);


    // const onValueChange = database()
    //   .ref(`/users`)
    //   .on('value', snapshot => {
    //     console.log('User data: ', snapshot.val());
    //   });

    // // Stop listening for updates when no longer required
    // return () => database().ref(`/users/${userId}`).off('value', onValueChange);
  }







  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ width: '100%', paddingHorizontal: 20, gap: 20 }}>
        <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold' }}>
          Sign UP
        </Text>


        <View style={{ gap: 20 }}>
          <TextInput style={{ borderWidth: 1, borderColor: 'lightgray', borderRadius: 8, paddingHorizontal: 5 }} placeholder='First Name' />
          <TextInput style={{ borderWidth: 1, borderColor: 'lightgray', borderRadius: 8, paddingHorizontal: 5 }} placeholder='Last Name' />
          <TextInput style={{ borderWidth: 1, borderColor: 'lightgray', borderRadius: 8, paddingHorizontal: 5 }} placeholder='Email' />
          <TextInput style={{ borderWidth: 1, borderColor: 'lightgray', borderRadius: 8, paddingHorizontal: 5 }} placeholder='Password' secureTextEntry />
        </View>


        <TouchableOpacity onPress={login_handle} style={{ backgroundColor: 'black', paddingVertical: 20, borderRadius: 8 }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default App

const styles = StyleSheet.create({})