import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import image_01 from './assets/imge_02.png'
import { styles } from "./all_styles";
import { useState } from "react";

const App = () => {
  const [username, setUsername] = useState('')

  const [user_input, setUser_input] = useState('')


  const click_handle = () => {
    setUsername(user_input)
  }


  return <>
  {
    username ?
   <>
    {/* Home Component */}
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 10 }}>
      <Text style={{ color: 'black', fontSize: 25, }}>
        Hello
      </Text>
      <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold' }}>
        {username}
      </Text>
    </View>
   </> : 
    <>
    {/* Getting Started Component */}
    <View style={styles.container_main}>
      <View style={styles.content_container}>
        <Text style={[styles.heading_text, { marginBottom: 20 }]}>
          Getting Started
        </Text>

        <View>

          <Image source={image_01} style={styles.image_style} />
        </View>

        <TextInput
        onChangeText={setUser_input}
        
        style={styles.text_input} placeholder="Enter your name" />
        <TouchableOpacity onPress={click_handle} style={styles.button}>
          <Text style={styles.button_text}>Let's Start</Text>
        </TouchableOpacity>
      </View>
    </View>
    </>
  }
  </>

}


export default App







{/* <View style={{borderWidth:1, borderColor:'black', width:200, height:100,}}>

<Image 

source={image_01}
resizeMode="cover"
style={{width:200, height:100, }}


/>

</View> */}