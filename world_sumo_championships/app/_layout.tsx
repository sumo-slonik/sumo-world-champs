import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import {HomeScreen} from './(tabs)/homePage';
import {CompetitionInfoScreen} from './(tabs)/competitionInfo';
import {SumoInfoScreen} from './(tabs)/sumoInfo';
import {QuizScreen} from './(tabs)/quiz';
import CustomDrawer from "@/components/custom_components/customDrawer";
import Ionicons from "@expo/vector-icons/Ionicons";
import {styles} from "@/components/custom_components/myStyles";
const Drawer = createDrawerNavigator();


export default function RootLayout() {
  return (
      <NavigationContainer independent={true}>
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
          screenOptions={({ navigation }) => ({
              headerLeft: () => (
                  <Ionicons
                      name="menu"
                      size={24}
                      color="#D22913"
                      style={{ marginLeft: 15 }}
                      onPress={() => navigation.openDrawer()}
                  />
              ),
              drawerLabelStyle: [{
                  marginLeft: 25,

              },styles.drawerMenuTextStyle],
              drawerItemStyle: styles.drawerItemStyle,
              headerStyle: {
                  backgroundColor: "#2C130E"
              },
              headerTintColor: "#E1AD9C",
              headerTitleStyle: styles.headerTextStyle,
              drawerActiveBackgroundColor: "#2C130E",
              drawerActiveTintColor: "#E1AD9C",
          })}
        >
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
