import React, { useEffect, useState, useContext } from 'react'
import {View,Text,SafeAreaView,FlatList} from 'react-native'
import axios from 'axios'
import {CityItem,SearchText} from '../components'
import styles from '../styles'
import Context from '../context/store'

const CityList = props => {
    
    const {state,dispatch} = useContext(Context)
    const [list,setList] = useState([])
    const [tempList,setTempList] = useState([])
    useEffect(() =>{ fecthData() },[])

    const fecthData = async () => {
        let {data} = await axios.get("http://opentable.herokuapp.com/api/cities")
        setList(data.cities)
        setTempList(data.cities)
    }

    function selectCity(city){
        dispatch({type:"SET_SELECTED_CITY",city})
        //console.warn(state.selectedCity)
        props.navigation.navigate("RestaurantListPage")
    }

    const citySearch = (text) =>{
        
        let filteredList = list.filter((item) => {
         
            const itemVal = item.toUpperCase()
            const textVal = text.toUpperCase()

            return itemVal.indexOf(textVal)>-1
        }
        )
        setTempList(filteredList)
    }
    
    const renderCities = ({item}) => <CityItem cityName = {item} onCitySelect = {() => selectCity(item)} />
            
    
    
    return (
        <SafeAreaView style = {{flex:1}}>
            <View style = {{flex:1}}>
                <SearchText onSearch = {citySearch} />
                <Text style = {styles.pages.cityList.selectCityText}>City</Text>

                <FlatList 
                    keyExtractor = {(_,index) => index.toString()}
                    data = {tempList}
                    renderItem = {renderCities}
                
                />
            </View>
        </SafeAreaView>
    )
}


export {CityList}