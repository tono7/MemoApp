import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

export default function MemoList() {

    return (
        <View>
            <View style={styles.memoListItem}>
            <View>
                <Text style={styles.memoListItemTile}>買い物リスト</Text>
                <Text style={styles.memoListItemDate}>2021年11月12日</Text>
            </View>
            <View>
                <Text style={styles.memoListItemDelete}>x</Text>
            </View>
            </View>

            <View style={styles.memoListItem}>
            <View>
                <Text style={styles.memoListItemTile}>買い物リスト</Text>
                <Text style={styles.memoListItemDate}>2021年11月12日</Text>
            </View>
            <View>
                <Text style={styles.memoListItemDelete}>x</Text>
            </View>
            </View>

            <View style={styles.memoListItem}>
            <View>
                <Text style={styles.memoListItemTile}>買い物リスト</Text>
                <Text style={styles.memoListItemDate}>2021年11月12日</Text>
            </View>
            <View>
                <Text style={styles.memoListItemDelete}>x</Text>
            </View>
            </View>
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
});
