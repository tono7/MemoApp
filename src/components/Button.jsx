import React from "react"
import {TouchableOpacity, Text, StyleSheet} from 'react-native'
import { string, func } from "prop-types";

export default function Button(props) {
    const { label, onPress} = props;
    return (
        <TouchableOpacity style={styles.buttonContainer} onProps={onPress}>
            <Text style={styles.buttonLabel}>{label}</Text>
        </TouchableOpacity>
    )
}

Button.prototype = {
    label: string.isRequired,
    onPress: func,
};

Button.defaultProps = {
    onPress: null,
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


