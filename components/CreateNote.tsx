import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import ModalUI from './ModalUI'
import SubmitButton from './SubmitButton'

type Props = {
    visible: boolean;
    setVisibility: (isVisible: boolean) => void;
    onChangeEvent: (newText: string) => void
}

const CreateNote = (props: Props) => {
  return (
    <ModalUI
        title='Write your note 💪'
        visible={props.visible}
        setVisibility={props.setVisibility}
        customStyle={{backgroundColor: '#fff', width: '90%', marginHorizontal: '0%'}}
    >

        <TextInput
            style={styles.textInput}
            placeholder='Here, you can start writing poetry (づ￣ 3￣)づ'
            placeholderTextColor='#a3a3a3'
            onChangeText={newText => props.onChangeEvent(newText)}
            multiline={true}
        />

        <SubmitButton
            title='Submit ✅'
            event={() => {}}
        />

    </ModalUI>
  )
}

export default CreateNote

const styles = StyleSheet.create({
    textInput:{
        width: '110%',
        marginVertical: 20,
        height: 700,
        fontSize: 15
    }
})