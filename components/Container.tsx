import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
    children?: JSX.Element|JSX.Element[];
};

const Container = (props: Props) => {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F4F2E8',
        flex: 1, 
        alignItems: 'center', 
    }
});
