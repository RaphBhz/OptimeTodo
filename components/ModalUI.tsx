import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
    title: string;
    children?: JSX.Element|JSX.Element[];
    visible: boolean;
    setVisibility: (isVisible: boolean) => void;
};

const ModalUI = (props: Props) => {
  return (
    <Modal visible={props.visible} animationType='fade' transparent={true}>
        <View style={styles.centeredModal}>
            <View style={styles.modalView}>
                <View style={styles.modalHeader}>
                    <Text style={styles.textHeader}>{props.title}</Text>
                    <Pressable onPress={() => props.setVisibility(false)}>
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
        backgroundColor: '#F4F2E8',
        padding: 20,
        width: '80%',
    },
    modalHeader:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        marginBottom: 15
    },
    textHeader:{
        fontWeight: '200',
        color: '#666666',
        fontSize: 20,
    }
});
