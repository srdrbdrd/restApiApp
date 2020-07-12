import React, { useEffect,useState,useContext } from 'react'
import {SafeAreaView,View,Text,FlatList,Image} from 'react-native'
import RestaurantDetails from './RestaurantDetails'
import axios from 'axios'
import Context from '../context/store'
import {RestaurantItem,SearchText} from '../components'
import styles from '../styles'
const RestaurantList = props => {
    const { state, dispatch } = useContext(Context)
    const [restaurants,setRestaurant] = useState([])
    const [tempRestaurant,setTempRes] = useState([])
    
    useEffect(() => {fetchData()},[])

    const fetchData = async () => {
        let response = await axios.get("http://opentable.herokuapp.com/api/restaurants?city="+state.selectedCity)
        setRestaurant(response.data.restaurants)
        setTempRes(response.data.restaurants)
        
    }


    const resSearch = (text) =>{
        let resArr = restaurants.filter((item) =>{
            const itemVal = item.name.toUpperCase()
            const textVal = text.toUpperCase()

            return itemVal.indexOf(textVal) > -1
        })

        setTempRes(resArr)
    }


    function selectRestaurant (restaurantId){
        dispatch({type:"SET_SELECTED_RESTAURANT",restaurantId})
        //console.warn(state.selectedRestaurant)
        props.navigation.navigate("RestaurantDetailPage")
    }


    const renderRestaurants = ({item}) => <RestaurantItem restaurantData = {item} onResSelect = {() => selectRestaurant(item.id)} />
    return (
        <SafeAreaView style = {{flex:1}}>
            <View style = {{flex:1}}>
                <SearchText onSearch = {resSearch} />
                <Text style = {styles.pages.cityList.selectCityText}>{state.selectedCity} Restaurants</Text>
                <FlatList
                keyExtractor = {(item,index) => index.toString()}
                data = {tempRestaurant}
                renderItem = {renderRestaurants}
                
                
                />
            </View>
        </SafeAreaView>
        
    )
}


export  {RestaurantList}