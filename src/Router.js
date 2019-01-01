import {createStackNavigator, createAppContainer} from 'react-navigation';

//Auth Components
import Landing from './components/Landing/Landing';
import Login from './components/Login';
import Register from './components/Register';

export const LoginStack = createStackNavigator(
    {
        Landing: {
            screen: Landing,
            navigationOptions: {
                title: '',
                header: null
            }
        },
        Login: {
            screen: Login,
        },
        Register: {
            screen: Register,
        }
    },
    {
        initialRouteName: "Landing",
        navigationOptions: {
            headerBackTitle: null,
            headerTitleStyle: {
                fontWeight: "normal"
            },
            headerStyle: {
                backgroundColor: "00b1f3"
            },
            headerTintColor: "white"
        }
    }
);

export default createAppContainer(LoginStack)