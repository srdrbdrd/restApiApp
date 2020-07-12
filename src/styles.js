import {StyleSheet,Dimensions} from "react-native"
const deviceSize = Dimensions.get('window')

const styles = {
    components:{
        cityItem: StyleSheet.create({
            container:{
                flex:1,
                padding:10,
                margin:10,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:"#d7ccc8",
                borderRadius:20
            },
            text:{
                fontSize:20,
                fontWeight:'bold'
            },
        }),
        restaurantItem: StyleSheet.create({
            container:{
                flex:1,
                padding:10,
                margin:20,
                borderRadius:10,
                backgroundColor:'#d7ccc8',
                alignItems:'center'

            },
            image:{
                borderRadius:10,
                height:Dimensions.get('window').height / 3 ,
                width:Dimensions.get('window').width / 1.4

            },
            text:{
                fontWeight:'bold',
                fontSize:18 
            }
        }),
        restaurantDetails: StyleSheet.create({
            container:{
                flex:1,
                alignSelf:'center',
                
            
            },
            image:{
                borderRadius:10,
                height:Dimensions.get('window').height / 3 ,
                width:Dimensions.get('window').width / 1.4,
                borderColor:'#d7ccc8',
                borderWidth:5,
                margin:10
                
            },
            text:{
                backgroundColor:'#d7ccc8',
                
                padding:8,
                borderRadius:10,
                margin:10

            }
        })
        
                

    },
    pages:{
        cityList: StyleSheet.create({
            selectCityText:{
                alignSelf:'center',
                fontSize:25,
                fontWeight:'bold',
                margin:10
            }
        
        
            
                
            
        }),

        resDetail: StyleSheet.create({
            reservationText:{
                backgroundColor:'#d7ccc8',
                fontSize:20,
                fontWeight:'bold',
                margin:10,
                borderRadius:10,
                padding:12
            }
        })


    }
}


export default styles