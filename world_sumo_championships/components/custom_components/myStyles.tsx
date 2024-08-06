import {View, Text, StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    defaultBackground: {
        backgroundColor: "#E1AD9C",
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
    },
    mapStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: "#2C130E",
        borderRadius: 3,
        borderWidth: 1,
        backgroundColor: "#2C130E",
        padding: 1,
        elevation: 5
    },
})