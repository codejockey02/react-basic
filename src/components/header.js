// Import Libraries to help make a Component
import React from 'react';
import {Text, View} from 'react-native';


// Make a Component
const Header = (props) => {
    const {textStyle, viewStyle} = styles;
    return(
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle:{
        backgroundColor:'#C9C9C9',
        justifyContent:'center',
        alignItems:'center',
        height:60,
        paddingTop:15,
        shadowColor:'#000',
        shadowOffset:{width:0, height:100},
        shadowOpacity:0.9,
        elevation:2,
        position:'relative'
    },
    textStyle:{
        fontSize:20
    }
}

// Make the Component available for the other parts of the App
export default Header;