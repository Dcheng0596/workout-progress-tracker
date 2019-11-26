import React, { useState } from 'react';
import { StyleSheet, TouchableHighlight, FlatList } from 'react-native';
import Collapsible from 'react-native-collapsible';
import CreateExerciseItem from './CreateExerciseItem'

const CreateExerciseList = props => {
    return (
        <Collapsible collapsed={props.collapsed}>
            <FlatList
                keyboardDismissMode='on-drag'
                data={props.exercises}
                extraData={props}
                keyExtractor={data => data.key}
                renderItem={ (data) => (
                    <TouchableHighlight 
                        style={styles.rowFront}
                        underlayColor={'grey'} 
                        onPress={() => {}}>
                        <CreateExerciseItem 
                            onChange={props.onChange} 
                            itemKey={data.key} 
                            autoFocus={props.autoFocus}
                            autoCorrect={props.autoCorrect}
                        />
                    </TouchableHighlight>
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
    },
    rowBack: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 20,
        paddingRight: 60
    }
});

export default CreateExerciseList;