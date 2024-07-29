import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import {HomeScreen} from './(tabs)/homePage';
import {CompetitionInfoScreen} from './(tabs)/competitionInfo';
import {SumoInfoScreen} from './(tabs)/sumoInfo';
import {QuizScreen} from './(tabs)/quiz';
const Drawer = createDrawerNavigator();


export default function RootLayout() {
  return (
      <NavigationContainer independent={true}>
        <Drawer.Navigator>
          <Drawer.Screen
            name="Home"
            component={HomeScreen}
          />
          <Drawer.Screen
              name="Competition Info"
              component={CompetitionInfoScreen}
          />
          <Drawer.Screen
                name="Sumo Info"
                component={SumoInfoScreen}
          />
          <Drawer.Screen
                name="Sumo quiz"
                component={QuizScreen}
          />
      </Drawer.Navigator>
      </NavigationContainer>
  );
};
