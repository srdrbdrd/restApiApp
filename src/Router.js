import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {RestaurantDetails,RestaurantList,CityList} from './pages'
import Provider from './context/Provider'

const Stack = createStackNavigator()

function Router(){
    return(
        <Provider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name = "CityList" component = {CityList} />
                    <Stack.Screen name = "RestaurantListPage" component = {RestaurantList} />
                    <Stack.Screen name = "RestaurantDetailPage" component = {RestaurantDetails} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider> 
    )
}


export default Router