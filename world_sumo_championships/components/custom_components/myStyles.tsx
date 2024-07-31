import {View, Text, StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    defaultBackground: {
        backgroundColor: "#E1AD9C",
        // backgroundColor: "#B87F70",
        flex: 1
    },
    headerTextStyle: {
        color: "#E1AD9C",
        textAlign: 'center',
        fontFamily: 'Roboto-Regular',
        fontWeight: 'bold',
    },
    drawerMenuTextStyle: {
        borderRadius:0,
        fontFamily: 'Roboto-Regular',
        fontWeight: 'bold'
    },
    drawerItemStyle:{
        borderTopWidth: 1,
        borderColor: 'black',
        width: '100%'
    },
    menuNameStyle: {
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'Roboto-Regular',
    }


})