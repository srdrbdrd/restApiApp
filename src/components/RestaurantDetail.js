/*
    "id": 107257,
    "name": "Las Tablas Colombian Steak House",
    "address": "2942 N Lincoln Ave",
    "city": "Chicago",
    "state": "IL",
    "area": "Chicago / Illinois",
    "postal_code": "60657",
    "country": "US",
    "phone": "7738712414",
    "lat": 41.935137,
    "lng": -87.662815,
    "price": 2,
    "reserve_url": "http://www.opentable.com/single.aspx?rid=107257",
    "mobile_reserve_url": "http://mobile.opentable.com/opentable/?restId=107257",
    "image_url": "https://www.opentable.com/img/restimages/107257.jpg"
 }*/

 import React from 'react'
 import {View,Text,Image,Dimensions,TouchableOpacity} from 'react-native'
import styles from '../styles'


 const RestaurantDetail = props =>{
     return(
         <View style = {styles.components.restaurantDetails.container}>
             <Image  style = {styles.components.restaurantDetails.image}source={require('../assets/resicon.png')}></Image>
                
             <Text style = {styles.components.restaurantDetails.text}>{props.detail.name}</Text>
             
             <Text style = {styles.components.restaurantDetails.text}>{props.detail.area}</Text>
             <Text style = {styles.components.restaurantDetails.text}>Phone: {props.detail.phone}</Text>
             
         </View>
     )
 }

 export {RestaurantDetail}