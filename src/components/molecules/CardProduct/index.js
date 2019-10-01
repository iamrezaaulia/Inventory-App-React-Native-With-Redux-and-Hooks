import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

const CardProduct = (props) => {
    
    const navigation = () => {
        props.nav('DetailProduct', {id: props.id})
    }
        
    return (
        <View>
            <TouchableOpacity onPress={navigation}>
                <Image style={{height: 180, width: '100%', borderRadius: 5}} source={require('../../../assets/images/unsplash.jpg')} />
            </TouchableOpacity>
            <View style={{paddingTop: 10, paddingBottom: 15, flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontSize: 15, fontWeight: 'bold', color: '#444'}} numberOfLines={1}>{props.name}</Text>
                </View>
                <View style={{backgroundColor: '#00A896', borderRadius: 4, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontSize: 14, fontWeight: 'normal', color: '#FDFFFC', paddingHorizontal: 6, paddingVertical: 2}}>Stock : {props.quantity}</Text>
                </View>
            </View>
            <View style={{height: 1, borderRadius:25, backgroundColor: '#444', marginBottom: 20}} opacity={0.2}></View>
        </View>
    )
}

export default withNavigation(CardProduct);