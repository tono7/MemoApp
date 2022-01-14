import React from "react";
import {View, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';

import AppBar from "../components/AppBar";
import CircleButton from "../components/CircleButton";
import KeyboardSafeView from "../components/KeyboardSafeView";

export default function MemoEditScreen() {
    return (
        <KeyboardSafeView style={styles.container}>
            <AppBar />
            <View style={styles.inputcontainer}>
                <TextInput value="買い物リスト" multiline style={styles.input} />
            </View>
            <CircleButton name="check" />
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
