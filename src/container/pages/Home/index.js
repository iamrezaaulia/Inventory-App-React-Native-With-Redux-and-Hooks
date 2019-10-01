import React, { Component } from 'react';
import { View, ScrollView, StatusBar } from 'react-native';

import SearchFeature from '../../../components/molecules/SearchFeature';
import NavBar from '../../../container/organisms/NavBar';
import Products from '../../organisms/Products';

class Home extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#fafafa'}}>
                <StatusBar backgroundColor='#fafafa' barStyle="dark-content" />
                    <SearchFeature name='Create' create={() => this.props.navigation.navigate('CreateProduct')}/>
                <ScrollView style={{flex: 1, backgroundColor: '#fafafa'}}>
                    <Products />
                </ScrollView>
                <NavBar />
            </View>
        )
    }
}

export default Home