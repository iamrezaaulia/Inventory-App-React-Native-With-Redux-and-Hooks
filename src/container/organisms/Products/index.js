import React, { Component } from 'react';
import { View, FlatList, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

import { getProducts } from '../../../configs/redux/actions/products';
import CardProduct from '../../../components/molecules/CardProduct';


class Products extends Component {
    
    
    componentDidMount() {
        this.props.getProducts()

        this.subs = [
            this.props.navigation.addListener('willFocus', () => {
                console.log('will focus Home')
                this.props.getProducts()
            })
        ]
    }

    componentWillUnmount() {
        this.subs.forEach(sub => {
            sub.remove()
        })
    }

    render() {      
        const {navigate} = this.props.navigation
        const { isLoading, products } = this.props.products

        
        return (
            <View style={{paddingTop: 0, paddingBottom :16, paddingHorizontal: 16}}>
                {
                    (!isLoading && products.length === 0) ? (
                        <View style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
                            <Text>Data Not Found</Text>
                        </View>
                    ) : (!isLoading && products.length > 0) ? (
                            <FlatList
                                data={this.props.products.products}
                                renderItem={ ({item}) => <CardProduct id={item.id} name={item.name} quantity={item.quantity} nav={navigate}/> }
                                keyExtractor={ ({id}) => id.toString()}
                            />
                        ) : (
                            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                <ActivityIndicator size='large' animating/>
                            </View>
                        )
                }
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(getProducts())
})

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(Products));