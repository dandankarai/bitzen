import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export const DetailAccount = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewImage}>
        <Image source={require('../../assets/icons/Avatar.png')} />
      </View>

      <View style={styles.viewContent}>
        <View style={styles.rowInfos}>
          <Text style={styles.textTitleRowInfos}>Nome</Text>
          <Text style={{fontSize: 16}}>Ana Maria Lima</Text>
        </View>

        <View style={styles.rowInfos}>
          <Text style={styles.textTitleRowInfos}>Email</Text>
          <Text style={{fontSize: 16}}>anamaria@email.com</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  viewImage: {
    marginVertical: 40,
    alignItems: 'center',
  },

  viewContent: {
    flexDirection: 'column',
    width: '100%',
  },

  rowInfos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 20,
  },

  textTitleRowInfos: {
    color: '#8C8C8C',
    fontSize: 16,
    lineHeight: 24,
  },
});
