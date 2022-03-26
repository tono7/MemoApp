import React from 'react';
import {
     View, Text, StyleSheet, TouchableOpacity, Alert, FlatList,
} from 'react-native'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { shape, string, instanceOf, arrayOf} from 'prop-types';
import MemoEditScreen from '../screens/MemoEditScreen';
import { dateToString } from "../utils";
import firebase from 'firebase';

export default function MemoList(props) {
    const { memos } = props;
    const navigation = useNavigation();

    function deleteMemo(id){
        const { currentUser } = firebase.auth();
        if (currentUser) {
            const db = firebase.firestore();
            const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
            Alert.alert('メモを削除します', 'よろしいですか？',[
                {
                    text: 'キャンセル',
                    onPress: () => {},
                },
                {
                    text: '削除する',
                    style: 'destructive',   // 赤字(iOS時のみ)
                    onPress: () => {
                        ref.delete().catch(() => {
                            Alert.alert('削除に失敗しました');
                        });
                    },
                },
            ]);
        }
    }

    function renderItem({item}) {
        return (
            <TouchableOpacity
                style={styles.memoListItem}
                onPress={() => { navigation.navigate( 'MemoDetail', { id: item.id}); }}
            >
                <View>
                    <Text style={styles.memoListItemTile} numberOfLines={1}>{item.bodyText}</Text>
                    <Text style={styles.memoListItemDate}>{dateToString(item.updatedAt)}</Text>
                </View>
                <TouchableOpacity
                    style={styles.memoDelete}
                    onPress={() => { deleteMemo( item.id ); }}
                >
                    <Feather name="x" size={24} color="#b0b0b0" />
                </TouchableOpacity>
            </TouchableOpacity>
        );
    }

    return (
        <View style = {styles.container}>
            <FlatList
                data={memos}
                renderItem = {renderItem}
                keyExtractor={(item) => item.id }
            />
        </View>
    );
}

MemoList.propTypes = {
    memos: arrayOf(shape({
        id: string,
        bodyText: string,
        updatedAt: instanceOf(Date),
    })).isRequired,
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
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
