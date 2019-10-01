import React, { Component } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation'

import { getProductById, deleteProduct } from '../../../configs/redux/actions/products';
import CardDetailProduct from '../../../components/molecules/CardDetailProduct'

class DetailProduct extends Component {
    static navigationOptions = {
        title: 'Details Item',
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
        isLoading: true
    }

    componentDidMount() {
        const id = this.props.navigation.getParam('id')
        this.props.getProductById(id)
        .then(res => {
            this.setState({
                isLoading: false
            })
        })

        this.subs = [
            this.props.navigation.addListener('willFocus', () => {
                console.log('will focus Home')
                this.setState({loading: false})
                this.props.getProductById(id)
            })
        ]
    }

    

    handlerSubmit = async () => {
        const id = this.props.navigation.getParam('id')
        this.props.deleteProduct(id)
        .then(res => {
            this.props.navigation.navigate('Home')
        })
    }

    render() {
        const id = this.props.navigation.getParam('id')

        
        if(this.state.isLoading) {
            return (
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <ActivityIndicator size='large' animating/>
                </View>
            )
        }else{
        return (
            <View>
                <ScrollView style={{marginHorizontal: 30, marginTop: 20}}>
                    <CardDetailProduct 
                        name={this.props.product.products.name} 
                        category={this.props.product.products.category} 
                        quantity={this.props.product.products.quantity} 
                        description={this.props.product.products.description}
                        update={() => this.props.navigation.navigate('UpdateProduct', {id})}
                        delete={() => this.handlerSubmit()}
                    />
                </ScrollView>
            </View>            
        )}
    }
}

const mapStateToProps = state => {
    return {
        product: state.products
    }
}

const mapDispatchToProps = dispatch => ({
    getProductById: (id) => dispatch(getProductById(id)),
    deleteProduct: (id) => dispatch(deleteProduct(id))
})

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(DetailProduct));
