import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import styles from '../styles'

const CityItem = props => {
    return(
        <TouchableOpacity style = {styles.components.cityItem.container} onPress = {props.onCitySelect}>
            <Text style = {styles.components.cityItem.text}>{props.cityName}</Text>
        </TouchableOpacity>
    )
}

export {CityItem}