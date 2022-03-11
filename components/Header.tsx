import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

type Props = {
    title: string;
    icon: string;
    event: () => void;
}

const Header = (props: Props) => {
  return (
    <View style={styles.header}>
        <Text style={styles.title}>{props.title}</Text>
        <Pressable style={styles.button} onPress={props.event}>
            <Text style={styles.icon}>{props.icon}</Text>    
        </Pressable>
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
        shadowRadius: 30,
        shadowOpacity: 0.08,
        shadowOffset: {
            height: 6,
            width: 0
        }
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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        fontSize: 28
    }
})