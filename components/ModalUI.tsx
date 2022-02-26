import { Modal, Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import React from "react";

type Props = {
    title: string;
    children?: JSX.Element|JSX.Element[];
    visible: boolean;
    setVisibility: (isVisible: boolean) => void;
    customStyle?: StyleProp<ViewStyle>;
};

const ModalUI = (props: Props) => {
  return (
    <Modal visible={props.visible} animationType='fade' transparent={true}>
        <View style={styles.centeredModal} >
            {/* ferme la modale lorqu'on appuie à l'exterieur */}
            <Pressable 
                style={{height: '100%', width: '100%', position: 'absolute'}} 
                onPress={() => props.setVisibility(false)}
            />

            <View style={[styles.modalView, props.customStyle]}>
                <View style={styles.modalHeader}>
                    <Text style={styles.textHeader}>{props.title}</Text>
                    <Pressable style={{padding: 6}} onPress={() => props.setVisibility(false)}>
                        <Text style={[{textDecorationLine: 'underline'}, styles.textHeader]}>Close</Text>
                    </Pressable>
                </View>
                {props.children}
            </View>
        </View>
    </Modal>
  );
};

export default ModalUI;

const styles = StyleSheet.create({
    centeredModal:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.74)'
    },
    modalView:{
        alignItems: "center",
        borderRadius: 15,
        width: '85%',
        maxHeight: '80%',
        backgroundColor: '#F4F2E8',
        paddingHorizontal: 30,
        paddingBottom: 15
    },
    modalHeader:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginTop: 15
    },
    textHeader:{
        fontWeight: '200',
        color: '#666666',
        fontSize: 20,
    }
});
