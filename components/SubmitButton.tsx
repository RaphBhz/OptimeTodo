import { StyleSheet, Pressable, Button, Text, StyleProp, ViewStyle} from 'react-native'
import React, {useState} from 'react'
 
type Props = {
    title: string;
    event: () => void;
    customStyle?: StyleProp<ViewStyle>;
}
 
const SubmitButton = (props: Props) => {
    return(
        <Pressable 
            style={({pressed}) =>[
                {backgroundColor: pressed ? "#FFD78A" : "#FBCA6B"},
                styles.button,
                props.customStyle
            ]} 
            onPress={props.event}>
            <Text style={styles.title}>{props.title}</Text>
        </Pressable>
    )
}
 
export default SubmitButton
 
const styles = StyleSheet.create({
    button:{
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 10,
        width: 242,
        height: 48,
        margin: 10
    },
    title:{
        textAlign: 'center',
        color: '#F4F2E8',
        fontSize: 25
    }                   
})       