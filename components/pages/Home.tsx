import { StyleSheet, Text } from 'react-native'
import React from 'react'
import Container from '../Container'
import Header from '../Header'

type Props = {}

const Home = ({ navigation } : any, props: Props) =>  {
    return (

    <Container>
        <Header title="Your notes" event={() => {
            navigation.navigate('Dev')
        }}/>
        <Text>Home</Text>
    </Container>
  )
}

export default Home

const styles = StyleSheet.create({

})