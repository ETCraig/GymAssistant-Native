import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    button: {
        margin: 20
    },
    header: {
        fontSize: 28,
        color: '#fff'
    },
    appName: {
        color: '#ff8c1a'
    },
    bodyText: {
        color: '#fff'
    }  
});

export default styles;