import { StyleSheet } from "react-native";

export const styles =  StyleSheet.create({
    container_main: {
         flex:1,
        //  flexDirection:'row',
         alignItems:'center'
    },
    content_container: {
         paddingVertical:20,
         paddingHorizontal:20,
         gap:20,
         width:'100%'
    
    },
    image_style: {
        height:350,
        width:'100%',
        resizeMode:'contain'
    },
    heading_text : {
        fontSize:25,
        color:'black',
        textAlign:'center', 
        fontWeight:'bold'
    },
    text_input : {
        // border:'2px solid black'
        borderWidth:1,
        borderStyle:'solid',
        borderColor:'gray',
        borderRadius:10,
        paddingHorizontal:10
        
    },
    button : {
        // border:'2px solid black'
        borderRadius:10,
        backgroundColor:'black',
        paddingVertical:18,
        color:'white'

    },
    button_text : {
        // border:'2px solid black'
        color:'white',
        textAlign:'center',
        fontSize:18
    },
  

})
