import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

class GoalsModal extends Component {
    state = {
        modal: false,
        name: ''
    }
    toggle = () => {
        this.setState({modal: !this.state.modal});
    }
    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }
    render() {
        return(
            <View>
                <Button 
                    title='Add Goal'
                    color='black'
                    style={{marginBottom: '2rem'}}
                    onPress={this.toggle}
                />
            </View>
        );
    }
}

export default GoalsModal;