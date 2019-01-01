import React, {Component} from 'react';
import {Button, TextInput, Text, View} from 'react-native';

class Register extends Component {
    render() {
        return(
            <View style={{flex: 1}}>
                <Text>Create Your New Account</Text>
                <Text>Create your own Gym Assistant account here.</Text>
                <TextInput
                    placeholder='Name'
                />
                <TextInput
                    placeholder='Email'
                />
                <TextInput
                    placeholder='Password'
                />
                <TextInput
                    placeholder='Confirm Password'
                />
                <Button 
                    title='Create Account'
                />
            </View>
        );
    }
}

export default Register;