import React, {Component} from 'react';
import {Button, Touchable, TextInput, Text, View} from 'react-native';
import { Input } from 'native-base';

class repCalculator extends Component {
    constructor() {
        super();

        this.state = {
            weight: Number,
            repetition: Number,
            conditions: false
        }
    }
    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
        this.setState({conditions: false});
    }
    onSubmit = e => {
        e.preventDefault();
        let myWeight = this.state.weight;
        let myRepetition = this.state.repetition;
        if (myWeight <= 0 && myRepetition <= 0) {
            this.setState({conditions: false})
        } else if (myWeight <= 0) {
            this.setState({conditions: false})
        } else if (myRepetition === 0) {
            this.setState({conditions: false})
        } else {
            this.setState({conditions: true})
        }
    }
    renderFooter() {
        let myWeight = this.state.weight;
        let myRepetition = this.state.repetition;
        if (!this.state.conditions) {
            return(
                <View>
                    <Text>Please enter both the weight and rep ranges.</Text>
                </View>
            );
        } else {
            return(
                <View>

                </View>
            );
        }
    }
    render() {
        return(
            <View>
                <Text>1RM CALCULATOR</Text>
                <Input
                    name='weight'
                    textContentType='number'
                    placeholder='Weight'
                    value={this.state.weight}
                    onChange={this.onChange} 
                />
                <Input
                    name='repetition'
                    textContentType='number'
                    placeholder='Reps'
                    value={this.state.repetition}
                    onChange={this.onChange} 
                />
                <Button 
                    title='Calculate Max'
                />
                {this.renderFooter}
            </View>
        );
    }
}

export default repCalculator;