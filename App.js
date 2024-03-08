import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, ImageBackground, Pressable, Modal, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);

    function addGoalHandler(enteredGoalText) {
        setCourseGoals((currentCourseGoals) => [
            ...currentCourseGoals,
            { text: enteredGoalText, key: Math.random().toString() }
        ]);
    };

    return (
        <ImageBackground
            source={require('./oki.png')}
            style={styles.backgroundImage}
        >
            <View style={styles.appContainer}>
                <GoalInput onAddGoal={addGoalHandler} />
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText} adjustFontSizeToFit={true}>
                        LIST OF GOALS
                    </Text>
                </View>
                <View style={styles.goalListContainer}>
                    <FlatList
                        data={courseGoals}
                        renderItem={({ item }) => <GoalItem text={item.text} />}
                    />
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    headerContainer: {
        borderWidth: 1,
        borderColor: "white",
        paddingVertical: 7.5,
        paddingHorizontal: 150,
        backgroundColor: '#00bfff',
        marginBottom: 20,
    },
    headerText: {
        textAlign: "center",
        width: 350,
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Arial',
    },
    goalListContainer: {
        flex: 1,
        width: '100%',
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    }
});