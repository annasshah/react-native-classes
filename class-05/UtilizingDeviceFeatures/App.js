import { Text, TouchableOpacity, View } from "react-native"
import Geolocation from '@react-native-community/geolocation';

const App = () => {

  const Get_location_handle = async () => {

    Geolocation.getCurrentPosition(info => console.log(info));

    // console.log({result});

  }
  // const get_permission =  () => {
  //   Geolocation.setRNConfiguration();

  //   Geolocation.requestAuthorization(
      
  //   )


  // }




  return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 }}>


    <TouchableOpacity onPress={Get_location_handle}>
      <Text style={{ backgroundColor: 'black', fontWeight: 'bold', textAlign: 'center', color: 'white', padding: 10 }}>
        Current Location
      </Text>
    </TouchableOpacity>
    {/* <TouchableOpacity onPress={get_permission}>
      <Text style={{backgroundColor:'black', fontWeight:'bold', textAlign:'center', color:'white', padding:10}}>
        Get Permission
      </Text>
    </TouchableOpacity> */}

  </View>

}


export default App