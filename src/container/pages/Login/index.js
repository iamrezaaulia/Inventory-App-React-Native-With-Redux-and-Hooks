import React, { Component } from 'react';
import { View, Text, Image, TextInput, KeyboardAvoidingView, StyleSheet, TouchableOpacity, Alert, AsyncStorage } from 'react-native';
import { connect } from 'react-redux'

import { login } from '../../../configs/redux/actions/users'

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handlerSubmit = async () => {
        const data = this.state
        await this.props.login(data)
        this.setState({
            token: this.props.user.usersProfile
        })      

        if( !this.state.email || !this.state.password ) {
            Alert.alert(
                'Failed',
                'All Fields Are Required'
            )
        } else if (!this.props.user.token === true) {
            Alert.alert(
                'Failed',
                'Your Email and Password is Wrong'
            )
        } else {
            AsyncStorage.setItem('token', this.props.user.token);
            this.props.navigation.navigate('Home');
        }
    }

    render() {
        return (
            <KeyboardAvoidingView style={{flex: 1}} behavior='height'>
                
                <View style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
                    
                    <View style={styles.Title}>
                        <Text style={styles.TitleText}>SIGN IN</Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Image style={styles.Image} source={require('../../../assets/images/login.png')} />
                    </View>
                    <View>
                        <TextInput 
                            style={styles.Input}
                            placeholder='Email'
                            name='email'
                            onChangeText={email => this.setState({email})}
                        />
                    </View>
                    <View>
                        <TextInput 
                            style={styles.Input}
                            placeholder='Password'
                            name='password'
                            onChangeText={password => this.setState({password})}
                            secureTextEntry={true}
                        />
                    </View>
                    <TouchableOpacity onPress={() => this.handlerSubmit()}>
                        <View style={styles.Login}>
                            <Text style={styles.LoginText}>Sign In</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.Line} opacity={0.5}></View>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                        <View style={styles.Register}>
                            <Text style={styles.RegisterText}>Don't Have An Account ? Sign Up Here</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </KeyboardAvoidingView>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.users
    }
}

const mapDispatchToProps = dispatch => ({
    login: (data) => dispatch(login(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
    Title: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    TitleText: {
        textAlign: 'center',
        fontWeight: 'normal',
        fontSize: 25,
        lineHeight: 30,
        marginBottom: 20,
        color: '#39374E',
    },
    Image: {
        height: 150, 
        width: '60%'
    },
    Input: {
        borderColor: '#A0A4A8', 
        borderWidth: 1, 
        borderRadius: 4, 
        height: 40, 
        fontSize: 15, 
        paddingLeft: 20, 
        paddingRight: 20, 
        marginTop: 10,
        marginHorizontal: 50,
    },
    Login: {
        marginTop: 20,
        marginHorizontal: 50,
        alignItems: 'flex-end',
    },
    LoginText: {
        backgroundColor: '#00A896',
        color: '#FDFFFC', 
        borderRadius: 4, 
        fontSize: 15, 
        paddingVertical: 8,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center' 
        
    },
    Register: {
        marginTop: 20,
        marginHorizontal: 50,
        alignItems: 'center',
    },
    RegisterText: {
        color: '#00A896', 
        fontSize: 14,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center' 
        
    },
    Line: {
        marginHorizontal: 50,
        height: 1, 
        borderRadius:25, 
        backgroundColor: '#A0A4A8', 
        marginTop: 20
    }
    
})