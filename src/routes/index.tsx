import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

import {Dashboard} from '@/screens/Dashboard';
import {Home} from '@/screens/Home';
import {Details} from '@/screens/Details';

import { colors } from '@/styles/colors';
export function Routes() {

  return (
    <Navigator screenOptions={{
      headerShown: false,
      contentStyle: {
        backgroundColor: colors.gray100
      }
    }}
      initialRouteName='Dashboard'
    >
      <Screen
        name='Home'
        component={Home}
      />

       <Screen
        name='Dashboard'
        component={Dashboard}
      />
      
      <Screen
        name='Details'
        component={Details}
      />
    </Navigator>
  )
}