import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import { withNavigation} from 'react-navigation'
import { connect } from 'react-redux'

import { logout } from '../../../configs/redux/actions/users'
import NavBarIcon from '../../../components/molecules/NavBarIcon'

class NavBar extends Component {

    async logout() {
        AsyncStorage.clear()
        await this.props.logout()
        this.props.navigation.navigate('Login')
    }

    render () {
        return(
            <View style={{height: 54, backgroundColor: '#fafafa', flexDirection: 'row', borderTopColor: '#f5f5f5', borderTopWidth: 1, paddingTop: 2}}>
              <NavBarIcon onPress={() => this.props.navigation.navigate('Home')} icon='widgets' title='Home' />
              <NavBarIcon onPress={() => this.props.navigation.navigate('Categories')} icon='style' title='Categories' />
              <NavBarIcon onPress={() => this.logout()} icon='power-settings-new' title='Logout' />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return (
        user = state.users
    )
}

const mapDispatchToProps = dispatch => ({
    logout: (data) => dispatch(logout(data))
})

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(NavBar))