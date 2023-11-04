import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native"
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import { utils } from '@react-native-firebase/app';
export const Camera_Image_Gallery = () => {
    const [current_img, setCurrent_img] = useState('')

    const open_camera_handle = async () => {

        const result = await launchCamera({
            //   includeBase64:true

        })
        console.log({ result: result.assets[0] });
        setCurrent_img(result.assets[0].uri)
    }
    const open_Gallery_handle = async () => {

        const result = await launchImageLibrary({
            //   includeBase64:true

        });
        console.log({ result: result.assets[0] });
        setCurrent_img(result.assets[0].uri)

    }
    const upload_handle =  () => {

        //  storage().ref('black-t-shirt-sm.png').putFile(current_img).then((res)=>{
        //     console.log('res', res);
        //  })

        storage().ref('black-t-shirt-sm.png').getDownloadURL().then((res)=>{
                console.log('res', res);
             })

    }

    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 }}>


        <Image resizeMode="contain" source={{ uri: current_img }} style={{ width: 150, height: 150 }} />


        <TouchableOpacity onPress={open_camera_handle}>
            <Text style={{ backgroundColor: 'black', fontWeight: 'bold', textAlign: 'center', color: 'white', padding: 10 }}>
                Open Camera
            </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={open_Gallery_handle}>
            <Text style={{ backgroundColor: 'black', fontWeight: 'bold', textAlign: 'center', color: 'white', padding: 10 }}>
                Open Gallery
            </Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={upload_handle}>
            <Text style={{ backgroundColor: 'black', fontWeight: 'bold', textAlign: 'center', color: 'white', padding: 10 }}>
                Upload Image
            </Text>
        </TouchableOpacity>

    </View>

}


