import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';


export const Login = () => {
    const [user_data, setUser_data] = useState({})


    const login_handle = () => {

        // auth().onAuthStateChanged((res)=> {
        //     console.log({res});
        // })
        // console.log('signing up', user_data);
        auth().signInWithEmailAndPassword(user_data.email, user_data.password)
            .then(() => {
                console.log('Logged in successfully!')
            })
            .catch(error => {
                console.error(error);
                // if (error.code === 'auth/email-already-in-use') {
                //     console.log('That email address is already in use!');
                // }

                // if (error.code === 'auth/invalid-email') {
                //     console.log('That email address is invalid!');
                // }

            });
        //     auth()
        //   .signOut()
        //   .then(() => console.log('User signed out!'))
    }






    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: '100%', paddingHorizontal: 20, gap: 20 }}>
                <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold' }}>
                    Login
                </Text>


                <View style={{ gap: 20 }}>
                    <TextInput onChangeText={(e) => setUser_data({ ...user_data, email: e })} style={{ borderWidth: 1, borderColor: 'lightgray', borderRadius: 8, paddingHorizontal: 5 }} placeholder='Email' />
                    <TextInput onChangeText={(e) => setUser_data({ ...user_data, password: e })} style={{ borderWidth: 1, borderColor: 'lightgray', borderRadius: 8, paddingHorizontal: 5 }} placeholder='Password' secureTextEntry />
                </View>


                <TouchableOpacity onPress={login_handle} style={{ backgroundColor: 'black', paddingVertical: 20, borderRadius: 8 }}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}



