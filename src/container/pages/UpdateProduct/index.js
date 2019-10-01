import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, TextInput, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { withNavigation } from 'react-navigation'

import { getProductById, updateProduct } from '../../../configs/redux/actions/products';

class UpdateProduct extends Component {
    static navigationOptions = {
        title: 'Update Item',
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

    state ={
        name: '',
        description: '',
        image: '',
        categories_id: '',
        quantity: ''
    }

    componentDidMount() {
        const id = this.props.navigation.getParam('id')
        this.props.getProductById(id)
        this.setState(this.props.product.products)
    }

    handlerSubmit = async () => {
        const id = this.props.navigation.getParam('id')
        const newData = this.state
        await this.props.updateProduct(id, newData)
        .then(res => {
            this.props.navigation.navigate('DetailProduct')
        })
    }
    
    render() {
        return (
            <View>
                <ScrollView style={{marginHorizontal: 30, marginTop: 20}}>
                    <View style={{flex: 1, position: 'relative'}}>
                        <TextInput placeholder='Name'style={{borderWidth: 1, borderColor: '#A0A4A8', borderRadius: 5, height: 40, fontSize: 15, paddingLeft: 40, paddingRight: 20, marginVertical: 10}}
                            name='name'
                            value={this.state.name}
                            onChangeText={name => this.setState({name})}
                        />
                        <Icon name='label' size={20} color='#333' style={{position: 'absolute', top: 20, left: 12}} />

                        <TextInput placeholder='Description'style={{borderWidth: 1, borderColor: '#A0A4A8', borderRadius: 5, height: 40, fontSize: 15, paddingLeft: 40, paddingRight: 20, marginVertical: 10}}
                            name='description'
                            value={this.state.description}
                            onChangeText={description => this.setState({description})}
                        />
                        <Icon name='description' size={20} color='#333' style={{position: 'absolute', top: 80, left: 12}} />

                        <TextInput placeholder='Image{URL}'style={{borderWidth: 1, borderColor: '#A0A4A8', borderRadius: 5, height: 40, fontSize: 15, paddingLeft: 40, paddingRight: 20, marginVertical: 10}}
                            name='image'
                            value={this.state.image}
                            onChangeText={image => this.setState({image})}
                        />
                        <Icon name='image' size={20} color='#333' style={{position: 'absolute', top: 140, left: 12}} />

                        <TextInput placeholder='Category'style={{borderWidth: 1, borderColor: '#A0A4A8', borderRadius: 5, height: 40, fontSize: 15, paddingLeft: 40, paddingRight: 20, marginVertical: 10}}
                            name='categories_id'
                            value={`${this.state.categories_id}`}
                            onChangeText={categories_id => this.setState({categories_id})}
                        />
                        <Icon name='style' size={20} color='#333' style={{position: 'absolute', top: 200, left: 12}} />

                        <TextInput placeholder='Stock'style={{borderWidth: 1, borderColor: '#A0A4A8', borderRadius: 5, height: 40, fontSize: 15, paddingLeft: 40, paddingRight: 20, marginVertical: 10}}
                            name='quantity'
                            value={`${this.state.quantity}`}
                            onChangeText={quantity => this.setState({quantity})}
                        />
                        <Icon name='confirmation-number' size={20} color='#333' style={{position: 'absolute', top: 260, left: 15}} />

                        <TouchableOpacity onPress={() => this.handlerSubmit()}>
                            <View style={{backgroundColor: '#1B998B', borderRadius: 5, alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
                                <Text style={{fontSize: 18, fontWeight: 'normal', color: '#FDFFFC', paddingVertical: 6,  alignItems: 'center', justifyContent: 'center'}}>Save</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        product: state.products
    }
}

const mapDispatchToProps = dispatch => ({
    getProductById: (id) => dispatch(getProductById(id)),
    updateProduct: (id, data) => dispatch(updateProduct(id, data))
})

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(UpdateProduct));