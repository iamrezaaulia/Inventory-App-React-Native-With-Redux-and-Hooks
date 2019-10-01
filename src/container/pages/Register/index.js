import React, { Component } from 'react';
import { View, Text, Image, TextInput, KeyboardAvoidingView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';

import { register } from '../../../configs/redux/actions/users'

class Register extends Component {
    state = {
        username: '',
        email: '',
        password: ''
	};

    handlerSubmit = async () => {
        if(!this.state.username || !this.state.email || !this.state.password){
            Alert.alert(
                'Failed',
                'All Fields Are Required'
            )
        } else{
            const data = this.state
            await this.props.register(data)
            .then(res => {
                this.props.navigation.navigate('Login')
            })
        }

    }

    render() {
        return (
            <KeyboardAvoidingView style={{flex: 1}} behavior='height'>
                
                <View style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
                    <View style={styles.Title}>
                        <Text style={styles.TitleText}>SIGN UP</Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Image style={styles.Image} source={require('../../../assets/images/register.png')} />
                    </View>
                    <View>
                        <TextInput 
                            style={styles.Input}
                            placeholder='Username'
                            name='username'
                            onChangeText={username => this.setState({username})}
                        />
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
                        <View style={styles.Register}>
                            <Text style={styles.RegisterText}>Sign Up</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.Line} opacity={0.5}></View>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                        <View style={styles.Login}>
                            <Text style={styles.LoginText}>Have An Account ? Sign In Here</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </KeyboardAvoidingView>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = dispatch => ({
    register: (data) => dispatch(register(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);


const styles = StyleSheet.create({
    Title: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    TitleText: {
        textAlign: 'center',
        fontWeight: 'normal',
        fontSize: 25,
        marginBottom: 20,
        color: '#39374E',
    },
    Image: {
        height: 150, 
        width: '60%',
        marginBottom: 5
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
    Register: {
        marginTop: 20,
        marginHorizontal: 50,
        alignItems: 'flex-end',
    },
    RegisterText: {
        backgroundColor: '#00A896',
        color: '#FDFFFC', 
        borderRadius: 4, 
        fontSize: 15, 
        paddingVertical: 8,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center' 
        
    },
    Login: {
        marginTop: 20,
        marginHorizontal: 50,
        alignItems: 'center',
    },
    LoginText: {
        color: '#00A896', 
        fontSize: 14, 
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