import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function GoalItem(props) {
    return (
        <View style={styles.goalsContainer}>
            <Text style={styles.goalText}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    goalsContainer: {
        flex: 1,
        margin: 1,
        width: 350,
        
    },
    goalText: {
        flex: 0.2,
        padding: 10,
        backgroundColor: '#fff',
        padding: 6,
        marginVertical: 4,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#00ffff',
        fontSize: 14,
        color: '#333',
        marginTop: 4,
        paddingHorizontal: 30,
        marginBottom: 2,
    },
});

export default GoalItem;
