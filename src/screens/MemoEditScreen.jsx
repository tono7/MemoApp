import React, { useState } from 'react';
import {View, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView';
import { shape, string } from 'prop-types';
import firebase from 'firebase';
export default function MemoEditScreen(props) {
    const { navigation, route } = props;
    const { id, bodyText } = route.params;
    const [ body, setBody ] = useState(bodyText);

    function handlePress() {
        const { currentUser } = firebase.auth();
        console.log ('call handlePress!');
        if (currentUser){
            const db = firebase.firestore();
            const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
            ref.set({
                bodyText: body,
                updatedAt: new Date(),
            }, {merge: true })
                .then(() => {
                    navigation.goBack();
                })
                .catch((error) => {
                    Alert.alert(error.code);
                });
        }
    }

    return (
        <KeyboardSafeView style={styles.container}>
            <View style={styles.inputcontainer}>
                <TextInput
                    value={body}
                    multiline
                    style={styles.input}
                    onChangeText={(text) => {setBody(text); }}
                />
            </View>
            <CircleButton
                name="check"
                onPress={handlePress}
            />
        </KeyboardSafeView>
    );
}

MemoEditScreen.prototype = {
    route:  shape({
        params: shape({ id: string, bodyText: string}),
    }).isRequired,
};

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
