import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

//Components
import Landing from './components/Landing/Landing';
import Login from './components/Login';
import Register from './components/Register';

export const LoginStack = createStackNavigator(
    {
        Landing: {
            screen: Landing,
            navigationOptions: {
                title: "",
                header: null
            }
        },
        Login: {
            screen: Login,
            navigationOptions: {
                title: "Login"
            }
        },
        Register: {
            screen: Register,
            navigationOptions: {
                title: "Register"
            }
        }
    },
    {
        initialRouteName: "Start",
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