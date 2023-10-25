import { Text, TouchableOpacity, View } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const App = () => {

  const open_camera_handle = async  () => { 

    const result = await launchCamera({
      includeBase64:true

    })
    console.log({result});
  }
  const open_Gallery_handle = async  () => { 

    const result = await launchImageLibrary({
      includeBase64:true

    });
    console.log({result});

  }

  return <View style={{flex:1, justifyContent:'center', alignItems:'center', gap:20}}>


    <TouchableOpacity onPress={open_camera_handle}>
      <Text style={{backgroundColor:'black', fontWeight:'bold', textAlign:'center', color:'white', padding:10}}>
        Open Camera
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={open_Gallery_handle}>
      <Text style={{backgroundColor:'black', fontWeight:'bold', textAlign:'center', color:'white', padding:10}}>
        Open Gallery
      </Text>
    </TouchableOpacity>
    
  </View>

}


export default App