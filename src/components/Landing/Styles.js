import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    btnContainer: {
    //    flex: 1,
       width: '40%',
       height: 40
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
        textAlign: 'center',
        marginTop: 40
    }  
});

export default styles;