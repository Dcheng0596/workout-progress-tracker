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
                        title={data.name}
                        style={styles.rowFront}
                    />
                )}
            />
        </Collapsible>
    )
    
}

const styles = StyleSheet.create({
    rowFront: {
        alignItems: 'flex-start',
        backgroundColor: '#CCC',
        borderBottomColor: 'black',
        borderRadius: 5,
        justifyContent: 'center',
        marginHorizontal: 50,
        marginTop: 10,
        height: 90,
    }
});

export default ViewExerciseList;