import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../Container'
import Header from '../Header'
import CardNote from '../CardNote'

type Props = {}

const Home = (props: Props) => {
    return (

    <Container>
      
        <Text>Home</Text>
        <Header title="Your notes" event={() => {
            
          }}/>

        <ScrollView style={{width:'90%'}}>
          <View style={{width:'100%', height:80}}></View>

          <CardNote title='test' content='tfdshdslkjkhfdkjlslkfds' date={'25/02/2022'}/>
          <CardNote title='test' content='tfdshdslkjkhfdkjlslkfds' date={'25/02/2022'}/>
          <CardNote title='test' content='tfdshdslkjkhfdkjlslkfds' date={'25/02/2022'}/>
          <CardNote title='test' content='tfdshdslkjkhfdkjlslkfds' date={'25/02/2022'}/>
          <CardNote title='test' content='tfdshdslkjkhfdkjlslkfds' date={'25/02/2022'}/>
          <CardNote title='test' content='tfdshdslkjkhfdkjlslkfds' date={'25/02/2022'}/>
          <CardNote title='test' content='tfdshdslkjkhfdkjlslkfds' date={'25/02/2022'}/>
          <CardNote title='test' content='tfdshdslkjkhfdkjlslkfds' date={'25/02/2022'}/>

        </ScrollView>
    </Container>
)
}

export default Home

const styles = StyleSheet.create({

})