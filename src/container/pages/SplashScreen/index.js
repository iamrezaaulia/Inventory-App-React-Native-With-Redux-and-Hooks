import React, { useEffect } from 'react';
import { View, Image, AsyncStorage, StyleSheet } from 'react-native';

const SplashScreen = (props) => {

    useEffect(() => {
        AsyncStorage.getItem('token')
        .then(value => {
            if (value.length > 0) {
                props.navigation.navigate('Home');
            }
        })
        .catch(() => props.navigation.navigate('Login'));
    }, []);

    return (
        <View style={styles.Container}>

            <View style={styles.Images}>
                <Image style={styles.Image} source={require('../../../assets/images/splashscreen.png')} />
            </View>

        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    },
    Images: {
        alignItems: 'center',
    },
    Image: {
        height: 150, 
        width: '50%',
        borderRadius: 10,
    },
})