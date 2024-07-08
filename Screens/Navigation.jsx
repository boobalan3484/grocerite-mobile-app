import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from '../Screens/About';
import Home from '../Screens/Home';
import Details from '../Screens/Details';
import Cart from '../Screens/Cart';
import CheckoutPage from '../Screens/CheckoutPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const HomeStack = () => (
    <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
            headerShown: false
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
);

const CartStack = () => (
    <Stack.Navigator
        initialRouteName='Cart'
        screenOptions={{
            headerShown: false
        }}>
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="CheckoutPage" component={CheckoutPage} />

    </Stack.Navigator>
);

const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={
                    { headerShown: false }
                }
            >
                <Tab.Screen
                    name="HomeStack"
                    component={HomeStack}
                    options={{
                        tabBarLabel: 'Shop',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="store" color={color} size={size} />
                        ),
                        tabBarActiveTintColor: 'green',
                        tabBarInactiveTintColor: 'grey',
                    }}
                />
                <Tab.Screen
                    name="CartStack"
                    component={CartStack}
                    options={{
                        tabBarLabel: 'Cart',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="shopping-cart" color={color} size={size} />
                        ),
                        tabBarActiveTintColor: 'green',
                        tabBarInactiveTintColor: 'grey',
                    }}

                />
                <Tab.Screen
                    name="About"
                    component={About}
                    options={{
                        tabBarLabel: 'Account',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="person" color={color} size={size} />
                        ),
                        tabBarActiveTintColor: 'green',
                        tabBarInactiveTintColor: 'grey',
                    }}
                />
            </Tab.Navigator>

        </NavigationContainer >
    );
};

export default Navigation;
