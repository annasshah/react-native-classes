import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export const Signup = () => {
    const [user_data, setUser_data] = useState({})

    const signup_handle = () => {
        console.log('signing up', user_data);
        auth().createUserWithEmailAndPassword(user_data.email, user_data.password)
            .then((res) => {
                const uid = res.user.uid

                const newReference = database().ref(`/users/${uid}`)

                newReference
                    .set({...user_data, user_id:uid})
                    .then(() => console.log('Data updated.')).catch((err) => console.log(err))
                console.log('User account created & signed in!', res)
            })
            .catch(error => {
                console.error(error);
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

            });
        //     auth()
        //   .signOut()
        //   .then(() => console.log('User signed out!'))
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
                    <TextInput onChangeText={(e) => setUser_data({ ...user_data, first_name: e })} style={{ borderWidth: 1, borderColor: 'lightgray', borderRadius: 8, paddingHorizontal: 5 }} placeholder='First Name' />
                    <TextInput onChangeText={(e) => setUser_data({ ...user_data, last_name: e })} style={{ borderWidth: 1, borderColor: 'lightgray', borderRadius: 8, paddingHorizontal: 5 }} placeholder='Last Name' />
                    <TextInput onChangeText={(e) => setUser_data({ ...user_data, email: e })} style={{ borderWidth: 1, borderColor: 'lightgray', borderRadius: 8, paddingHorizontal: 5 }} placeholder='Email' />
                    <TextInput onChangeText={(e) => setUser_data({ ...user_data, password: e })} style={{ borderWidth: 1, borderColor: 'lightgray', borderRadius: 8, paddingHorizontal: 5 }} placeholder='Password' secureTextEntry />
                </View>


                <TouchableOpacity onPress={signup_handle} style={{ backgroundColor: 'black', paddingVertical: 20, borderRadius: 8 }}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}



