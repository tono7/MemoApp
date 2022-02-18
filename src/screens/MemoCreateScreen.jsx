import React, { useState } from "react";
import {View, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';

import AppBar from "../components/AppBar";
import CircleButton from "../components/CircleButton";
import KeyboardSafeView from "../components/KeyboardSafeView";
import { NavigationContainer } from "@react-navigation/native";
import firebase from 'firebase';

export default function MemoCreateScreen(props) {
    const { navigation } = props;
    const [bodyText, setBodyText] = useState('');

    function handlePress() {
        const { currentUser } = firebase.auth();
        const db = firebase.firestore();
        const ref = db.collection(`users/${currentUser.uid}/memos`);
        ref.add ({
            bodyText: bodyText,
            updatedAt: new Date(),
        })
            .then(docRec => {
                console.log('Created!', docRec.id);
                navigation.goBack();
            })
            .catch((error) => {
                console.log('Error!', error);
            });
    }

    return (
        <KeyboardSafeView style={styles.container} >
            <View style={styles.inputcontainer}>
                <TextInput
                 value={bodyText}
                 multiline
                 style={styles.input}
                 onChangeText={(text) => setBodyText(text)}
                 autoFocus={true}
                />
            </View>
            <CircleButton
             name="check"
             onPress={ handlePress }
            />
        </KeyboardSafeView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputcontainer: {
        paddingVertical: 32,
        paddingHorizontal: 27,
        flex: 1,
    },
    input: {
        flex: 1,
        textAlignVertical: 'top',
        fontSize: 16,
        lineHeight: 24,
    },
});
