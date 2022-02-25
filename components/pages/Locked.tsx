import React, {useState}from 'react';
import { Image, View, Text, StyleSheet, Button, Modal, Pressable, TextInput, Alert} from 'react-native';
import Container from '../Container';
import ModalUI from '../ModalUI';
import SubmitButton from '../SubmitButton';
import UserInput from '../UserInput';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

function connection() {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

type Props = {};

const Locked = (props: Props) =>{
  const [loginModalOpen, setLoginModalState] = useState(false);
  const [RegisterModalOpen, setRegisterModalState] = useState(false);
  const [loginUsername, onChangeLoginUsername] = useState("");
  const [registerUsername, onChangeRegisterUsername] = useState("");

  return(
    <Container>

      <ModalUI title='Login' setVisibility={setLoginModalState} visible={loginModalOpen}>
        <UserInput title="Username" onChange={() => onChangeLoginUsername}/>
        <UserInput title="Password" secureText={true} onChange={() => onChangeLoginUsername}/>
        <SubmitButton title='Login' event={() => Alert.alert(loginUsername)}/>
      </ModalUI>
      
      <ModalUI title='Register' setVisibility={setRegisterModalState} visible={RegisterModalOpen}>
        <UserInput title="Username" onChange={() => onChangeLoginUsername}/>
        <UserInput title="Password" secureText={true} onChange={() => onChangeLoginUsername}/>
        <UserInput title="Confirm password" secureText={true} onChange={() => onChangeLoginUsername}/>
        <SubmitButton title='Register' event={() => setRegisterModalState(false)}/>
      </ModalUI>

      <Image
        style={styles.logo}
        source={require('../../assets/pencil.png')}
      />
      <Text style={styles.appName}>TouDou</Text>
      <Text style={styles.slogan}>Your personal {"\n"} note taker</Text>

      <SubmitButton title='Login' event={() => setLoginModalState(true)}/>

      <Text style={styles.paragraph}>Create and Account</Text>
      <Button title='Register !' onPress={() => setRegisterModalState(true)}/>

      <Text style={styles.slogan}>Join TouDou now ! ❤ {'\n'} (☞ﾟヮﾟ)☞</Text>
    </Container>
  );
}

export default Locked;

const styles = StyleSheet.create({
  logo: {
    height: 150,
    width: 150,
  },
  appName: {
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: 'normal',
    textDecorationLine: 'underline',
    color: '#202020',
    fontSize: 40,
    marginTop: 15
  },
  slogan: {
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: '200',
    color: '#666666',
    fontSize: 30,
    marginTop: 20,
  },
  paragraph: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 5,
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#666666',
    fontSize: 20,
  },
});