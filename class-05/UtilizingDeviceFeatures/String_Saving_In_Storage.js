import { Text, TouchableOpacity, View } from "react-native"
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const data_key = 'data_key'
// const data_key_2 = 'data_key_02'
// const data_key_3 = 'data_key_03'

// const App = () => {

//   const save_data_handle = async () => { 

//     const text = 'you can use JSON.stringify() when saving the data and JSON.parse() when loading the data.'

//     const text_02 = 'In order to store object data, you need to serialize it first. For data that can be serialized to JSON, you can use JSON.stringify()'

//     const text_03 = 'Async Storage can only store string data. '

//    await AsyncStorage.setItem(data_key, text)
//    await AsyncStorage.setItem(data_key_2, text_02)
//    await AsyncStorage.setItem(data_key_3, text_03)
//    console.log('data saved...!');


//   console.log('data', {storage_data});

//   }



//   const get_data_handle = async () => { 

//   const storage_data = await AsyncStorage.getItem(data_key_3)

//   console.log('get data', {storage_data});

//   }

//   const remove_data_handle = async () => { 

//     await AsyncStorage.removeItem(data_key)
    
//     console.log('remve data');
//   }

//   const remove_all_data_handle = async () => { 

//     await AsyncStorage.clear(data_key)
    
//     console.log('remve data');
//   }
//   const available_keys_handle = async () => { 

//     const all_keys = await AsyncStorage.getAllKeys()
    
//     console.log('all keys', {all_keys});
//   }





//   return <View style={{flex:1, justifyContent:'center', alignItems:'center', gap:20}}>


//     <TouchableOpacity onPress={save_data_handle}>
//       <Text style={{backgroundColor:'black', fontWeight:'bold', textAlign:'center', color:'white', padding:10}}>
//         Save Data
//       </Text>
//     </TouchableOpacity>
//     <TouchableOpacity onPress={get_data_handle}>
//       <Text style={{backgroundColor:'black', fontWeight:'bold', textAlign:'center', color:'white', padding:10}}>
//         Get Data
//       </Text>
//     </TouchableOpacity>
//     <TouchableOpacity onPress={remove_data_handle}>
//       <Text style={{backgroundColor:'black', fontWeight:'bold', textAlign:'center', color:'white', padding:10}}>
//         Remove data
//       </Text>
//     </TouchableOpacity>
//     <TouchableOpacity onPress={remove_all_data_handle}>
//       <Text style={{backgroundColor:'black', fontWeight:'bold', textAlign:'center', color:'white', padding:10}}>
//         Clear data
//       </Text>
//     </TouchableOpacity>
//     <TouchableOpacity onPress={available_keys_handle}>
//       <Text style={{backgroundColor:'black', fontWeight:'bold', textAlign:'center', color:'white', padding:10}}>
//        Get Available Keys
//       </Text>
//     </TouchableOpacity>
//   </View>

// }


// export default App