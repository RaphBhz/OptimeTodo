import { StyleSheet, TextInput, View} from "react-native";
import React, {useState} from "react";

type Props = {
  title: string;
  onChange: () => void;
  secureText?: boolean;
};

const UserInput = (props: Props) => {
  return (
      <TextInput 
        style={styles.input} 
        placeholder={props.title}
        placeholderTextColor='#a3a3a3'
        secureTextEntry={props.secureText}
        onChange={props.onChange}
      />
      
  );
};

export default UserInput;

const styles = StyleSheet.create({
  input:{
    borderWidth: 2,
    borderColor: '#FBCA6B',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    margin: 15,
    padding: 13,
    width: 250,
  }
});
