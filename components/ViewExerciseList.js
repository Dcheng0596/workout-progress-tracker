import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import Card from './Card'
import Collapsible from 'react-native-collapsible';

const ViewExerciseList = props => {
    return (
        <Collapsible collapsed={props.collapsed}>
            <FlatList
                data={props.exercises}
                keyExtractor={data => data.key}
                renderItem={ (data) => (
                    <Card 
                        title={data.item.name}
                        style={styles.container}
                    />
                )}
            />
        </Collapsible>
    )
    
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        borderBottomColor: 'black',
        borderRadius: 5,
        justifyContent: 'center',
        marginHorizontal: 50,
        marginTop: 20,
        height: 100,
    },
});

export default ViewExerciseList;