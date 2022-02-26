import React from 'react';
import { View, Text, Button } from 'react-native';

function Dev({ navigation } : any) {
    
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
        </View>
    );
}

export default Dev;