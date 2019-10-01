import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';

const NavBarIcon = (props) => {
    return (
        <View style={{flex: 1}}>
            <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center'}} onPress={props.onPress}>
                <View style={{width: 26, height: 26, alignItems: 'center', justifyContent: 'center'}}>
                    <Icon name={props.icon} size={24} color='#00A896' />
                </View>
                <Text style={{fontSize: 11, color: '#545454', marginTop: 2 }}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NavBarIcon;

