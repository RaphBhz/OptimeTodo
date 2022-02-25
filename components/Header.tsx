import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

type Props = {
    title: string;
    event: () => void;
}

const Header = (props: Props) => {
  return (
    <View style={styles.header}>
        <Text style={styles.title}>{props.title}</Text>
        <Pressable style={styles.button} onPress={props.event}></Pressable>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        width: '95%',
        zIndex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        height: 70,
        marginBottom: 0,
        backgroundColor: '#FBCA6B',
        borderRadius: 15,
        shadowColor: '#666666',
        shadowRadius: 20,
        shadowOpacity: 1,
        shadowOffset: {
            height: 10,
            width: 10
        },
        textShadowRadius: 20
    },
    title: {
        fontFamily: 'RobotoMono_400Regular',
        color: '#fff',
        fontSize: 20,
    },
    button: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#F4F2E8',
    }
})