import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    title: string;
    content: string;
    date: string;
    setVisibility: (isVisible: boolean) => void;
}

const NotePreview = (props: Props) => {
    return (
        <Pressable style={({pressed}) => [
            styles.container,
            {backgroundColor: pressed ? 'rgba(200, 200, 200, 0.2)' : 'rgba(255, 255, 255, 1)'}]}
            onPress={() => {props.setVisibility(true)}}
        >
            <View style={styles.header}>
                <Text style={styles.headerText}>{props.title}</Text>
                <Text style={styles.headerDate}>{props.date}</Text>
            </View>
            <Text style={styles.content}>
                {/* todo cut le content en 60 char */}
                {props.content}
            </Text>
        </Pressable>
    )
}

export default NotePreview

const styles = StyleSheet.create({
    container:{
        borderRadius: 15,
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
        fontFamily: 'RobotoMono_400Regular',
        color: '#202020',
        fontSize: 18,    
    },
    headerDate:{
        fontStyle: 'normal',
        fontFamily: 'RobotoMono_400Regular_Italic',
        letterSpacing: -1,
        color: '#909090',
        fontSize: 12,    
    },
    content:{
        fontStyle: 'normal',
        fontWeight: '200',
        color: '#666666',
        fontSize: 15,    
    }
})