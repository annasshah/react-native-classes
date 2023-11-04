import React, { useEffect, useState } from 'react'
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';

export const For_Database = () => {

    const [user_data, setUser_data] = useState(null)

    const submit_handle = () => {
        const newReference = database().ref('/users').push()

        console.log('Auto generated key: ', newReference.key);

        newReference
            .set({
                age: 32,
            })
            .then(() => console.log('Data updated.')).catch((err) => console.log(err))
    }


    const test_handle = () => {
        // database().ref('/users')
        //     .update({
        //         age: 36
        //     })

        database().ref('/').remove();
    }



    const Logout_handle = () => {
        auth().signOut(() => console.log('signed out'))
    }


    useEffect(() => {
        auth().onAuthStateChanged((user) => {
            console.log(user)
            if (user) {
                const user_id = user.uid

                database()
                    .ref(`/users/${user_id}`)
                    .once('value')
                    .then(snapshot => {
                        const data = snapshot.val()
                        setUser_data(data)
                        console.log('User data: ', snapshot.val());
                    })
            }
        })
    }, [])



    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: '100%', paddingHorizontal: 20, gap: 20 }}>
                {user_data ? <View>
                    <Text>
                        First Name {user_data.first_name}
                    </Text>
                    <Text>
                        Last Name {user_data.last_name}
                    </Text>
                    <Text>
                        Email {user_data.email}
                    </Text>
                    <Text>
                        Password {user_data.password}
                    </Text>
                </View> : <ActivityIndicator />}
            </View>

            <View style={{ width: '100%', paddingHorizontal: 20, gap:20 }}>
                <TouchableOpacity onPress={Logout_handle} style={{ backgroundColor: 'black', paddingVertical: 20, borderRadius: 8 }}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>
                        Logout
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={test_handle} style={{ backgroundColor: 'black', paddingVertical: 20, borderRadius: 8 }}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>
                        Test Handle
                    </Text>
                </TouchableOpacity>
            </View>
            {/* <View style={{ width: '100%', paddingHorizontal: 20, gap: 20 }}>

                <TouchableOpacity onPress={submit_handle} style={{ backgroundColor: 'black', paddingVertical: 20, borderRadius: 8 }}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>
                        Submit data
                    </Text> 
                </TouchableOpacity>
            </View> */}

        </View>
    )
}

