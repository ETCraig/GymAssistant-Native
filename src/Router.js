import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

//Components
import Landing from './components/Landing';

// export const InnerStack = createStackNavigator(
//     {
//         GoalModel: GoalModel,
//         repCalc: repCalc,
//         bmiCalc: bmiCalc
//     },
//     {
//         navigationOptions: {
//             header: null
//         }
//     }
// );

export const LoginStack = createStackNavigator(
    {
        Landing: Landing
    },
    {
        navigationOptions: {
            header: null
        }
    }    
);