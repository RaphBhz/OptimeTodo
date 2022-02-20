import React, {useState}from 'react';
import { Image, View, Text, StyleSheet, Button, Modal, Pressable, TextInput} from 'react-native';
import Container from '../Container';
import ModalUI from '../ModalUI';
import SubmitButton from '../SubmitButton';
import UserInput from '../UserInput';

type Props = {};

const Locked = (props: Props) =>{
  const [loginModalOpen, setLoginModalState] = useState(false);
  const [RegisterModalOpen, setRegisterModalState] = useState(false);


  return(
    <Container>

      <ModalUI title='Login' setVisibility={setLoginModalState} visible={loginModalOpen}>
        <UserInput title="Username"/>
        <UserInput title="Password" secureText={true}/>
        <SubmitButton title='Login' event={() => setLoginModalState(false)} customStyle={{marginTop: 50}}/>
      </ModalUI>
      
      <ModalUI title='Register' setVisibility={setRegisterModalState} visible={RegisterModalOpen}>
        <UserInput title="Username"/>
        <UserInput title="Password" secureText={true}/>
        <UserInput title="Confirm password" secureText={true}/>
        <SubmitButton title='Login' event={() => setRegisterModalState(false)} customStyle={{marginTop: 30}}/>
      </ModalUI>

      <Image
        style={styles.logo}
        source={require('../../assets/icon.png')}
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
    height: 212,
    width: 212,
  },
  appName: {
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: 'normal',
    textDecorationLine: 'underline',
    color: '#202020',
    fontSize: 40
  },
  slogan: {
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: '200',
    color: '#666666',
    fontSize: 30,
    marginTop: 20,
    marginBottom: 100
  },
  paragraph: {
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 5,
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#666666',
    fontSize: 20,
  },
  centeredModal:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 90,
    backgroundColor: 'rgba(0, 0, 0, 0.74)'
  },
  modalView:{
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: '#F4F2E8',
    padding: 20,
    width: '80%',
    height: '50%'
  },
  modalHeader:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 30
  },
  textHeader:{
    fontWeight: '200',
    color: '#666666',
    fontSize: 20,
  }
});