import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

class Landing extends Component {
    render() {
        return(
            <View>
                <View>
                    <View>
                        <View>
                            <View>
                                <Text>Welcome to Gym Assistant!</Text>
                                <Text>Keep track of your personal fitness goals, and take advantage of two custom made calculators.</Text>
                                <Button>Login</Button>
                                <Button>Register</Button>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default Landing;