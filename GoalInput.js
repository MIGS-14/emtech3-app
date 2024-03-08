import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function GoalInput(props) {
    const [enteredGoalText, setEnteredText] = useState('');

    function textInputHandler(enteredText) {
        setEnteredText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder='Your course goal!'
                style={styles.textInput}
                onChangeText={textInputHandler}
                value={enteredGoalText}
            />
            <Button title='Add Goal' onPress={addGoalHandler} />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 16,
        marginBottom: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.😎',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    textInput: {
        flex: 0.95,
        fontSize: 15,
        color: '#000080',
        padding: 6,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#b3d9ff',
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 7,
        width: 250,
    },
});

export default GoalInput;