import {createStackNavigator, createAppContainer} from 'react-navigation';

//Auth Components
import Landing from './components/Landing/Landing';
import Login from './components/Login';
import Register from './components/Register';

//Authorized Components
import BMIcalc from './components/bmiCalculator';
import Goals from './components/GoalsModel';
import REPcalc from './components/repCalculator';

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
        },
        Goals: {
            screen: Goals,
        },
        BMIcalc: {
            screen: BMIcalc,
        },
        REPcalc: {
            screen: REPcalc,
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