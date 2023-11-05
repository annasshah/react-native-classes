import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './screens/Home';
import { Getting_Started } from './screens/Getting_Started';
import { Login } from './screens/Login';
import { Signup } from './screens/Signup';
import { About } from './screens/About';
import { View, Text, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { axios_instance } from './config/axios_instance';

// import { Component } from 'react';


// const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const App = () => {




  








  return <NavigationContainer>
    {/* <Stack.Navigator
    >
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          // title: 'Getting Started',
          headerStyle: {
            backgroundColor: 'green',
          },
          headerTitleStyle: {
            color: 'white',

          },
          headerTitle: (props) => <View>
            <Text style={{fontWeight:'bold', fontSize:25, color:'white', textAlign:'center'}}>New Header</Text>
          </View> 
        }}


        name="Getting-Started" component={Getting_Started} />


      <Stack.Screen

        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          title: 'Login',
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTitleStyle: {
            color: 'white',
          }
        }}
        name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator> */}



    <Tab.Navigator



      screenOptions={({ route }) => ({
        // headerShown:true,

        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarActiveBackgroundColor: 'green'
      })}

    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => {
            console.log({ color });
            return <AntDesign name='home' color={color} size={30} />
          },
          // headerShown:false
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#ffff'
          },
          headerStyle: {
            backgroundColor: 'green'
          }
        }}
        name="Home" component={Getting_Started} />
      <Tab.Screen

        options={{
          tabBarIcon: ({ color }) => {
            console.log({ color });
            return <Ionicons name='person' color={color} size={30} />
          },
          // headerShown:false
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#ffff'
          },
          headerStyle: {
            backgroundColor: 'green'
          }
        }}



        name="About" component={About} />
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Signup" component={Signup} />
    </Tab.Navigator>
  </NavigationContainer>
}


export default App



{/* <BrowserRouter>
<Routes>
  <Route to='' comp={<Component />} />
</Routes>
</BrowserRouter> */}