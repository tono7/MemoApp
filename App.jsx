import React from 'react';
import { ShadowPropTypesIOS, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <View style={styles.appbarInner}>
          <Text style={styles.appbarTitle}>Memo App</Text>
          <Text style={styles.appbarRight}>ログアウト</Text>
        </View>
      </View>

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

      <View style={styles.circleButton}>
        <Text style={styles.circleButtonLabel}>＋</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  appBar: {
    width: '100%',
    height: 104,
    backgroundColor: '#467FD3',
    justifyContent: 'flex-end'
  },
  appbarInner: {
    alignItems: 'center'
  },
  appbarRight: {
    position: 'absolute',
    right: 19,
    bottom: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  appbarTitle: {
    marginBottom: 8,
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 32,
    color: '#ffffff',
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
  circleButton: {
    backgroundColor: '#467FD3',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  circleButtonLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 40,
  }
});












