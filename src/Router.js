import {createStackNavigator, createAppContainer} from 'react-navigation';

//Auth Components
import Landing from './components/Landing/Landing';
import Login from './components/Login';
import Register from './components/Register';

// //Authorized Components
// import BMICalc from './components/bmiCalculator';
// import GoalList from './components/GoalList';
// import Goals from './components/GoalsModel';
// import REPCalc from './components/repCalculator';

// export const InnerStack = createStackNavigator(
//     {  
//         Goals: Goals,
//         GoalList: GoalList,
//         REPCalc: REPCalc,
//         BMICalc: BMICalc
//     },
//     {
//         navigationOptions: {
//             header: null
//         }
//     }
// );

const LoginStack = createStackNavigator(
    {
        Landing: {
            screen: Landing,
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
    }
);

export default createAppContainer(LoginStack)