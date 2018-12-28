import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    btnContainer: {
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        margin: '20%'
    },
    header: {
        fontSize: 28,
        color: '#fff',
        textAlign: 'center',
        marginTop: 80
    },
    appName: {
        color: '#ff8c1a',
        fontWeight: 'bold',
    },
    bodyText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center'
    }  
});

export default styles;