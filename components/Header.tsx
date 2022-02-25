import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

type Props = {
    title: string;
    event: () => void;
}

const Header = (props: Props) => {
  return (
    <View style={styles.header}>
        <Text>{props.title}</Text>
        <Pressable style={styles.button} onPress={props.event}></Pressable>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        top: 50,
        left: 0,
        right: 0,
        zIndex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        height: 70,
        margin: 10,
        backgroundColor: '#FBCA6B',
        borderRadius: 15,
    },
    button: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#F4F2E8'
    }
})