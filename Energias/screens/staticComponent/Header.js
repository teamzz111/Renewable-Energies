import React, { Component } from 'react';
import { Platform, Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import { Header } from "react-navigation";

const CmpHeader = props =>  {
        return (
            <View >
                <View style={styles.header}>
                    <View style={styles.zonaLogo}>
                        <View style={{ width: '18%' }}>
                            <TouchableOpacity onPress={this.onclick} style={styles.touchable}>
                                <Image source={require('../../resources/img_logo_header.png')} style={styles.imgHeader} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '70%' }}>
                            <Header {...props} />
                        </View>
                    </View>
     
                </View>
                
            </View>
        )
    }


const styles = StyleSheet.create({
    header:
    {
        width: '100%', height: 60, backgroundColor: '#FF0010', flexDirection: 'row', alignItems: 'center',
        marginTop: Platform.OS === 'ios' ? 20 : 0,
    },
    color:
        { color: 'white', fontSize: 1.8},
    touchable:
        { width: '100%', height: '100%', justifyContent: 'center' },
    imgHeader:
        { width: '100%', height: '100%', maxWidth: 50, maxHeight: 50, marginLeft: 4 },
    zonaLogo:
        { width: '100%', flexDirection: 'row', height: '100%', alignItems: 'center', alignContent: 'center' },
    texto:
        { color: 'white', fontSize: Platform.OS === 'ios' ? 15  : 15.3 }
})
export default CmpHeader 