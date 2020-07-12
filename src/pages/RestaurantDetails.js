import React, { useContext, useState, useEffect } from 'react'
import {SafeAreaView,View,Text,TouchableOpacity, Dimensions, Linking} from 'react-native'
import axios from 'axios'
import {RestaurantDetail, RestaurantItem} from '../components'
import styles from '../styles'
const RestaurantDetails = props => {

    const {state,dispatch} = useContext(Context)
    const [restaruntDetails,setRestaurantDetails] = useState([])

    useEffect (() => {fetchData()},[])

    const fetchData = async () =>{
        let {data} = await axios.get("http://opentable.herokuapp.com/api/restaurants/"+state.selectedRestaurant)
        setRestaurantDetails(data)
        //console.warn(state.selectedRestaurant)
    }

 




    return(
        
            <View style = {{flex:1}}>
            
            <RestaurantDetail detail = {restaruntDetails}/>
            <View style={{alignSelf:'center'}}>
                    <TouchableOpacity onPress = {() => Linking.openURL(restaruntDetails.mobile_reserve_url)}>
                
                    <Text style = {styles.pages.resDetail.reservationText}> Reservation</Text>
                    </TouchableOpacity>
                </View>
            </View>
        
    )
}

export  {RestaurantDetails}