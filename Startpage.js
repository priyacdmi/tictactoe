import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { create } from "react-test-renderer";

const Mainpage = ({navigation}) => {

    return (
        <>
            <View style={style.main}>
                <Pressable onPress={()=>{navigation.navigate('tictac')}}>
                    <Text style={style.txt}>Start</Text>
                </Pressable>
            </View>

        </>
    )
}
export default Mainpage;

const style = StyleSheet.create({
    main:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#ffa69e'
    },
    txt:{
        color:'black',
        fontSize:30
    }

})