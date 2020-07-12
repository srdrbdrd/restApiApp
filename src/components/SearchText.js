import React from 'react'
import {TextInput,View} from 'react-native'

const SearchText = props =>{
    return(
        <View>
            <TextInput style={{backgroundColor:'#a69b97'}} onChangeText = {props.onSearch} placeholder = "Search"
            />
        </View>
    )
}

export {SearchText}