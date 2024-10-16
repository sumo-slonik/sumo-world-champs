import React from 'react'
import { View, Text} from 'react-native'
import {DrawerContentScrollView, DrawerItem, DrawerItemList} from "@react-navigation/drawer";
import {buttonBackgroundColor, styles} from "@/components/custom_components/myStyles";
const CustomDrawer = (props) => {
    return (
        <View style={{flex: 1, backgroundColor: buttonBackgroundColor}}>
            <View style={{marginTop: 30 ,flex: 1}}>
                <Text style={styles.menuNameStyle}> Menu </Text>
            </View>

            <View style={{flex:21, marginLeft: 0}}>
                <DrawerContentScrollView {...props}>
                    <DrawerItemList {...props}/>
                </DrawerContentScrollView>
            </View>
        </View>
    )
}

export default CustomDrawer