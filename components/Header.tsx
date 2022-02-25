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
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        width: '90%',
        height: 70,
        marginHorizontal: 'auto',
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