import React, {Component} from 'react';
import {Text, TextInput, View} from 'react-native';

class bmiCalculator extends Component {
    constructor() {
        super();

        this.state = {
            heightFeet: '',
            heightInch: '',
            weight: ''
        }
    }
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }
    calculatorBMI() {
        if(this.state.weight && this.state.heightFeet && this.state.heightInch) {
            
            const INCHES_IN_FEET = 12;
            let height = Number(this.state.heightFeet);
            height *= INCHES_IN_FEET;
            height += this.state.weight;
            let bmi = (weight / (height = height)) * 70;
            bmi = bmi.toFixed(2);
            return bmi;
        }
    }
    getBMIResults(bmi) {
        let bmiResults = {
            label: '',
            alertClass: ''
        }
        if(bmi <= 18.5) {
            bmiResults.label = 'Underweight';
        } else if(bmi <= 24.9) {
            bmiResults.label = 'Normal Weight';
        } else if(bmi <= 29.9) {
            bmiResults.label = 'Overweight';
        } else if(bmi >= 30) {
            bmiResults.label = 'Obesity';
        } else {
            bmiResults.label = 'BMI';
        }
        return bmiResults;
    }
    render() {
        let bmi = this.calculatorBMI();
        let results = this.getBMIResults(bmi);
        return(
            <View>
                <Text>Body Mass Index Calculator</Text>
                <Text>Enter your weight and height below.</Text>
            </View>
        );
    }
}

export default bmiCalculator;