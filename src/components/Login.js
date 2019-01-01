import React, {Component} from 'react';
import {Button, TextInput, Text, View} from 'react-native';

class Login extends Component {
    render() {
        return(
            <View style={{flex: 1}}>
                <Text>Login</Text>
                <Text>Login to your Gym Assistant account here.</Text>
                <TextInput 
                    placeholder='Email'
                />
                <TextInput
                    placeholder='Password'
                />
                <Button title='Login' />
            </View>
        );
    }
}

export default Login;