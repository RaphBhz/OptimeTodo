import { ScrollView, StyleSheet, View } from 'react-native'
import React, {useState} from 'react'
import Container from '../Container'
import Header from '../Header'
import SubmitButton from '../SubmitButton'
import NotePreview from '../NotePreview'
import ModalUI from '../ModalUI'
import NoteFull from '../NoteFull'

type Props = {}

const Home = ({ navigation }: any, props: Props) => {

    {/* dynamiquement */}
    const [noteFullLongState, setNoteFullLongState] = useState(false);
    const [noteFullShortState, setNoteFullShortState] = useState(false);


    return (
        <Container>
            
            {/* dynamiquement */}
            
            <NoteFull 
                title='Lorem' 
                content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non ex lacus. Mauris hendrerit orci ac urna tempor bibendum. Donec non augue pharetra, rutrum diam in, sagittis lectus. Nulla lacinia sem a neque malesuada, at sodales ante fermentum. Phasellus aliquam eros sed lacus aliquet, ac pretium elit rhoncus. Aliquam vulputate nibh a dolor tempus, a luctus tellus iaculis. Donec bibendum, enim et tempor ullamcorper, mauris nibh sodales enim, non venenatis tellus sapien et neque. In hac habitasse platea dictumst. Aliquam at ipsum quis massa sollicitudin commodo eu eget nulla. Aliquam diam sapien, egestas at est vel, rhoncus bibendum arcu. Integer fringilla arcu nec augue sodales venenatis. Suspendisse potenti. Suspendisse metus leo, feugiat eget libero in, ullamcorper facilisis nisi. Fusce tempus urna a interdum dignissim. Etiam sit amet nisi libero. Etiam nulla justo, porttitor vitae ullamcorper vel, dictum ac quam.

                Pellentesque tincidunt scelerisque magna, a finibus erat sollicitudin sit amet. Sed cursus libero dolor, eu malesuada neque rutrum tincidunt. Cras condimentum lacus quis placerat tristique. Aliquam sodales vitae ipsum eu scelerisque. Nunc cursus urna consequat, luctus ligula ut, viverra sapien. Vivamus tincidunt erat dolor, nec facilisis nunc tempor et. Nulla sodales erat non quam mattis ultrices. Fusce sodales dui sit amet semper aliquet. Vivamus feugiat ex et eleifend dapibus. Sed feugiat dolor in nisl eleifend, eget faucibus nisl finibus.
                
                Nunc non tellus convallis, varius augue at, viverra sem. Proin pretium mattis dictum. Phasellus interdum nibh nec scelerisque faucibus. Nulla facilisi. Praesent in commodo nulla, sit amet vulputate dolor. In est urna, molestie vitae dictum nec, sagittis quis nulla. Morbi tristique, lorem a malesuada euismod, diam augue hendrerit nisi, ut ultrices libero nunc in dui. Donec lacinia accumsan turpis nec rutrum. Cras ultrices tincidunt urna, sed imperdiet lectus mollis in. Phasellus vitae eros egestas, laoreet nisl in, sodales ligula. Suspendisse pharetra arcu at nibh sodales, vitae volutpat dolor porttitor. Aliquam viverra pellentesque diam, consequat viverra odio egestas eget. Praesent vel venenatis est, et vulputate enim. Suspendisse consequat, ex id venenatis mollis, neque mauris dignissim arcu, id pretium augue nibh mattis ipsum. Ut sollicitudin placerat ante, pellentesque feugiat orci dapibus et. Sed at neque et eros venenatis sagittis quis vitae mauris.
                
                Aenean facilisis arcu a velit eleifend rutrum. Praesent nec ligula id urna feugiat fermentum. Curabitur sit amet dui et libero luctus blandit vitae et metus. Vestibulum nunc mi, fermentum ac varius eget, dignissim sed ante. Nunc ut est diam. Sed eu vestibulum lacus, a vestibulum velit. Maecenas ipsum sapien, volutpat sit amet elit molestie, gravida rhoncus tortor. Etiam vestibulum sollicitudin placerat. Etiam sodales mi eu augue imperdiet, vel hendrerit massa imperdiet. Donec placerat, ex et euismod volutpat, nisl tortor mattis risus, at eleifend eros mi id velit. Maecenas facilisis viverra purus, eget varius augue cursus et. Integer sagittis imperdiet sem, ut faucibus lacus euismod nec. Vestibulum ultricies non metus eu posuere.
                
                 ' 
                date='20/12/1972' 
                visible={noteFullLongState} 
                setVisibility={setNoteFullLongState}
            />

            <NoteFull 
                title='Lorem' 
                content='Lorem ipsum ' 
                date='20/12/1972' 
                visible={noteFullShortState} 
                setVisibility={setNoteFullShortState}
            />

            <Header title="Your notes" event={() => {}} icon="⚙️" />

            <ScrollView style={styles.container}>
                <View style={styles.emptySpace}/>

                {/* dynamiquement */}
                <NotePreview 
                    title='Lorem long' 
                    content='Lorem ipsum dolor sit amet ' 
                    date='25/02/2022'
                    setVisibility={setNoteFullLongState}
                />

                <NotePreview 
                    title='Lorem short' 
                    content='Lorem ipsum dolor sit amet ' 
                    date='25/02/2022'
                    setVisibility={setNoteFullShortState}
                />

                <NotePreview 
                    title='empty' 
                    content='empty' 
                    date='no date'
                    setVisibility={() => {}}
                />
                <NotePreview 
                    title='empty' 
                    content='empty' 
                    date='no date'
                    setVisibility={() => {}}
                />  
                <NotePreview 
                    title='empty' 
                    content='empty' 
                    date='no date'
                    setVisibility={() => {}}
                />  
                <NotePreview 
                    title='empty' 
                    content='empty' 
                    date='no date'
                    setVisibility={() => {}}
                /> 
                <NotePreview 
                    title='empty' 
                    content='empty' 
                    date='no date'
                    setVisibility={() => {}}
                />  
                <NotePreview 
                    title='empty' 
                    content='empty' 
                    date='no date'
                    setVisibility={() => {}}
                />  
                <NotePreview 
                    title='empty' 
                    content='empty' 
                    date='no date'
                    setVisibility={() => {}}
                />     

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
    container:{
        width: '100%', 
        paddingHorizontal: 20,
    },
    emptySpace:{
        width: '100%', 
        height: 10
    },
    addNoteButton: {
        width: '95%',
        height: 45,
        marginTop: 0
    }
})

