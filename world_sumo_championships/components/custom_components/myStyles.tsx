import {View, Text, StyleSheet} from 'react-native'

export const defaultTextColor = 'white'
export const chosenTextColor = "#E1AD9C"
export const buttonBackgroundColor = "#931807"
export const chosenButtonColor ="#2C130E"
export const gradientColors = ["#ab7668","#e8b3a2"]

const basicTextColor ='black'

const myFont = 'Roboto'

export const styles = StyleSheet.create({
    defaultBackground: {
        backgroundColor: 'transparent',
        flex: 1,
    },
    headerTextStyle: {
        color: chosenTextColor,
        textAlign: 'center',
        fontFamily: myFont,
        fontWeight: 'bold',
    },
    drawerMenuTextStyle: {
        borderRadius:0,
        fontFamily: myFont,
        fontWeight: 'bold',
        color: chosenTextColor
    },
    drawerItemStyle:{
        borderTopWidth: 1,
        borderColor: 'black',
        width: '100%'
    },
    menuNameStyle: {
        textAlign: 'center',
        fontSize: 30,
        fontFamily: myFont,
    },
    mapStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: chosenButtonColor,
        borderRadius: 3,
        borderWidth: 1,
        backgroundColor: chosenButtonColor,
        padding: 1,
        elevation: 5
    },
    harmonogramStyle: {
        justifyContent: 'center',
        borderColor: chosenButtonColor,
        borderRadius: 3,
        borderWidth: 1,
        backgroundColor: buttonBackgroundColor,
        padding: 10,
        marginVertical: 1,
        marginHorizontal: 1


    },
    chosenHarmonogramStyle: {
        justifyContent: 'center',
        borderColor: "black",
        borderRadius: 3,
        borderWidth: 1,
        backgroundColor: chosenButtonColor,
        padding: 10,
        marginVertical: 1
    },
    harmonogramText:{
        borderRadius:0,
        fontFamily: myFont,
        fontWeight: 'bold',
        color: defaultTextColor
    },
    chosenHarmonogramText: {
        borderRadius:0,
        fontFamily: myFont,
        fontWeight: 'bold',
        color: chosenTextColor
    },
    normalText:{
        borderRadius:0,
        fontFamily: myFont,
        fontWeight: 'bold',
        color: basicTextColor
    }



})