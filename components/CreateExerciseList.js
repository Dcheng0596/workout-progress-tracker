import React, { useState } from 'react';
import { FlatList } from 'react-native';
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
                        <CreateExerciseItem 
                            exerciseInput={props.exerciseInput}
                            removeExercise={() => props.removeExercise(data.item.key, props.sectionKey)}
                            sectionKey={props.sectionKey} 
                            exerciseKey={data.item.key}
                            exerciseWeighted={() => props.exerciseWeighted(data.item.key, props.sectionKey)}
                            exerciseIso={() => props.exerciseIso(data.item.key, props.sectionKey)}
                            exerciseAutoFocus={props.exerciseAutoFocus}
                            autoCorrect={props.autoCorrect}
                        />
                )}
            />
        </Collapsible>
    )
    
}


export default CreateExerciseList;