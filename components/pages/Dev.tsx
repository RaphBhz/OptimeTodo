import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';
import ModalUI from '../ModalUI';

function Dev({ navigation } : any) {
    
    const [modalState, setModalState] = useState(false)

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Dev screen</Text>
            <Button
                title='Home'
                onPress={() => navigation.navigate('Home')}
            />
            <Button
                title='log screen'
                onPress={() => navigation.navigate('Locked')}
            />
            <Button
                title='IOS'
                onPress={() => navigation.navigate('Ios')}
            />
            <Button
                title='ANDROID'
                onPress={() => navigation.navigate('Android')}
            />
            <ModalUI title='Test modal' setVisibility={setModalState} visible={modalState}>
                <Text>CHILDREN COMPONENT</Text>
            </ModalUI>
            <Button title='Test modal' onPress={() => setModalState(true)}/>
        </View>
    );
}

export default Dev;