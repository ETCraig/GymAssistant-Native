import React, {Component} from 'react';
import {Button, StyleSheet, TextInput, Text, View} from 'react-native';

class Register extends Component {
    render() {
        return(
            <View style={{flex: 1}}>
                <Text style={styles.header}>Create Your New Account</Text>
                <Text style={styles.bodyText}>Create your own <Text style={styles.appName}>Gym Assistant</Text> account here.</Text>
                <View style={styles.container}>
                    <TextInput
                        placeholder='Name'
                        style={styles.itemContainer}
                    />
                    <TextInput
                        placeholder='Email'
                        style={styles.itemContainer}
                    />
                    <TextInput
                        placeholder='Password'
                        style={styles.itemContainer}
                    />
                    <TextInput
                        placeholder='Confirm Password'
                        style={styles.itemContainer}
                    />
                </View>
                <Button title='Create Account' />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    itemContainer: {
        width: '50%',
        marginTop: 25,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da'
    },
    header: {
        fontSize: 28,
        color: 'black',
        textAlign: 'center',
        marginTop: 80
    },
    appName: {
        color: '#ff8c1a',
        fontWeight: 'bold',
    },
    bodyText: {
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
        marginTop: 40
    }  
});

export default Register;