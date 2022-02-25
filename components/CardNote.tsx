import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    title: string;
    content: string;
    date: string;
    color?: string;
}

const cards = (props: Props) => {
    var color = props.color ? props.color : '#fff'

    return (
        <View style={[styles.container, {backgroundColor: color}]}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{props.title}</Text>
                <Text style={styles.headerText}>{props.date}</Text>
            </View>
            <Text style={styles.content}>
                {/* todo cut le content en 60 char */}
                {props.content}
            </Text>
        </View>
    )
}

export default cards

const styles = StyleSheet.create({
    container:{
        borderRadius: 15,
        width: '100%',
        padding: 20,
        marginBottom: 10
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    headerText:{
        fontStyle: 'normal',
        fontWeight: '200',
        color: '#202020',
        fontSize: 20,    
    },
    content:{
        fontStyle: 'normal',
        fontWeight: '200',
        color: '#666666',
        fontSize: 15,    
    }
})