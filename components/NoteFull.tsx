import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ModalUI from './ModalUI';

type Props = {
    title: string;
    content: string;
    date: string;
    visible: boolean;
    setVisibility: (isVisible: boolean) => void;
}

const NoteFull = (props: Props) => {
    return (
        <ModalUI
            title={props.title}
            visible={props.visible}
            setVisibility={props.setVisibility}
            customStyle={{backgroundColor: '#fff', width: '90%'}}
        >   
            <ScrollView style={styles.contentView}>
                <Text style={styles.contentText}>{props.content}</Text>
            </ScrollView>

            <View style={styles.footer}>
                    <Text style={styles.dateText}>{props.date}</Text>
               
                <Pressable 
                    style={({pressed}) => [
                        {backgroundColor: pressed ? '#e3e3e3' : '#fff'}, 
                        styles.delete
                    ]}
                    onPress={() => {}}
                >
                    <Text style={{fontSize: 20}}>🗑</Text>
                </Pressable>
            </View>
        </ModalUI>
    )
}

export default NoteFull

const styles = StyleSheet.create({
    contentText: {
        marginVertical: 5,
        width: '100%',
        fontStyle: 'normal',
        fontWeight: '200',
        color: '#202020',
        fontSize: 17,
        textAlign: 'justify'
    },
    contentView:{
        width: '100%',
        marginTop: 15,
        marginBottom: 15,
        paddingRight: 10
    },
    footer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dateText: {
        fontStyle: 'normal',
        fontWeight: '200',
        color: '#202020',
        fontSize: 15,
    },
    delete: {
        padding: 10,
        margin: 3,
        borderRadius: 100,
    }
})