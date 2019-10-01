import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

import NavBar from '../../../container/organisms/NavBar';

const Categories = () => {
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={styles.Text}>
                    Halaman Ini {"\n"}Lagi Tahap Pengembangan
                </Text>
            </View>
            <NavBar/>
        </View>
    )
}

export default withNavigation(Categories)

const styles = StyleSheet.create({
    Text: {
        textAlign: 'center',
        fontWeight: 'normal',
        fontSize: 15,
        lineHeight: 20,
        color: '#39374E',
    }
})