import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../Container'
import Header from '../Header'
import CardNote from '../CardNote'
import SubmitButton from '../SubmitButton'

type Props = {}

const Home = ({ navigation }: any, props: Props) => {
    return (

        <Container>

            <Header title="Your notes" event={() => {

            }} />

            <ScrollView style={{ width: '90%'}}>
                <View style={{ width: '100%', height: 10 }}></View>

                <CardNote title='test' content='tfdshdslkjkhfdkjlslkfds' date={'25/02/2022'} />
                <CardNote title='test' content='tfdshdslkjkhfdkjlslkfds' date={'25/02/2022'} />
                <CardNote title='test' content='tfdshdslkjkhfdkjlslkfds' date={'25/02/2022'} />
                <CardNote title='test' content='tfdshdslkjkhfdkjlslkfds' date={'25/02/2022'} />
                <CardNote title='test' content='tfdshdslkjkhfdkjlslkfds' date={'25/02/2022'} />
                <CardNote title='test' content='tfdshdslkjkhfdkjlslkfds' date={'25/02/2022'} />
                <CardNote title='test' content='tfdshdslkjkhfdkjlslkfds' date={'25/02/2022'} />
                <CardNote title='test' content='tfdshdslkjkhfdkjlslkfds' date={'25/02/2022'} />
                <CardNote title='test' content='tfdshdslkjkhfdkjlslkfds' date={'25/02/2022'} />
                <CardNote title='test' content='tfdshdslkjkhfdkjlslkfds' date={'25/02/2022'} />

            </ScrollView>

            <SubmitButton 
                title='📃 Write a note'
                customStyle={styles.addNoteButton}
                event={ () => {}}
            />
        </Container>
    )
}

export default Home

const styles = StyleSheet.create({
    addNoteButton: {
        width: '95%',
        height: 45,
        marginTop: 0
    }
})