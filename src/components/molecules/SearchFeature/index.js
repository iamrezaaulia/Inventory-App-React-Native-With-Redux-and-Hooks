import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { withNavigation } from 'react-navigation'

class SearchFeature extends Component {
    state = {
        search: ''
    }

    render() {
        return (
            <View style={{marginHorizontal: 15, flexDirection: 'row'}}>
                <View style={{flex: 1, position: 'relative'}}>
                    <TextInput 
                        style={{borderWidth: 1, borderColor: '#A0A4A8', borderRadius: 5, height: 40, fontSize: 15, paddingLeft: 42, paddingRight: 20, marginVertical: 10, marginRight: 18}}
                        placeholder='Search ...'
                        value={this.state.search}
                        onChangeText={ value => {
                            this.setState({search: value})
                            this.props.getProducts(value)
                        }}
                    />
                    <Icon name='search' size={22} color='#333' style={{position: 'absolute', top: 20, left: 15}} />
                </View>

                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={this.props.create}>
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Icon name='create' size={24} color='#00A896' />
                        </View>
                        <Text style={{fontSize: 11, color: '#545454', marginTop: 2}}>{this.props.name}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default withNavigation(SearchFeature)
