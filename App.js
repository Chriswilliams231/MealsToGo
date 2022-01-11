import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native'
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { useFonts as useOswald, Oswald_400Regular, } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular, } from '@expo-google-fonts/lato';

import { RestaurantsScreen } from './src/features/restaurtants/screens/restaurtants.screen'
import { theme } from './src/infrastructure/theme'
import { RestaurantsRequest } from './src/services/restaurants/restaurants.service';
const Tab = createBottomTabNavigator();


const Settings = () => <Text>Settings</Text>
const Map = () => <Text>Map</Text>


export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null
  }
  // retrieved the Icons from @expo/icons
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName;

                if (route.name === 'Restaurants') {
                  iconName = "md-restaurant";

                } else if (route.name === 'Settings') {
                  iconName = "md-settings";
                } else if (route.name === 'Map') {
                  iconName = "md-map"
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
            })}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

