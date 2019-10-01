import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

const CardDetailProduct = (props) => {
    return (
        <View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image style={{height: 200, width: '100%', borderRadius: 5}} source={require('../../../assets/images/unsplash.jpg')} />
            </View>
            <View style={{marginTop: 10}}>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#444'}}>{props.name}</Text>
            </View>
            <View style={{marginTop: 10, flexDirection: 'row'}}>
                <View style={{backgroundColor: '#00A896', borderRadius: 5, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontSize: 14, fontWeight: 'normal', color: '#FDFFFC', paddingHorizontal: 8, paddingVertical: 2}}>Category : {props.category}</Text>
                </View>
                <View style={{backgroundColor: '#00A896', borderRadius: 5, alignItems: 'center', justifyContent: 'center', left: 5}}>
                    <Text style={{fontSize: 14, fontWeight: 'normal', color: '#FDFFFC', paddingHorizontal: 8, paddingVertical: 2}}>Stock : {props.quantity}</Text>
                </View>
            </View>
            <View style={{marginTop: 14}}>
                <Text style={{fontSize: 16, fontWeight: 'normal', color: '#444'}}>{props.description}</Text>
            </View>
            <View style={{marginTop: 25, marginBottom:50, flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity style={{backgroundColor: '#FF9F1C', borderRadius: 2, alignItems: 'center', justifyContent: 'center'}} onPress={props.update}>
                    <Text style={{fontSize: 14, fontWeight: 'normal', color: '#FDFFFC', paddingHorizontal: 8, paddingVertical: 2}}>UPDATE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor: '#E71D36', borderRadius: 2, alignSelf: 'center', justifyContent: 'center'}} onPress={props.delete}>
                    <Text style={{fontSize: 14, fontWeight: 'normal', color: '#FDFFFC', paddingHorizontal: 8, paddingVertical: 2}}>DELETE</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default withNavigation(CardDetailProduct);