import React from 'react'
import {View,Text,TouchableOpacity,Image,Dimensions} from 'react-native'
import styles from '../styles'
const RestaurantItem = props =>{
    return(
        <TouchableOpacity style = {styles.components.restaurantItem.container} onPress = {props.onResSelect}>
            
            <Image style={styles.components.restaurantItem.image}  source={require('../assets/resicon.png')}></Image>
            <Text style= {styles.components.restaurantItem.text}>{props.restaurantData.name}</Text>
            <Text>{props.restaurantData.area}   Price Level:{props.restaurantData.price}</Text>

        </TouchableOpacity>
    )
}


export {RestaurantItem}