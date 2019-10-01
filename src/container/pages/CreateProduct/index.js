import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, TextInput, TouchableOpacity, Text, Image, KeyboardAvoidingView, StyleSheet, Alert, Picker} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { withNavigation } from 'react-navigation'

import { createProduct } from '../../../configs/redux/actions/products';

class CreateProduct extends Component {
    static navigationOptions = {
        title: 'Create Item',
        headerStyle: {
            backgroundColor: '#fafafa',
        },
        headerTintColor: '#00A896',
        headerTitleStyle: {
            fontWeight: 'bold',
            color: '#00A896',
            fontFamily: 'Roboto',
            fontSize: 16
        },
    };
 
    state = {
        name: '',
        description: '',
        image: '',
        categories_id: '',
        quantity: ''
    }

    handlerSubmit = async () => {
        if(!this.state.name || !this.state.descrition || !this.state.image || !this.state.categories_id || !this.state.quantity){
            Alert.alert(
                'Failed',
                'All Fields Are Required'
            )
        } else {
            const data = this.state
            await this.props.createProduct(data)
            .then(res => {
                this.props.navigation.navigate('Home')
            })
        }
    }
    
    render() {
        return (
            <KeyboardAvoidingView style={{flex: 1}} behavior=''>
                <View style={{marginHorizontal: 40, marginTop: 20}}>
                    <ScrollView>
                        <View style={{flex: 1}}>
                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <Image style={{height: 200, width: '100%', borderRadius: 5}} source={require('../../../assets/images/create.png')} />
                            </View>
                            <TextInput placeholder='Name' style={styles.Input}
                                name='name'
                                onChangeText={name => this.setState({name})}
                            />
                            <Icon name='label' size={20} color='#333' style={{position: 'absolute', top: 220, left: 12}} />

                            <TextInput placeholder='Description' style={styles.Input}
                                name='description'
                                onChangeText={description => this.setState({description})}
                            />
                            <Icon name='description' size={20} color='#333' style={{position: 'absolute', top: 280, left: 12}} />

                            <TextInput placeholder='Image{URL}' style={styles.Input}
                                name='image'
                                onChangeText={image => this.setState({image})}
                            />
                            <Icon name='image' size={20} color='#333' style={{position: 'absolute', top: 340, left: 12}} />

                            {/* <TextInput placeholder='Category' style={styles.Input}
                                name='categories_id'
                                onChangeText={categories_id => this.setState({categories_id})}
                            />
                            <Icon name='style' size={20} color='#333' style={{position: 'absolute', top: 400, left: 12}} /> */}

                            <Picker
                                selectedValue={this.state.categories_id}
                                style={{height: 50, width: 250}}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({categories_id: itemValue})
                                }>
                                <Picker.Item label='Komputer' value='1' />
                                <Picker.Item label='Handphone' value='2' />
                                <Picker.Item label='Perlengkapan Rumah' value='3' />
                                <Picker.Item label='Makanan dan Minuman' value='4' />
                                <Picker.Item label='Fashion' value='5' />
                            </Picker>

                            <TextInput placeholder='Stock' style={styles.Input}
                                name='quantity'
                                onChangeText={quantity => this.setState({quantity})}
                            />
                            <Icon name='confirmation-number' size={20} color='#333' style={{position: 'absolute', top: 510, left: 12}} />

                            <TouchableOpacity onPress={() => this.handlerSubmit()}>
                                <View style={styles.Save}>
                                    <Text style={styles.TextSave}>Save</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const mapStateToProps = state => {
    return {
       products : state.products
    }
}

const mapDispatchToProps = dispatch => ({
    createProduct: (data) => dispatch(createProduct(data))
})

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(CreateProduct));

const styles = StyleSheet.create({
    Input: {
        borderWidth: 1, 
        borderColor: '#A0A4A8', 
        borderRadius: 5, 
        height: 40, 
        fontSize: 15, 
        paddingLeft: 42, 
        paddingRight: 20, 
        marginVertical: 10
    },
    Save: {
        backgroundColor: '#1B998B', 
        borderRadius: 5, 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: 10
    },
    TextSave: {
        fontSize: 16, 
        fontWeight: 'normal', 
        color: '#FDFFFC', 
        paddingVertical: 6, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
})