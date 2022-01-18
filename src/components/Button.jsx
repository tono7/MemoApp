import { string } from "prop-types";
import React from "react"
import {View, Text, StyleSheet} from 'react-native'

export default function Button(props) {
    const {label} = props;
    return (
        <View style={styles.buttonContainer}>
            <Text style={styles.buttonLabel}>{label}</Text>
        </View>
    )
}

Button.prototype = {
    label: string,
};

const styles = StyleSheet.create({

    buttonContainer: {
        backgroundColor: '#467fd3',
        borderRadius: 4,
        alignSelf: 'flex-start',
        marginBottom: 24,
    },
    buttonLabel: {
        fontSize: 16,
        lineHeight:32,
        paddingVertical: 8,
        paddingHorizontal: 24,
        color: '#ffffff'
    },

});


