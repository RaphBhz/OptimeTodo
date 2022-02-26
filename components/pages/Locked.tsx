import React, {useState}from 'react';
import { Image, Text, StyleSheet, Button, Alert} from 'react-native';
import Container from '../Container';
import ModalUI from '../ModalUI';
import SubmitButton from '../SubmitButton';
import UserInput from '../UserInput';

type Props = {};

const Locked = (props: Props) =>{
  const [loginModalOpen, setLoginModalState] = useState(false);
  const [RegisterModalOpen, setRegisterModalState] = useState(false);
  
  // todo: voir comment clear le buffer si la modale est fermé
  const [loginUsernameState, setLoginUsernameState] = useState('');
  const [loginPasswordState, setloginPasswordState] = useState('');
  const [RegisterUsernameState, setRegisterUsernameState] = useState('');
  const [RegisterPasswordState, setRegisterPasswordState] = useState('');
  const [RegisterConfirmPasswordState, setRegisterConfirmPasswordState] = useState('');

  return(
    <Container customStyle={{ justifyContent: 'center' }}>

      <ModalUI 
        title='Login' 
        setVisibility={setLoginModalState} 
        visible={loginModalOpen}
        customStyle={{maxHeight: '100%'}}
      >
        <UserInput title="Username" onChangeEvent={setLoginUsernameState}/>
        <UserInput title="Password" secureText={true} onChangeEvent={setloginPasswordState}/>
        <SubmitButton title='Login' event={() => Alert.alert(
          "username : " + loginUsernameState + "\n" +
          "password : " + loginPasswordState
          )}/>
      </ModalUI>
      
      <ModalUI 
        title='Register' 
        setVisibility={setRegisterModalState} 
        visible={RegisterModalOpen} 
        customStyle={{maxHeight: '100%'}}
      >
        <UserInput title="Username" onChangeEvent={setRegisterUsernameState}/>
        <UserInput title="Password" secureText={true} onChangeEvent={setRegisterPasswordState}/>
        <UserInput title="Confirm password" secureText={true} onChangeEvent={setRegisterConfirmPasswordState}/>
        <SubmitButton title='Login' event={() => Alert.alert(
          "username : " + RegisterUsernameState + "\n" +
          "password : " + RegisterPasswordState + "\n" +
          "confirmPassword" + RegisterConfirmPasswordState
          )}/>
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