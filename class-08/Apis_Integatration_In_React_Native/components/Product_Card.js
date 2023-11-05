import { View, Text, Image } from 'react-native'
import React from 'react'

export const Product_Card = ({data}) => {

    const { category, title, price, images } = data
    return (
        <View style={{ width: 160 }}>
            <Image resizeMode='contain' style={{ height: 200 }} source={{ uri: images[0] }} />

            <View >
                <Text numberOfLines={1} style={{ fontSize: 15, color: 'black', fontWeight: 'bold' }}>
                    {title}
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text numberOfLines={1} style={{ fontSize: 15, fontWeight: 'bold', color: 'red' }}>
                        {price}$
                    </Text>
                    <Text numberOfLines={1} style={{}}>
                        {category.name}
                    </Text>
                </View>

            </View>

        </View>
    )
}

