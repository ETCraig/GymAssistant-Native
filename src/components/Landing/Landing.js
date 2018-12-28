import React, {Component} from 'react';
import {Button, Dimensions, Image, Text, View} from 'react-native';
import styles from './Styles';

const {width} = Dimensions.get('window');

const remote = 'http://www.thescienceofgettingripped.com/wp-content/uploads/2013/03/weights.jpg';

class Landing extends Component {
    render() {
        const resizeMode = 'center';
        return(
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#eee',
                }}
            >
                <View
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                    }}
                >
                <Image 
                    style={{
                        flex: 1,
                        resizeMode: 'cover'
                    }}
                    source={{uri: remote}}
                />
                </View>
                <Text style={styles.header}>Welcome to <Text style={styles.appName}>Gym Assistant!</Text></Text>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        justifyContent: 'center',
                    }}
                >
                <Text style={styles.bodyText}>Keep track of your personal fitness goals, and take advantage of two custom made calculators.</Text>
                    <View style={styles.btnContainer}>
                    <Button
                        title='Login' 
                        style={styles.btn}
                    />
                    <Button 
                        title='Register'
                        style={styles.btn}
                    />
                    </View>
                </View>
            </View>
        );
    }
}

export default Landing;