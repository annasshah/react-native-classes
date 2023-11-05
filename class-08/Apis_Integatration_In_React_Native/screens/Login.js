import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';


export  const Login = ({route}) => {

    const navigation = useNavigation()
    const params = route.params
    console.log(params)

    const navigate_handle = () => {
        navigation.navigate('Home')
    }


    const Go_Back_Handle = () => {
        navigation.goBack()
    }

    return <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
        <View style={{gap:10}}>
            <Text style={{ textAlign: "center", fontSize: 20 }}>
                Login Screen
            </Text>
            <Text style={{}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>


            <TouchableOpacity onPress={navigate_handle} style={{paddingVertical:15, backgroundColor:'black'}}>
                <Text style={{textAlign:'center', color:'white'}}>
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={Go_Back_Handle} style={{paddingVertical:15, backgroundColor:'black'}}>
                <Text style={{textAlign:'center', color:'white'}}>
                    Go Back
                </Text>
            </TouchableOpacity>
        </View>



    </View>
} 