import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alaert, Alert } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function MemoList() {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity
             style={styles.memoListItem}
             onPress={() => { navigation.navigate( 'MemoDetail'); }}
            >
                <View>
                    <Text style={styles.memoListItemTile}>買い物リスト</Text>
                    <Text style={styles.memoListItemDate}>2021年11月12日</Text>
                </View>
                <TouchableOpacity
                    style={styles.memoDelete}
                    onPress={() => Alert.alert('Are you sure?')}
                >
                    <Feather name="x" size={24} color="#b0b0b0" />
                </TouchableOpacity>
            </TouchableOpacity>

        </View>
    );
}


const styles = StyleSheet.create({
    memoListItem: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',               // 横並び指定
        justifyContent: 'space-between',    // 間にスペース
        paddingVertical: 16,
        paddingHorizontal: 19,
        alignItems: 'center',                // 上下方向揃え
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.15)'
    },
    memoListItemTile: {
        fontSize: 16,
        lineHeight: 32,
    },
    memoListItemDate: {
        fontSize: 12,
        lineHeight: 16,
        color: '#848484',
    },
    memoListItemDelete: {
      fontSize: 22,
      color: '#848484',
    },
    memoDelete: {
        padding: 8,
    },
});
