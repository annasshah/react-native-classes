import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { axios_instance, baseURL } from '../config/axios_instance';
import { useEffect, useState } from 'react';
import { Product_Card } from '../components/Product_Card';


export const Getting_Started = () => {
    const navigation = useNavigation()


    const [products, setProducts] = useState([])



    const get_products = async () => {
        const response = await axios_instance.get('/products/?price_min=100&price_max=1000&offset=10&limit=20')
        const data = await response.data


        await setProducts(data)


    }

    console.log('products', products);
    useEffect(() => {

        get_products()

    }, [])






    // const navigate_handle = async () => {

    //     // navigation.navigate('Login',{state:{name:'user', data:[]}})
    // }

    return <View>
        <ScrollView horizontal>
            <View style={{ paddingVertical: 20, paddingHorizontal: 20, flexDirection: 'row', gap: 20 }}>

                {products.map((elem) => {

                    return <Product_Card data={elem} />
                })}

            </View>
        </ScrollView>

        <View style={{ paddingVertical: 20, paddingHorizontal: 20}}>

        <FlatList
        data={products}
        numColumns={2}
        // contentContainerStyle={{columnGap:20}}
        columnWrapperStyle={{gap:20}}
        renderItem={({item}) => (
            <Product_Card data={item} />
          )}
        // renderItem={(e)=><Product_Card data={e} />}
        keyExtractor={item => item.id}
        // extraData={selectedId}
      />

        </View>
    </View>
}












{/* <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
        <View style={{ gap: 10 }}>
            <Text style={{ textAlign: "center", fontSize: 20 }}>
                Getting Started Screen
            </Text>
            <Text style={{}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>


            <TouchableOpacity 
            
            // onPress={navigate_handle}
             style={{ paddingVertical: 15, backgroundColor: 'black' }}>
                <Text style={{ textAlign: 'center', color: 'white' }}>
                    Let's Start
                </Text>
            </TouchableOpacity>
        </View>



    </View> */}